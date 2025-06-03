import React, { useState } from 'react';
import { Phone, CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LeadCaptureDemoProps {
  variant?: 'hero' | 'cta' | 'inline';
  className?: string;
}

const LeadCaptureDemo = ({ variant = 'hero', className = '' }: LeadCaptureDemoProps) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showPhone, setShowPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInitialClick = () => {
    setShowForm(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsSubmitting(true);
    
    try {
      // Send name, email and phone to Make.com webhook
      await fetch('https://hook.us2.make.com/m1c5cugr1cf4zusz7c4go7cbdb4xf28y', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name || null,
          email: email,
          phone: phone || null,
          timestamp: new Date().toISOString(),
          source: 'ai-receptionist-demo'
        })
      });
    } catch (error) {
      console.error('Error sending data to webhook:', error);
      // Continue to show phone even if webhook fails
    }
    
    setIsSubmitting(false);
    setShowPhone(true);
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+12678438637";
  };

  const getButtonStyles = () => {
    switch (variant) {
      case 'hero':
        return "group inline-flex items-center px-10 py-5 text-xl font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105";
      case 'cta':
        return "group inline-flex items-center px-12 py-6 text-2xl font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105";
      default:
        return "group inline-flex items-center px-12 py-6 text-2xl font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105";
    }
  };

  if (!showForm) {
    return (
      <div className={className}>
        <button 
          onClick={handleInitialClick}
          className={getButtonStyles()}
        >
          <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
          Try the Live Demo Now
        </button>
      </div>
    );
  }

  if (showPhone) {
    return (
      <div className={`${className} animate-fade-in`}>
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-200 max-w-md mx-auto">
          <div className="text-center mb-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">You're All Set!</h3>
            <p className="text-gray-600">
              Click below to speak with our AI receptionist demo
            </p>
          </div>
          
          <button 
            onClick={handlePhoneCall}
            className="w-full group inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
            Call (267) 843-8637
          </button>
          
          <p className="text-sm text-gray-500 text-center mt-4">
            must be on a mobile phone
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} animate-fade-in`}>
      <div className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-200 max-w-md mx-auto">
        <div className="text-center mb-6">
          <Mail className="w-12 h-12 text-gray-900 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Instant Demo Access</h3>
          <p className="text-gray-900">
            we'll also email you with more info on the agent
          </p>
        </div>
        
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourcompany.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <Label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
              Phone
            </Label>
            <Input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-500"
              disabled={isSubmitting}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting || !email.includes('@')}
            className="w-full py-3 px-6 text-lg font-semibold text-white bg-gray-900 hover:bg-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              'Get Demo Access'
            )}
          </Button>
        </form>
        
        <p className="text-xs text-gray-900 text-center mt-4">
          We respect your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default LeadCaptureDemo;
