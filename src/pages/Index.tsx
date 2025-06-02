import { Phone, CheckCircle, XCircle, Star, Brain, Settings, Rocket } from "lucide-react";

const Index = () => {
  const handleDemoCall = () => {
    window.location.href = "tel:+12678438637";
  };

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-purple-600/5"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
              🚀 AI-Powered Business Solution
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
            Your Own 24/7 AI Receptionist—Never Miss a Call Again
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Instantly book more appointments, answer customer questions, and scale your business—without hiring more staff.
          </p>
          <button 
            onClick={handleDemoCall}
            className="group px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="inline-block w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
            🟣 Try the Live Demo Now
          </button>
          <p className="mt-4 text-sm text-gray-500">
            No setup required • Instant demo call
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Every Missed Call is Lost Revenue.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: XCircle, text: "Calls going to voicemail are calls going to competitors", color: "text-red-500" },
              { icon: XCircle, text: "Staff overwhelmed answering repetitive questions", color: "text-red-500" },
              { icon: XCircle, text: "Limited availability—customers frustrated outside business hours", color: "text-red-500" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                <p className="text-lg text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
              Introducing Your AI-Powered Voice Agent by Pentridge Media
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom-built AI receptionists that instantly manage your inbound calls with human-like intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🕐", title: "24/7 Availability", desc: "Your business never sleeps—neither does your AI receptionist." },
              { icon: "📅", title: "Appointment Booking", desc: "Seamlessly books calls right into your calendar." },
              { icon: "💬", title: "Instant Answers", desc: "Professionally handles FAQ & basic inquiries in real-time." },
              { icon: "📊", title: "Call Analytics", desc: "Get insights from conversations to grow your business." }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-purple-50 rounded-xl hover:shadow-lg transition-all">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Call Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-600 py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Don't Just Take Our Word—Try It Yourself
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Click below to speak directly with our AI receptionist demo. Experience exactly what your customers will.
          </p>
          <button 
            onClick={handleDemoCall}
            className="group inline-flex items-center px-12 py-6 text-2xl font-semibold text-purple-600 bg-white hover:bg-gray-50 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform" />
            🟣 Launch Your Demo Call Now
          </button>
          <p className="mt-6 text-purple-100">
            Works best on mobile. Or call us directly: <strong>(267) 843-8637</strong>
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Clear, Simple Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Choose the plan that fits your business needs</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                plan: 'Starter', 
                setup: '$2,500', 
                monthly: '$300/month', 
                ideal: 'Small businesses, solo operators',
                features: ['Basic AI receptionist', 'Calendar integration', 'FAQ handling', 'Call recording'],
                popular: false
              },
              { 
                plan: 'Growth', 
                setup: '$5,000', 
                monthly: '$500/month', 
                ideal: 'Teams, clinics, service providers',
                features: ['Advanced AI features', 'CRM integration', 'Custom workflows', 'Analytics dashboard', 'Priority support'],
                popular: true
              },
              { 
                plan: 'Enterprise', 
                setup: '$8,000+', 
                monthly: '$1,500/month', 
                ideal: 'High-volume companies with CRM integrations',
                features: ['Full customization', 'Multiple integrations', 'Dedicated support', 'Custom training', 'Advanced analytics'],
                popular: false
              }
            ].map((tier, index) => (
              <div key={index} className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all ${tier.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.plan}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-1">{tier.setup}</div>
                  <div className="text-xl text-gray-600 mb-3">{tier.monthly}</div>
                  <p className="text-sm text-gray-500">{tier.ideal}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  tier.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">What Business Owners Are Saying</h2>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl italic text-gray-800 mb-6">
              "We instantly saw a 40% increase in booked appointments after installing our AI receptionist. Total game-changer!"
            </blockquote>
            <p className="text-gray-600 font-semibold">— Sarah Chen, Wellness Clinic Owner</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">How It Works — 3 Simple Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, step: "1", title: "Quick Consult", desc: "Identify your needs & FAQs in a 30-minute call." },
              { icon: Settings, step: "2", title: "Fast Build", desc: "We build your custom AI voice agent in 7-10 days." },
              { icon: Rocket, step: "3", title: "Launch & Go", desc: "Start fielding calls immediately with full support." }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Got Questions? We've Got Answers.</h2>
          <div className="space-y-8">
            {[
              {
                q: "Can the AI receptionist integrate with my existing calendar or CRM?",
                a: "Yes—Google Calendar, Calendly, Zoho, Airtable, Salesforce, HubSpot, and many more platforms are supported."
              },
              {
                q: "How quickly can we get started?",
                a: "Your AI agent can be live within 7–10 business days after our initial consultation and requirements gathering."
              },
              {
                q: "Do I need any technical knowledge?",
                a: "Nope! We handle everything from setup to integration. You just need to provide us with your business information and preferences."
              },
              {
                q: "What happens if the AI can't answer a question?",
                a: "The AI can seamlessly transfer calls to your team or take detailed messages, ensuring no customer inquiry goes unanswered."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: {faq.q}</h3>
                <p className="text-gray-700"><strong>A:</strong> {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Give Your Business a 24/7 Advantage?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Click below, experience a live demo, and start booking more customers today.
          </p>
          <button 
            onClick={handleDemoCall}
            className="group px-12 py-6 text-2xl font-semibold text-gray-900 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="inline-block w-8 h-8 mr-4 group-hover:rotate-12 transition-transform" />
            🟣 Start Your AI Demo Now
          </button>
          <p className="mt-6 text-gray-300">
            No commitment required • Experience the future of customer service
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
