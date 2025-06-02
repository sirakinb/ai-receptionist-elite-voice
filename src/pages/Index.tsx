import { CheckCircle, XCircle, Star, Brain, Settings, Rocket } from "lucide-react";
import LeadCaptureDemo from "@/components/LeadCaptureDemo";

const Index = () => {
  const handleDemoCall = () => {
    window.location.href = "tel:+12678438637";
  };

  return (
    <main className="bg-black text-gray-100 overflow-x-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-end">
          <a 
            href="https://cal.com/akinyemi-bajulaiye-2jua88/15-min-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Book an Intro Call
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-black"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-xl blur-lg opacity-10 animate-pulse"></div>
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                className="relative h-20 w-auto mx-auto"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-100 leading-[1.1] tracking-tight">
            Your Own 24/7 AI Receptionist—Never Miss a Call Again
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Instantly book more appointments, answer customer questions, and scale your business—without hiring more staff.
          </p>
          <LeadCaptureDemo variant="hero" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-100">
            Every Missed Call is Lost Revenue.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: XCircle, text: "Calls going to voicemail are calls going to competitors", color: "text-red-400" },
              { icon: XCircle, text: "Staff overwhelmed answering repetitive questions", color: "text-red-400" },
              { icon: XCircle, text: "Limited availability—customers frustrated outside business hours", color: "text-red-400" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
                <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                <p className="text-lg text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-100">
              Introducing Your AI-Powered Voice Agent by Pentridge Media
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Custom-built AI receptionists that instantly manage your inbound calls with human-like intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "24/7 Availability", desc: "Your business never sleeps—neither does your AI receptionist." },
              { title: "Appointment Booking", desc: "Seamlessly books calls right into your calendar." },
              { title: "Instant Answers", desc: "Professionally handles FAQ & basic inquiries in real-time." },
              { title: "Call Analytics", desc: "Get insights from conversations to grow your business." }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-gray-900/20 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-800">
                <h3 className="text-xl font-semibold text-gray-100 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-gray-100 mr-3" />
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Call Section */}
      <section className="bg-black py-24 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-100">
            Don't Just Take Our Word—Try It Yourself
          </h2>
          <p className="text-xl mb-10 text-gray-400 leading-relaxed">
            Click the button below to get instant access to our AI receptionist demo. Experience exactly what your customers will.
          </p>
          <LeadCaptureDemo variant="inline" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-100">What Business Owners Are Saying</h2>
          <div className="bg-gray-900/20 p-10 rounded-2xl shadow-lg border border-gray-800">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-100 mb-6 leading-relaxed">
              "We instantly saw a 40% increase in booked appointments after installing our AI receptionist. Total game-changer!"
            </blockquote>
            <p className="text-gray-400 font-semibold">— Major Wellness Clinic Owner</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">How It Works — 3 Simple Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, step: "1", title: "Quick Consult", desc: "Identify your needs & FAQs in a 15-min call." },
              { icon: Settings, step: "2", title: "Fast Build", desc: "We build your custom AI voice agent in 7-10 days." },
              { icon: Rocket, step: "3", title: "Launch & Go", desc: "Start fielding calls immediately with full support." }
            ].map((item, index) => (
              <div key={index} className="text-center p-8 bg-gray-900/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-300 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">Got Questions? We've Got Answers.</h2>
          <div className="space-y-6">
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
              <div key={index} className="bg-gray-900/20 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800">
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Q: {faq.q}</h3>
                <p className="text-gray-400 leading-relaxed"><strong>A:</strong> {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 leading-tight text-gray-100">
            Ready to Give Your Business a 24/7 Advantage?
          </h2>
          <p className="text-xl mb-10 text-gray-400 leading-relaxed">
            Book a 15-minute discovery call to get your agent live
          </p>
          <a 
            href="https://cal.com/akinyemi-bajulaiye-2jua88/15-min-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 text-2xl font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Book A Discovery Call
          </a>
          <p className="mt-6 text-gray-500">
            No commitment required • Experience the future of customer service
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
