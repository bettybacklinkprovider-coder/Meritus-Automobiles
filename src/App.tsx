import React, { useState, useEffect } from 'react';
import { PageRoute, Vehicle } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { OurCarsPage } from './pages/OurCarsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { TestDriveModal } from './components/TestDriveModal';
import { AiConciergeModal } from './components/AiConciergeModal';

export default function App() {
  // Sync page route with URL hash for true separate page feeling
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    const hash = window.location.hash.replace('#', '') as PageRoute;
    if (['home', 'our-cars', 'about-us', 'contact-us'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Modal States
  const [detailVehicle, setDetailVehicle] = useState<Vehicle | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryVehicle, setEnquiryVehicle] = useState<Vehicle | null>(null);
  const [testDriveModalOpen, setTestDriveModalOpen] = useState(false);
  const [testDriveVehicle, setTestDriveVehicle] = useState<Vehicle | null>(null);
  const [aiConciergeOpen, setAiConciergeOpen] = useState(false);

  // Sync route with URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      if (['home', 'our-cars', 'about-us', 'contact-us'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (vehicleName?: string) => {
    if (vehicleName) {
      const matched = detailVehicle || null;
      setEnquiryVehicle(matched);
    } else {
      setEnquiryVehicle(null);
    }
    setEnquiryModalOpen(true);
  };

  const handleOpenTestDrive = (vehicle?: Vehicle) => {
    if (vehicle) {
      setTestDriveVehicle(vehicle);
    } else {
      setTestDriveVehicle(null);
    }
    setTestDriveModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0512] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenAiConcierge={() => setAiConciergeOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectVehicle={(car) => setDetailVehicle(car)}
            onOpenEnquiry={(carName) => handleOpenEnquiry(carName)}
            onBookTestDrive={(car) => handleOpenTestDrive(car)}
          />
        )}

        {currentPage === 'our-cars' && (
          <OurCarsPage
            onNavigate={handleNavigate}
            onSelectVehicle={(car) => setDetailVehicle(car)}
            onOpenEnquiry={(carName) => handleOpenEnquiry(carName)}
            onBookTestDrive={(car) => handleOpenTestDrive(car)}
          />
        )}

        {currentPage === 'about-us' && (
          <AboutUsPage
            onNavigate={handleNavigate}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}

        {currentPage === 'contact-us' && (
          <ContactUsPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Modals */}
      <VehicleDetailModal
        vehicle={detailVehicle}
        onClose={() => setDetailVehicle(null)}
        onBookTestDrive={(car) => handleOpenTestDrive(car)}
        onEnquire={(car) => {
          setEnquiryVehicle(car);
          setEnquiryModalOpen(true);
        }}
      />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        selectedVehicle={enquiryVehicle}
        onClose={() => {
          setEnquiryModalOpen(false);
          setEnquiryVehicle(null);
        }}
      />

      <TestDriveModal
        isOpen={testDriveModalOpen}
        selectedVehicle={testDriveVehicle}
        onClose={() => {
          setTestDriveModalOpen(false);
          setTestDriveVehicle(null);
        }}
      />

      <AiConciergeModal
        isOpen={aiConciergeOpen}
        onClose={() => setAiConciergeOpen(false)}
        onSelectVehicle={(car) => setDetailVehicle(car)}
      />
    </div>
  );
}
