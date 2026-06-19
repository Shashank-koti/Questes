import React from 'react';
import { FlaskConical, ShieldCheck, Activity } from 'lucide-react';

export const heroSlides = [
  {
    id: 1,
    title: "Advancing Healthcare",
    subtitle: "Science & Quality",
    desc: "Improving patient outcomes through high-quality formulations in Cardiology, Anesthesia, and Critical Care.",
    btn: "Our Science",
    link: "/science",
    image: "/images/hero_slide_2.png",
    // icon: <Activity className="w-5 h-5 text-brand-primary" />
  },
  {
    id: 2,
    title: "Formulations That Care.",
    subtitle: "Chemistry for a Better World.",
    desc: "Developing medicines that meet global quality standards to support healthcare professionals.",
    btn: "View Portfolio",
    link: "/portfolio",
    image: "/images/slide2.png",
    // icon: <FlaskConical className="w-5 h-5 text-cyan-400" />
  },
  {
    id: 3,
    title: "Developed in Hyderabad.",
    subtitle: "Trusted Worldwide.",
    desc: "Delivering critical care solutions globally through scientific excellence and a patient-centric approach.",
    btn: "About Us",
    link: "/about/questes-pharma",
    image: "/images/slide3.png",
    // icon: <ShieldCheck className="w-5 h-5 text-blue-400" />
  }
];

export const jobRoles = [
  { role: "Senior Formulation Scientist", department: "R&D", location: "Hyderabad" },
  { role: "Quality Assurance Manager", department: "Quality", location: "Hyderabad" },
  { role: "Regulatory Affairs Specialist", department: "Compliance", location: "Hyderabad" }
];

export const portfolioCategories = [
  {
    title: "Cardiology",
    description: "Advanced formulations addressing complex cardiovascular conditions, engineered to improve heart health and patient lifespans.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop",
    color: "from-rose-500/20 to-transparent",
    iconName: "HeartPulse"
  },
  {
    title: "ICU Management",
    description: "Critical life-saving therapies designed for rapid intervention and stabilization in intensive care environments.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-500/20 to-transparent",
    iconName: "Activity"
  },
  {
    title: "Critical Care Injectables",
    description: "High-precision sterile injectables manufactured under rigorous global standards for immediate patient care.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop",
    color: "from-teal-500/20 to-transparent",
    iconName: "Syringe"
  },
  {
    title: "Pain Management",
    description: "Targeted analgesic solutions providing effective relief while maintaining optimal safety and tolerability profiles.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ad?q=80&w=800&auto=format&fit=crop",
    color: "from-purple-500/20 to-transparent",
    iconName: "Pill"
  }
];

