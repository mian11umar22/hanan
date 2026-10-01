import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const campaignData = [
  {
    id: 1,
    title: "Orphan Sponsorship Campaign",
    subtitle: "Paid Ad Copy",
    metrics: [
      { label: "Conversions", value: "114" },
      { label: "Revenue", value: "$10.9K" },
      { label: "ROAS", value: "3.9×", highlight: true }
    ],
    sample: "One Child. One Chance.",
    buttonText: "View Campaign Copy",
    buttonHref: "https://docs.google.com/document/d/1f7zPnXwfIIFE5qc1spEnxR393-o-zLRd-fkbAEHPtbY/edit?tab=t.0"
  },
  {
    id: 2,
    title: "Solar Water Well Campaign",
    subtitle: "Paid Ad Copy",
    metrics: [
      { label: "Conversions", value: "390" },
      { label: "Revenue", value: "$58.9K" },
      { label: "ROAS", value: "13.4×", highlight: true }
    ],
    sample: "Give the Gift of Water.",
    buttonText: "View Campaign Copy",
    buttonHref: "https://docs.google.com/document/d/18XvVszXSqlKPkUYBj2xfLcHoK8FJoQU4wVT32YaaH-U/edit?tab=t.0"
  },
  {
    id: 3,
    title: "Nueces Mosque Prayer Spots",
    subtitle: "Landing Page Copy",
    singleMetric: {
      label: "Total Revenue Generated",
      value: "$158,339.99"
    },
    description: "Fundraising landing page copy focused on prayer, community impact, and Sadaqah Jariyah.",
    buttonText: "View Landing Page",
    buttonHref: "https://docs.google.com/document/d/1-NZWWJn-6s-TIn9o51S7qXbbqantk4ONoW8Fk0Kfz6k/edit?tab=t.0"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const CampaignResults = () => {
  return (
    <section id="results" className="px-8 md:px-16 py-24 bg-[#E8E4D9]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-14 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent text-sm font-bold tracking-widest uppercase mb-2">
            Proven Financial Impact
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary">
              Selected Campaign Results
            </h2>
            <p className="text-textPrimary/70 max-w-md text-sm md:text-base">
              Real fundraising outcomes and conversion data driven by direct-response storytelling.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {campaignData.map((campaign) => (
            <motion.div
              key={campaign.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-7 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-textPrimary/10 border border-textPrimary/5 transition-all duration-300"
            >
              <div>
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    {campaign.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-textPrimary mt-1.5 leading-snug">
                    {campaign.title}
                  </h3>
                </div>

                {/* Metrics Section */}
                {campaign.metrics ? (
                  <div className="grid grid-cols-3 gap-2 py-4 px-3 bg-primary/70 rounded-xl mb-6 border border-textPrimary/5 text-center">
                    {campaign.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col justify-center">
                        <span className={`text-xl lg:text-2xl font-bold ${metric.highlight ? 'text-accent' : 'text-textPrimary'}`}>
                          {metric.value}
                        </span>
                        <span className="text-[10px] md:text-[11px] uppercase tracking-wider text-textPrimary/60 font-semibold mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-4 px-4 bg-primary/70 rounded-xl mb-6 border border-textPrimary/5 text-center">
                    <span className="block text-2xl lg:text-3xl font-bold text-accent font-serif">
                      {campaign.singleMetric.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-textPrimary/60 font-semibold mt-0.5 block">
                      {campaign.singleMetric.label}
                    </span>
                  </div>
                )}

                {/* Sample or Description */}
                {campaign.sample && (
                  <div className="mb-8">
                    <span className="text-[11px] uppercase tracking-wider text-textPrimary/50 font-bold block mb-1.5">
                      Sample Hook:
                    </span>
                    <blockquote className="italic text-textPrimary/85 font-serif text-lg border-l-2 border-accent pl-3.5 py-0.5">
                      "{campaign.sample}"
                    </blockquote>
                  </div>
                )}

                {campaign.description && (
                  <div className="mb-8">
                    <span className="text-[11px] uppercase tracking-wider text-textPrimary/50 font-bold block mb-1.5">
                      Campaign Focus:
                    </span>
                    <p className="text-sm text-textPrimary/75 leading-relaxed">
                      {campaign.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Call to action button */}
              <div className="pt-2">
                <Button 
                  href={campaign.buttonHref} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  variant="primary" 
                  className="w-full text-sm"
                >
                  {campaign.buttonText} &rarr;
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignResults;
