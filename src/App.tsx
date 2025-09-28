import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, X, ArrowRight, Check } from 'lucide-react';

interface DeliveryModel {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  expanded: boolean;
  color: 'orange' | 'blue';
}

// Lottie animation data for the scroll indicator
const scrollAnimationData = {"v":"5.5.7","fr":29.9700012207031,"ip":30.0000012219251,"op":78.0000031770051,"w":90,"h":92,"nm":"Pre-comp 1","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Scroll Outlines 4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":70,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":85,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":101,"s":[100],"e":[0]},{"t":116.000004724777}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":70,"s":[44.75,34.5,0],"e":[44.75,62,0],"to":[0,4.583,0],"ti":[0,-4.583,0]},{"t":116.000004724777}],"ix":2},"a":{"a":0,"k":[45,46,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,-3.464]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":70,"s":[70,70,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":85,"s":[80,80,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,5.464]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":101,"s":[80,80,100],"e":[70,70,100]},{"t":116.000004724777}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.172,1.171],[1.171,-1.172],[0,0],[0,0],[1.171,-1.172],[-1.172,-1.172],[0,0],[-0.929,0.162],[-0.716,0.717],[0,0]],"o":[[-1.171,-1.172],[0,0],[0,0],[-1.172,-1.172],[-1.172,1.171],[0,0],[0.718,0.717],[0.928,0.162],[0,0],[1.172,-1.172]],"v":[[19.607,-10.516],[15.365,-10.516],[0.001,4.848],[-15.364,-10.516],[-19.607,-10.516],[-19.607,-6.273],[-2.637,10.697],[0.001,11.526],[2.635,10.697],[19.607,-6.273]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.13300000359,0.13300000359,0.13300000359,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45,47.893],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":70.0000028511585,"op":117.000004765508,"st":70.0000028511585,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Scroll Outlines 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":47,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":62,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":78,"s":[100],"e":[0]},{"t":93.0000037879676}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":47,"s":[44.75,34.5,0],"e":[44.75,62,0],"to":[0,4.583,0],"ti":[0,-4.583,0]},{"t":93.0000037879676}],"ix":2},"a":{"a":0,"k":[45,46,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,-3.464]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":47,"s":[70,70,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":62,"s":[80,80,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,5.464]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":78,"s":[80,80,100],"e":[70,70,100]},{"t":93.0000037879676}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.172,1.171],[1.171,-1.172],[0,0],[0,0],[1.171,-1.172],[-1.172,-1.172],[0,0],[-0.929,0.162],[-0.716,0.717],[0,0]],"o":[[-1.171,-1.172],[0,0],[0,0],[-1.172,-1.172],[-1.172,1.171],[0,0],[0.718,0.717],[0.928,0.162],[0,0],[1.172,-1.172]],"v":[[19.607,-10.516],[15.365,-10.516],[0.001,4.848],[-15.364,-10.516],[-19.607,-10.516],[-19.607,-6.273],[-2.637,10.697],[0.001,11.526],[2.635,10.697],[19.607,-6.273]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.13300000359,0.13300000359,0.13300000359,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45,47.893],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":47.0000019143492,"op":94.0000038286985,"st":47.0000019143492,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Scroll Outlines 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":23,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":38,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":54,"s":[100],"e":[0]},{"t":69.0000028104276}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":23,"s":[44.75,34.5,0],"e":[44.75,62,0],"to":[0,4.583,0],"ti":[0,-4.583,0]},{"t":69.0000028104276}],"ix":2},"a":{"a":0,"k":[45,46,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,-3.464]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":23,"s":[70,70,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":38,"s":[80,80,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,5.464]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":54,"s":[80,80,100],"e":[70,70,100]},{"t":69.0000028104276}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.172,1.171],[1.171,-1.172],[0,0],[0,0],[1.171,-1.172],[-1.172,-1.172],[0,0],[-0.929,0.162],[-0.716,0.717],[0,0]],"o":[[-1.171,-1.172],[0,0],[0,0],[-1.172,-1.172],[-1.172,1.171],[0,0],[0.718,0.717],[0.928,0.162],[0,0],[1.172,-1.172]],"v":[[19.607,-10.516],[15.365,-10.516],[0.001,4.848],[-15.364,-10.516],[-19.607,-10.516],[-19.607,-6.273],[-2.637,10.697],[0.001,11.526],[2.635,10.697],[19.607,-6.273]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.13300000359,0.13300000359,0.13300000359,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45,47.893],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":23.0000009368092,"op":70.0000028511584,"st":23.0000009368092,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Scroll Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":15,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":31,"s":[100],"e":[0]},{"t":46.0000018736184}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[44.75,34.5,0],"e":[44.75,62,0],"to":[0,4.583,0],"ti":[0,-4.583,0]},{"t":46.0000018736184}],"ix":2},"a":{"a":0,"k":[45,46,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,-3.464]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[70,70,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":15,"s":[80,80,100],"e":[80,80,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,5.464]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":31,"s":[80,80,100],"e":[70,70,100]},{"t":46.0000018736184}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.172,1.171],[1.171,-1.172],[0,0],[0,0],[1.171,-1.172],[-1.172,-1.172],[0,0],[-0.929,0.162],[-0.716,0.717],[0,0]],"o":[[-1.171,-1.172],[0,0],[0,0],[-1.172,-1.172],[-1.172,1.171],[0,0],[0.718,0.717],[0.928,0.162],[0,0],[1.172,-1.172]],"v":[[19.607,-10.516],[15.365,-10.516],[0.001,4.848],[-15.364,-10.516],[-19.607,-10.516],[-19.607,-6.273],[-2.637,10.697],[0.001,11.526],[2.635,10.697],[19.607,-6.273]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.13300000359,0.13300000359,0.13300000359,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45,47.893],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":47.0000019143492,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Scroll","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[45,46,0],"ix":2},"a":{"a":0,"k":[45,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":90,"h":92,"ip":0,"op":900.000036657751,"st":0,"bm":0}],"markers":[]};

function App() {
  const lottieContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // @ts-ignore
    const lottie = (window as any).lottie;
    if (!lottie || !lottieContainerRef.current) return;
    const anim = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: scrollAnimationData,
    });
    return () => anim?.destroy();
  }, []);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [deliveryModels, setDeliveryModels] = useState<DeliveryModel[]>([
    {
      id: 'direct-placement',
      title: 'Direct Placement',
      subtitle: 'Hire the right talent, faster.',
      description: 'We source, screen, and place offshore BDRs and sales talent tailored to your business. You save weeks of hiring effort while cutting costs by up to 50%. Each candidate is vetted for skills, cultural fit, and long-term success, so you get the right hire the first time.',
      features: [
        'Custom interview process designed around your needs',
        'Pre-vetted, trained professionals ready to deliver from day one',
        'Reduced hiring time and improved retention'
      ],
      expanded: false,
      color: 'orange'
    },
    {
      id: 'managed-teams',
      title: 'Managed Teams',
      subtitle: 'Your sales team, built and run for you.',
      description: 'We provide not just the reps, but also the leadership to manage them. With Go Revaro\'s managed model, you get a fully supported team of offshore BDRs, complete with performance oversight, coaching, and reporting, without adding management overhead on your side.',
      features: [
        'A dedicated manager at no extra cost for every 5 reps',
        'Ongoing training, playbooks, and performance monitoring',
        'A scalable, low-risk way to grow your outbound team'
      ],
      expanded: false,
      color: 'blue'
    }
  ]);

  const toggleDeliveryModel = (id: string) => {
    setDeliveryModels(models =>
      models.map(model =>
        model.id === id ? { ...model, expanded: !model.expanded } : model
      )
    );
  };

  const processSteps = [
    {
      number: 1,
      title: 'Share your needs',
      description: 'Tell us the roles you\'re hiring for and the outcomes you want.'
    },
    {
      number: 2,
      title: 'We source the best talent',
      description: 'We search globally to find, vet, and shortlist the strongest candidates.'
    },
    {
      number: 3,
      title: 'Seamless onboarding',
      description: 'Your hires are trained, equipped with playbooks, and integrated into your workflow.'
    },
    {
      number: 4,
      title: 'Management & support',
      description: 'Choose our managed model and you\'ll also get a dedicated manager to oversee performance.'
    },
    {
      number: 5,
      title: 'Scale with confidence',
      description: 'Add more roles or build full teams as your business grows, without the hiring headache.'
    }
  ];

  // Helpers to render featured statement with colored commas, blue underlines, and quotes
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const underlineTargets = [
    'handle',
    'hiring',
    'offshore professionals',
    'next hire',
    'great talent',
    '50%',
    'access',
    'revenue-generating',
  ];
  const targetsRegex = new RegExp(`(${underlineTargets.map(escapeRegExp).join('|')})`, 'gi');

  const renderColoredCommas = (segment: string) => {
    // keep commas as separate tokens so we can style them
    const tokens = segment.split(/(,)/);
    return tokens.map((tok, i) =>
      tok === ',' ? (
        <span key={`c-${i}`} className="text-orange-600 font-semibold">,</span>
      ) : (
        <span key={`t-${i}`}>{tok}</span>
      )
    );
  };

  const renderFeaturedStatement = (text: string) => {
    const parts = text.split(targetsRegex);
    const nodes: React.ReactNode[] = [];
    parts.forEach((p, idx) => {
      if (!p) return;
      if (underlineTargets.some(t => t.toLowerCase() === p.toLowerCase())) {
        nodes.push(
          <span key={`u-${idx}`} className="underline decoration-blue-600 decoration-2 underline-offset-4">
            {p}
          </span>
        );
      } else {
        nodes.push(<React.Fragment key={`s-${idx}`}>{renderColoredCommas(p)}</React.Fragment>);
      }
    });
    return (
      <>
        <span className="mr-2 text-orange-600 font-semibold">“</span>
        {nodes}
        <span className="ml-2 text-orange-600 font-semibold">”</span>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-40 md:pt-52 lg:pt-60 pb-16 bg-white">
        <div className="max-width mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div ref={lottieContainerRef} className="mx-auto mb-6 h-20 w-20" aria-hidden="true"></div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight whitespace-normal md:whitespace-nowrap font-display">
              <span className="relative inline-block">
                Global talent
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded"></span>
              </span>{' '}
              <span>without the global price tag.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-900 max-w-2xl mx-auto font-display font-light">
              Access pre-vetted, trained offshore professionals ready to deliver.
            </p>
            <p className="mt-2 text-base md:text-lg text-gray-900 max-w-2xl mx-auto font-display font-light">
              Reduce costs by <span className="text-orange-600 font-semibold">50%</span>
            </p>
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => window.open('https://calendly.com/gorevaro/consultation', '_blank')}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-light hover:bg-blue-700 transition-all duration-300"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white mt-8">
        <div className="max-width mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900">Our Process</h2>
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 relative border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Statement */}
      <section className="py-24 bg-gray-100">
        <div className="max-width mx-auto px-6 lg:px-8">
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.2] text-gray-900 max-w-5xl font-display text-center mx-auto">
            {renderFeaturedStatement(
              "Great talent shouldn't cost you time or money. An interview process tailored to your needs. Access pre-vetted, trained offshore professionals ready to deliver. From headhunting to full management, we handle it all. Save weeks of hiring while reducing costs by up to 50%. The simplest way to scale revenue-generating roles, because all we want is for you to spend smarter on your next hire."
            )}
          </p>
        </div>
      </section>

      {/* Delivery Models Section */}
      <section id="delivery-models" className="py-20 bg-white">
        <div className="max-width mx-auto px-6 lg:px-8 text-center">
          
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">Our Delivery Models</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">Choose the model that fits your business needs and growth plans.</p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {deliveryModels.map((model) => (
              <div 
                key={model.id}
                className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border-t-4 text-center ${
                  model.color === 'orange' 
                    ? 'bg-orange-50 border-orange-500 hover:bg-orange-100' 
                    : 'bg-blue-50 border-blue-600 hover:bg-blue-100'
                }`}
              >
                <h3 className={`text-2xl font-semibold mb-2 text-center ${
                  model.color === 'orange' ? 'text-orange-600' : 'text-blue-600'
                }`}>
                  {model.title}
                </h3>
                
                <h4 className="text-lg font-medium text-gray-900 mb-6 text-center">{model.subtitle}</h4>
                
                {!model.expanded && (
                  <div className="space-y-3 mb-6">
                    {model.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 justify-center text-center">
                        <Check size={18} className={`mt-1 flex-shrink-0 ${
                          model.color === 'orange' ? 'text-orange-600' : 'text-blue-600'
                        }`} />
                        <span className="text-gray-900 text-base md:text-lg leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {model.expanded && (
                  <div className="mb-6">
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 text-center">{model.description}</p>
                    <div className="space-y-3">
                      {model.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 justify-center text-center">
                          <Check size={18} className={`mt-1 flex-shrink-0 ${
                            model.color === 'orange' ? 'text-orange-600' : 'text-blue-600'
                          }`} />
                          <span className="text-gray-900 text-base md:text-lg leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => toggleDeliveryModel(model.id)}
                  className={`mx-auto border-2 px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group ${
                    model.color === 'orange'
                      ? 'border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white'
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {model.expanded ? 'Hide Delivery Model' : 'View Delivery Model'}
                  {model.expanded ? (
                    <ChevronUp size={16} className="transition-transform" />
                  ) : (
                    <ChevronDown size={16} className="transition-transform" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us moved to dedicated page */}

      {/* About moved to dedicated page */}

      {/* Footer moved to RootLayout */}

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3 text-gray-500">
                <div className="w-2 h-2 bg-current rounded-full"></div>
                <span className="text-sm font-medium">Contact Us</span>
              </div>
              <button 
                onClick={() => setIsContactOpen(false)}
                className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">Let's discuss your talent needs</h2>
            <div className="w-full h-px bg-gray-300 mb-8"></div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-100 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-100 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="Smith" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-100 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-100 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="Your Company" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Tell us about your hiring needs</label>
                <textarea className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-100 focus:border-blue-600 focus:bg-white transition-all outline-none h-32 resize-none" placeholder="What roles are you looking to fill? What are your current challenges?"></textarea>
              </div>
              
              <button type="submit" className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 group">
                Send Message
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;