export const portfolioData = [
  {
    "Cardiology - Critical Emergencies": [
      {
        "brand_name": "ALPOSTADIL 500",
        "generic_name": "Alprostadil Inj IP 500mcg/ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "RHYSMOL",
        "generic_name": "Esmolol Inj IP 100mg/10ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "QUFELER FCM 500",
        "generic_name": "Ferric Carboxymaltose Inj 500mg/10ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "Q HEP 5000",
        "generic_name": "Heparin Sodium Inj 5000 IU/5ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "Q HEP 25000",
        "generic_name": "Heparin Sodium Inj 25000 IU/5ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "QUTIRO 5",
        "generic_name": "Tirofiban Infusion 5mg/100ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "NADACARD",
        "generic_name": "Adenosine Inj IP 6mg/2ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "ADNALINE 1",
        "generic_name": "Adrenaline bitartrate Inj 1mg/1ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "DARSON 150",
        "generic_name": "Amiodarone Intravenous Infusion IP Inj 150mg/3ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "DOBYUMIN 250",
        "generic_name": "Dobutamine hydrochloride 250mg/5ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "QUFELER 100",
        "generic_name": "Iron Sucrose Inj 100mg/5ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "Q TALOL 20 INJ",
        "generic_name": "Labetalol Inj IP 20mg/4ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "MILRITUS",
        "generic_name": "Milrinone lactate Inj USP 10mg/10ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "NOREDGE",
        "generic_name": "Noradrenaline Inj IP 4mg/2ml Amp",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "KLOPOT 1500",
        "generic_name": "Potassium Chloride for Inj concentrate IP 150mg/ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "STOVISOD 8.4%",
        "generic_name": "Sodium Bicarbonate Injection IP 8.4% w/v",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "TERLIBLOC",
        "generic_name": "Terlipressin acetate Inj 1mg/10ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "Q TRANZ 500",
        "generic_name": "Tranexamic Acid Inj 500mg/5ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "QVASP",
        "generic_name": "Vasopressin Inj IP 20 Unit/1ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "QNOX 40",
        "generic_name": "Enoxaparin Inj 40mg/0.4ml PFS",
        "dosage_form": "Pre-filled Syringe"
      },
      {
        "brand_name": "QNOX 60",
        "generic_name": "Enoxaparin Inj 60mg/0.6ml PFS",
        "dosage_form": "Pre-filled Syringe"
      },
      {
        "brand_name": "CARBETOCIN INJ 100MCG/1ML",
        "generic_name": "Carbetocin Inj 100mcg/1ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "QUFELER-FCM 1000",
        "generic_name": "Ferric Carboxymaltose Inj 1000mg/20ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "KINATREP",
        "generic_name": "Streptokinase Inj IP 15,00,000 IU",
        "dosage_form": "Lyophilized Vial"
      }
    ]
  }, {
    "Anesthesia": [
      {
        "brand_name": "BIPCAINE 0.25",
        "generic_name": "Bupivacaine Inj IP 50mg/20ml; 0.25%",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "BIPCAINE 0.5",
        "generic_name": "Bupivacaine Inj IP 100mg/20ml; 0.5%",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "CIS-ATKURE 10",
        "generic_name": "Cis-Atracurium besylate Inj 10mg/5ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "CIS-ATKURE 20",
        "generic_name": "Cis-Atracurium besylate Inj 20mg/10ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "CARDIDATE 20",
        "generic_name": "Etomidate Inj 2mg/ml; 10ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "LIDOTRUST ADR",
        "generic_name": "Lignocaine Hydrochloride 2%+Adrenaline Inj",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "LIDOTRUST 2%",
        "generic_name": "Lignocaine Hydrochloride Inj IP 2%",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "QUMEPH 300",
        "generic_name": "Mephentermine Sulphate Inj IP 30mg/ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF MCT 100",
        "generic_name": "Propofol Injection IP MCT-LCT 100mg/10ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF MCT 200",
        "generic_name": "Propofol Injection IP MCT-LCT 200mg/20ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF MCT 500",
        "generic_name": "Propofol Injection IP MCT-LCT 500mg/50ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF 100",
        "generic_name": "Propofol Injection IP 100mg/10ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF 200",
        "generic_name": "Propofol Injection IP 200mg/20ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF 500",
        "generic_name": "Propofol Injection IP 500mg/50ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "ROCPACE 50",
        "generic_name": "Rocuronium bromide Inj 50mg/5ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "ROCPACE 100",
        "generic_name": "Rocuronium bromide Inj 100mg/10ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "ATKURE 25",
        "generic_name": "Atracurium Besylate Inj IP 25mg/2.5ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "ATKURE 50",
        "generic_name": "Atracurium Besylate Inj IP 50mg/5ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "DEXDOLAR 100",
        "generic_name": "Dexmedetomidine hydrochloride USP Inj 100mcg/ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "DEXDOLAR 200",
        "generic_name": "Dexmedetomidine hydrochloride USP Inj 100mcg/ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "MAGISTIG G",
        "generic_name": "Glycopyrrolate + Neostigmine Inj",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "GLYOLET 0.2",
        "generic_name": "Glycopyrrolate injection IP 200mcg/ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "MAGISTIG 2.5",
        "generic_name": "Neostigmine methylsulfate Inj IP 2.5mg/5ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "VECBLOC 4",
        "generic_name": "Vecuronium Bromide Inj IP 4mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "VECBLOC 10",
        "generic_name": "Vecuronium Bromide Inj IP 10mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "SEVOVINT 50",
        "generic_name": "Sevoflurane USP 50ml",
        "dosage_form": "Bottle"
      },
      {
        "brand_name": "SEVOVINT 250",
        "generic_name": "Sevoflurane USP 250ml",
        "dosage_form": "Bottle"
      },
      {
        "brand_name": "LIDOTRUST GEL",
        "generic_name": "Lignocaine Hydrochloride Gel IP 2% w/v",
        "dosage_form": "Gel Tube"
      },
      {
        "brand_name": "NUBLODEX",
        "generic_name": "Sugammadex sodium Inj 100mg/ml in 2ml",
        "dosage_form": "Liquid Vial"
      }
    ]
  }, {
    "ICU - Critical Care": [
      {
        "brand_name": "ARASEIZ",
        "generic_name": "Levetiracetam Concentrate for Infusion 100mg/ml; 5ml Vial",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "Q DULA 100",
        "generic_name": "Anidulafungin for Inj 100mg; Lyophilized Powder",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "CASPO Q 50",
        "generic_name": "Caspofungin acetate for Inj 50mg; Lyophilized Powder",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "CASPO Q 70",
        "generic_name": "Caspofungin acetate for Inj 70mg; Lyophilized Powder",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "GLOOT 600",
        "generic_name": "Glutathione for Inj 600mg+ Ascorbic Acid",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "QULIP 50",
        "generic_name": "Liposomal Amphotericin B Inj 50mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "MICASPOR 100",
        "generic_name": "Micafungin Sodium for Inj 100mg/Vial (Lyophilized)",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "SUCIMIN 100",
        "generic_name": "Minocycline for Inj USP 100mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "ULINI Q",
        "generic_name": "Ulinastatin Inj 100000 IU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "CYSTACE 400 INJ",
        "generic_name": "Acetylcysteine Inj BP 400mg/2ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "CYSTACE 1000 INJ",
        "generic_name": "Acetylcysteine Inj BP 1000mg/5ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "TCOLIN 500",
        "generic_name": "Citicoline Inj IP 500mg/2ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "TCOLIN 1000",
        "generic_name": "Citicoline Inj IP 1000mg/4ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "QUCLIN 300",
        "generic_name": "Clindamycin Inj IP 300mg/2ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "QUCLIN 600",
        "generic_name": "Clindamycin Inj IP 600mg/4ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "POCOLEV",
        "generic_name": "Levocarnitine Injection USP 1000mg/5ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "ASPROLIV",
        "generic_name": "L-Ornithine L-Aspartate Infusion Inj 5gm/10ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "VIVITIDE 50",
        "generic_name": "Octreotide acetate Inj 50mcg/ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "VIVITIDE 100",
        "generic_name": "Octreotide acetate Inj 100mcg/ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "TREVUP 200",
        "generic_name": "Thiamine Injection (Vit B1) IP 200mg/2ml",
        "dosage_form": "Liquid Ampoule"
      },
      {
        "brand_name": "ACYLOG 250",
        "generic_name": "Aciclovir Intravenous Infusion IP 250mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "ACYLOG 500",
        "generic_name": "Aciclovir Intravenous Infusion IP 500mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QUETHRO 500",
        "generic_name": "Azithromycin for Inj USP 500mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QRITH 500",
        "generic_name": "Clarithromycin for Infusion IP 500mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QISTIN 1 MIU",
        "generic_name": "Colistimethate Sodium Inj 1 MIU",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QISTIN 2 MIU",
        "generic_name": "Colistimethate Sodium Inj 2 MIU",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QISTIN 3 MIU",
        "generic_name": "Colistimethate Sodium Inj 3 MIU",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QISTIN 4.5 MIU",
        "generic_name": "Colistimethate Sodium Inj 4.5 MIU",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QUCYDOX 100",
        "generic_name": "Doxycycline for Inj USP 100mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QUCORT 100",
        "generic_name": "Hydrocortisone Sodium Succinate Inj IP 100mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "ESTOPRED 40",
        "generic_name": "Methylprednisolone Sodium Succinate Inj 40mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "ESTOPRED 125",
        "generic_name": "Methylprednisolone Sodium Succinate Inj 125mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "ESTOPRED 500",
        "generic_name": "Methylprednisolone Sodium Succinate Inj 500mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "ESTOPRED 1000",
        "generic_name": "Methylprednisolone Sodium Succinate Inj 1000mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "STYPEN 40",
        "generic_name": "Pantoprazole for Inj IP 40mg (with NS)",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "Q MIXIN 500000 IU",
        "generic_name": "Polymyxin B sulfate Inj 500000 IU",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QUCOP 200",
        "generic_name": "Teicoplanin Inj IP 200",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QUCOP 400",
        "generic_name": "Teicoplanin Inj IP 400",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "TIGYNT 50",
        "generic_name": "Tigecycline Inj IP 50mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "VAN Q 500",
        "generic_name": "Vancomycin hydrochloride for IV infusion 500mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "VAN Q 1000",
        "generic_name": "Vancomycin hydrochloride for IV infusion 1000mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QUNIL 200 INJ",
        "generic_name": "Voriconazole Inj IP 200mg; Lyophilized Powder",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "FLUKOHON",
        "generic_name": "Fluconazole Inj 200mg/100ml",
        "dosage_form": "Bottle FFS"
      },
      {
        "brand_name": "EVOFLOCIN",
        "generic_name": "Levofloxacin Inj 500mg/100ml",
        "dosage_form": "Bottle FFS"
      },
      {
        "brand_name": "LIDZOLIN INJ 600",
        "generic_name": "Linezolid Inj 2mg/ml in 300ml",
        "dosage_form": "Bottle"
      },
      {
        "brand_name": "CETGESIC",
        "generic_name": "Paracetamol Infusion IP 1% w/v (1000mg/100ml)",
        "dosage_form": "Bottle LDPE"
      }, {
        "brand_name": "CROSUL 1.5",
        "generic_name": "Cefoperazone & Sulbactam for Inj 1.5gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "UNIXAT",
        "generic_name": "Cefotaxime Inj IP 1gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "ZODITAZ",
        "generic_name": "Ceftazidime Inj IP 1gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "ZIVIBAC 2.5",
        "generic_name": "Ceftazidime 2gm & Avibactam 0.5gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "BACAVIZ 2.5",
        "generic_name": "Ceftazidime 2gm + Avibactam 0.5gm Inj",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "XOFISUL",
        "generic_name": "Ceftriaxone Inj IP 1gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "XOFISUL-S",
        "generic_name": "Ceftriaxone & Sulbactam for Inj IP 1.5gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "RUFOXIM 750 INJ",
        "generic_name": "Cefuroxime Sodium Inj IP 750mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "RUFOXIM INJ 1500",
        "generic_name": "Cefuroxime Sodium Inj IP 1500mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "VASIMIP",
        "generic_name": "Imipenem & Cilastatin Inj IP 500mg/500mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QEROPEN 500",
        "generic_name": "Meropenem Inj IP 500mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QEROPEN 1000",
        "generic_name": "Meropenem Inj IP 1000mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "HIZLAM 1",
        "generic_name": "Aztreonam Inj USP 1gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QPAC TZ",
        "generic_name": "Piperacillin & Tazobactam Inj IP 4.5gm Inj",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "SULBAFEND 1",
        "generic_name": "Sulbactam for Inj 1gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "QUNIL 200 TAB",
        "generic_name": "Voriconazole Tab IP 200mg",
        "dosage_form": "Tablet"
      },
      {
        "brand_name": "ARREBAC 1.2",
        "generic_name": "Amoxycillin & Pot. Clavulanate Inj 1.2gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "HIZLAM 2",
        "generic_name": "Aztreonam 2gm Inj",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "CROSUL 3",
        "generic_name": "Cefoperazone 2gm+Sulbactam 1gm Inj",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "INHATOB 300",
        "generic_name": "Tobramycin Inhalation Solution IP 300mg/5ml Respules",
        "dosage_form": "Liquid Respules"
      },
      {
        "brand_name": "VRAHCIN 500",
        "generic_name": "Amikacin sulphate IP Inj 500mg/2ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "VIVITIDE LAR 30",
        "generic_name": "Octreotide acetate LAR 30mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "SPITZIPAR",
        "generic_name": "Teriparatide Inj prefilled Pen 600mcg/2.4ml",
        "dosage_form": "Prefilled Pen"
      },
      {
        "brand_name": "RUFOXIM 500 TAB",
        "generic_name": "Cefuroxime axetil & Lactic acid bacillus Tab 500mg",
        "dosage_form": "Tablet"
      },
      {
        "brand_name": "LIDZOLIN 600 TAB",
        "generic_name": "Linezolid Tab IP 600mg",
        "dosage_form": "Tablet"
      },
      {
        "brand_name": "CYSTACE 600 TAB",
        "generic_name": "N-Acetylcysteine Effervescent Tab 600mg",
        "dosage_form": "Tablet"
      },
      {
        "brand_name": "SACOPOS 100",
        "generic_name": "Posaconazole GR Tab 100mg",
        "dosage_form": "Tablet"
      },
      {
        "brand_name": "RUFEPIME TZ",
        "generic_name": "Cefepime & Tazobactam Inj 1.125gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "BACAVIZ 2.5",
        "generic_name": "Ceftazidime 2gm+ Avibactam 0.5gm Inj",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "AMICRYS",
        "generic_name": "Nutritive Infusion of Pure Crystalline Amino acid-200ml",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "Q MIXIN 500000 IU",
        "generic_name": "Polymyxin B sulfate Inj 500000 IU",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "Q MIXIN 750000 IU",
        "generic_name": "Polymyxin B sulfate Inj 750000 IU",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "SULBAFEND 1",
        "generic_name": "Sulbactam for Inj 1gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "TCOTOP 200",
        "generic_name": "Teicoplanin Inj 200gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "ERGOVOR INJ 200",
        "generic_name": "Voriconazole Inj 200mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "Q BUMIN 400",
        "generic_name": "Protein Powder 400gm",
        "dosage_form": "Edible Protein"
      },
      {
        "brand_name": "RELEGLUT 20",
        "generic_name": "L-Alanyl-L-Glutamine Infusion (20% w/v) in 50ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "TAMINYL 20",
        "generic_name": "L-Alanyl-L-Glutamine Infusion (20% w/v) in 50ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "PHENETOP",
        "generic_name": "Paracetamol Infusion IP 1% w/v (1000mg/100ml) Pouch",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "ANIDALGE 100",
        "generic_name": "Anidulafungin Inj 100mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "NEOGLUT 600",
        "generic_name": "Glutathione for Inj 600mg+ Ascorbic Acid",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "ULINI Q",
        "generic_name": "Ulinastatin Inj 100000 IU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "ERGOVOR TAB 200",
        "generic_name": "Voriconazole Tab 200mg",
        "dosage_form": "Tablet"
      },
      {
        "brand_name": "TCOTOP 600",
        "generic_name": "Teicoplanin Inj 600gm",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "TIGYNT Plus 100",
        "generic_name": "Tigecycline Inj 100mg",
        "dosage_form": "Dry Powder Injection"
      },
      {
        "brand_name": "Q BUMIN 225",
        "generic_name": "Protein Powder 225gm",
        "dosage_form": "Bottle"
      }
    ]
  }
]
