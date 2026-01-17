import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { ChatAssistant } from './components/ChatAssistant';
import { Doctor, Service, AppointmentStatus } from './types';
import { Stethoscope, Brain, Heart, Baby, Calendar, CheckCircle, AlertCircle, ArrowRight, Phone } from 'lucide-react';

const doctors: Doctor[] = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Cardiology", experience: "15 Years", image: "https://picsum.photos/300/300?random=1" },
  { id: 2, name: "Dr. Michael Chen", specialty: "Neurology", experience: "12 Years", image: "https://picsum.photos/300/300?random=2" },
  { id: 3, name: "Dr. Emily Davis", specialty: "Pediatrics", experience: "10 Years", image: "https://picsum.photos/300/300?random=3" },
  { id: 4, name: "Dr. James Wilson", specialty: "Orthopedics", experience: "20 Years", image: "https://picsum.photos/300/300?random=4" },
];

const services: Service[] = [
  { id: 1, title: "Cardiology", description: "Comprehensive heart care and surgery services.", icon: "heart" },
  { id: 2, title: "Neurology", description: "Advanced diagnosis and treatment for brain disorders.", icon: "brain" },
  { id: 3, title: "Pediatrics", description: "Specialized care for infants, children, and adolescents.", icon: "baby" },
  { id: 4, title: "General Surgery", description: "Minimally invasive surgical procedures.", icon: "stethoscope" },
];

function App() {
  const [activePage, setActivePage] = useState('home');
  const [appointmentStatus, setAppointmentStatus] = useState<AppointmentStatus>(AppointmentStatus.IDLE);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: 'Cardiology',
    notes: ''
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentStatus(AppointmentStatus.SUBMITTING);
    // Simulate API call
    setTimeout(() => {
      setAppointmentStatus(AppointmentStatus.SUCCESS);
      setFormData({ name: '', email: '', phone: '', date: '', department: 'Cardiology', notes: '' });
    }, 1500);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white py-24 px-4 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?blur=4')] bg-cover bg-center opacity-20"></div>
              <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 space-y-6">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Advanced Healthcare <br /> With <span className="text-blue-400">AI Precision</span>
                  </h1>
                  <p className="text-xl text-blue-100 max-w-lg">
                    Experience the future of medicine. Our world-class doctors are assisted by cutting-edge AI technology to provide the best care for you.
                  </p>
                  <div className="flex space-x-4">
                    <button onClick={() => setActivePage('appointment')} className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Book Appointment
                    </button>
                    <button onClick={() => setActivePage('doctors')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                      Meet Doctors
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                  <img 
                    src="https://picsum.photos/600/600?random=10" 
                    alt="Doctor" 
                    className="rounded-2xl shadow-2xl border-4 border-white/20 max-w-sm md:max-w-md"
                  />
                </div>
              </div>
            </section>

            {/* Features Strip */}
            <section className="py-12 bg-white">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Calendar className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">Easy Booking</h3>
                    <p className="text-slate-600 text-sm mt-1">Book appointments online instantly with our AI scheduler.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Stethoscope className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">Expert Doctors</h3>
                    <p className="text-slate-600 text-sm mt-1">Qualified specialists from top medical institutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Heart className="w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">Emergency Care</h3>
                    <p className="text-slate-600 text-sm mt-1">24/7 specialized emergency units ready for you.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick About */}
            <section className="py-16 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                   <img src="https://picsum.photos/800/600?random=11" alt="Hospital Interior" className="rounded-2xl shadow-xl" />
                </div>
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900">Why Choose MediCare AI?</h2>
                  <p className="text-slate-600 leading-relaxed">
                    We combine compassionate human care with the efficiency of modern technology. Our AI diagnostic tools help doctors identify issues faster, while our automated systems ensure you spend less time waiting and more time healing.
                  </p>
                  <ul className="space-y-3">
                    {['State-of-the-art facilities', '24/7 Patient Support', 'Integrated Lab Services', 'Affordable Healthcare Plans'].map((item, i) => (
                      <li key={i} className="flex items-center text-slate-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setActivePage('services')} className="flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-4">
                    Learn More About Services <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </section>
          </>
        );

      case 'services':
        return (
          <section className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Our Medical Departments</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Providing a comprehensive range of medical services to cater to all your health needs.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                  <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center group">
                    <div className="bg-blue-50 p-4 rounded-full text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {service.icon === 'heart' && <Heart className="w-8 h-8" />}
                      {service.icon === 'brain' && <Brain className="w-8 h-8" />}
                      {service.icon === 'baby' && <Baby className="w-8 h-8" />}
                      {service.icon === 'stethoscope' && <Stethoscope className="w-8 h-8" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'doctors':
        return (
          <section className="py-20 bg-white min-h-screen">
             <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Meet Our Specialists</h2>
              <p className="text-center text-slate-600 mb-12">Our team of experienced doctors is dedicated to your health and well-being.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="overflow-hidden h-64">
                      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">{doctor.specialty}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                      <p className="text-slate-500 text-sm mb-4">{doctor.experience} Experience</p>
                      <button onClick={() => setActivePage('appointment')} className="w-full py-2 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-blue-600 hover:text-white hover:border-transparent transition-colors">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'appointment':
        return (
          <section className="py-20 bg-slate-50 min-h-screen flex items-center">
            <div className="max-w-4xl mx-auto px-4 w-full">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-blue-600 p-8 text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
                    <p className="text-blue-100 opacity-90 mb-8">
                      Schedule a visit with one of our specialists. Our AI system will confirm availability instantly.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 opacity-70" />
                        <span>+1 (800) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-3 opacity-70" />
                        <span>Mon - Sat, 8am - 8pm</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="w-12 h-1 bg-white/30 rounded-full mb-8"></div>
                    <p className="text-sm italic opacity-80">"The art of medicine consists of amusing the patient while nature cures the disease."</p>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 lg:p-12">
                  {appointmentStatus === AppointmentStatus.SUCCESS ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">Booking Confirmed!</h3>
                      <p className="text-slate-600">We have sent a confirmation email to {formData.email}.</p>
                      <button 
                        onClick={() => setAppointmentStatus(AppointmentStatus.IDLE)}
                        className="mt-6 text-blue-600 font-semibold hover:underline"
                      >
                        Book another appointment
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Full Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="(555) 000-0000"
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Preferred Date</label>
                          <input 
                            required
                            type="date" 
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            value={formData.date}
                            onChange={e => setFormData({...formData, date: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Department</label>
                          <select 
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                            value={formData.department}
                            onChange={e => setFormData({...formData, department: e.target.value})}
                          >
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Pediatrics</option>
                            <option>Orthopedics</option>
                            <option>General Checkup</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Additional Notes (Optional)</label>
                        <textarea 
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-24 resize-none"
                          placeholder="Briefly describe your symptoms or reason for visit..."
                          value={formData.notes}
                          onChange={e => setFormData({...formData, notes: e.target.value})}
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={appointmentStatus === AppointmentStatus.SUBMITTING}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                      >
                        {appointmentStatus === AppointmentStatus.SUBMITTING ? (
                           <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Processing...
                           </>
                        ) : 'Confirm Booking'}
                      </button>
                      
                      <div className="flex items-center justify-center text-xs text-slate-500 mt-4 bg-yellow-50 p-2 rounded border border-yellow-100">
                        <AlertCircle className="w-4 h-4 text-yellow-500 mr-2" />
                        Please verify your insurance details at the reception.
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      
      default:
        return null;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderContent()}
      <ChatAssistant />
    </Layout>
  );
}

export default App;