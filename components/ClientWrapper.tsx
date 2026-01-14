'use client'

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface ClientWrapperProps {
  children: (props: {
    isScrolled: boolean;
    emails: {[key: string]: string};
    emailStatus: {[key: string]: 'idle' | 'loading' | 'success' | 'error'};
    emailMessage: {[key: string]: string};
    onEmailChange: (key: string, value: string) => void;
    onSubmit: (e: React.FormEvent, planName: string) => void;
  }) => React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [emails, setEmails] = useState<{[key: string]: string}>({});
  const [emailStatus, setEmailStatus] = useState<{[key: string]: 'idle' | 'loading' | 'success' | 'error'}>({});
  const [emailMessage, setEmailMessage] = useState<{[key: string]: string}>({});

  const handleWaitlistSubmit = async (e: React.FormEvent, planName: string) => {
    e.preventDefault();
    setEmailStatus(prev => ({ ...prev, [planName]: 'loading' }));

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: emails[planName] });

    if (error) {
      if (error.code === '23505') {
        setEmailMessage(prev => ({ ...prev, [planName]: 'Already on waitlist!' }));
      } else {
        setEmailMessage(prev => ({ ...prev, [planName]: 'Error. Try again.' }));
      }
      setEmailStatus(prev => ({ ...prev, [planName]: 'error' }));
    } else {
      setEmailMessage(prev => ({ ...prev, [planName]: 'Success! We\'ll notify you.' }));
      setEmailStatus(prev => ({ ...prev, [planName]: 'success' }));
      setEmails(prev => ({ ...prev, [planName]: '' }));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {children({
        isScrolled,
        emails,
        emailStatus,
        emailMessage,
        onEmailChange: (key, value) => setEmails(prev => ({ ...prev, [key]: value })),
        onSubmit: handleWaitlistSubmit
      })}
    </>
  );
}
