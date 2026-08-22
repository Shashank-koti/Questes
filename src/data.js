import React from 'react';
import { FlaskConical, ShieldCheck, Activity } from 'lucide-react';

export const heroSlides = [
  {
    id: 1,
    title: "Advancing Healthcare",
    subtitle: "Science & Quality",
    desc: "Improving patient outcomes through high quality formulations in Cardiology, Anesthesia, and Critical Care.",
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
    link: "/about/questus-pharma",
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
    "Cardiovascular Range": [
      {
        "brand_name": "ALPOSTADIL 500",
        "generic_name": "Alprostadil Inj IP 500 mcg/ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "DARSON 150",
        "generic_name": "Amiodarone Intravenous Infusion IP Inj 150 mg/3 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "DOBYUMIN 250",
        "generic_name": "Dobutamine Hydrochloride 250 mg/5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "KINATREP",
        "generic_name": "Streptokinase Inj IP 15,00,000 IU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "MILRITUS",
        "generic_name": "Milrinone Lactate Inj USP 10 mg/10 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "NADACARD",
        "generic_name": "Adenosine Inj IP 6 mg/2 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "NOREDGE",
        "generic_name": "Noradrenaline Inj IP 4 mg/2 ml Amp",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "Q HEP 25000",
        "generic_name": "Heparin Sodium Inj 25000 IU/5 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "Q HEP 5000",
        "generic_name": "Heparin Sodium Inj 5000 IU/5 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "Q TALOL 20 INJ",
        "generic_name": "Labetalol Inj IP 20 mg/4 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "Q TRANZ 500",
        "generic_name": "Tranexamic Acid Inj 500 mg/5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "QNOX 40",
        "generic_name": "Enoxaparin Inj 40 mg/0.4 ml PFS",
        "dosage_form": "Liquid PFS"
      },
      {
        "brand_name": "QNOX 60",
        "generic_name": "Enoxaparin Inj 60 mg/0.6 ml PFS",
        "dosage_form": "Liquid PFS"
      },
      {
        "brand_name": "QUMEPH 300",
        "generic_name": "Mephentermine Sulphate Inj IP 30 mg/ml; 10 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "QUTIRO",
        "generic_name": "Tirofiban Infusion 5 mg/100 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "QVASP",
        "generic_name": "Vasopressin Inj IP 20 Unit/1 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "RHYSMOL",
        "generic_name": "Esmolol Inj IP 100 mg/10 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "TERLIBLOC",
        "generic_name": "Terlipressin Acetate Inj 1 mg/10 ml",
        "dosage_form": "Liquid Amp"
      }
    ]
  },
  {
    "Antifungals Range": [
      {
        "brand_name": "ANIDALGE 100",
        "generic_name": "Anidulafungin Inj 100 mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "CASPO Q 50",
        "generic_name": "Caspofungin Acetate for Inj 50 mg; Lyophilized Powder",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "CASPO Q 70",
        "generic_name": "Caspofungin Acetate for Inj 70 mg; Lyophilized Powder",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "ERGOVOR 200 INJ",
        "generic_name": "Voriconazole Inj 200 mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "ERGOVOR 200 TAB",
        "generic_name": "Voriconazole Tab 200 mg",
        "dosage_form": "Film Coated Tab"
      },
      {
        "brand_name": "FLUKOHON",
        "generic_name": "Fluconazole Inj 200 mg/100 ml",
        "dosage_form": "FFS Bottle"
      },
      {
        "brand_name": "MICASPOR 100",
        "generic_name": "Micafungin Sodium for Inj 100 mg/Vial (Lyophilized)",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "PARMAVOR 200 INJ",
        "generic_name": "Voriconazole Inj IP 200 mg; Lyophilized Powder",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "PARMAVOR 200 TAB",
        "generic_name": "Voriconazole Tab IP 200 mg",
        "dosage_form": "Film Coated Tab"
      },
      {
        "brand_name": "Q DULA 100",
        "generic_name": "Anidulafungin for Inj 100 mg; Lyophilized Powder",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "QULIP 50",
        "generic_name": "Liposomal Amphotericin B Inj 50 mg",
        "dosage_form": "Lyophilized Vial"
      }
    ]
  },
  {
    "Anaesthesia Range": [
      {
        "brand_name": "ATKURE 25",
        "generic_name": "Atracurium Besylate Inj IP 25 mg/2.5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "ATKURE 50",
        "generic_name": "Atracurium Besylate Inj IP 50 mg/5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "BIPCAINE 0.25",
        "generic_name": "Bupivacaine Inj IP 50 mg/20 ml; 0.25%",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "BIPCAINE 0.5",
        "generic_name": "Bupivacaine Inj IP 100 mg/20 ml; 0.5%",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "CARDIDATE 20",
        "generic_name": "Etomidate Inj 2 mg/ml; 10 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "CIS-ATKURE 10",
        "generic_name": "Cis-Atracurium Besylate Inj 10 mg/5 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "CIS-ATKURE 20",
        "generic_name": "Cis-Atracurium Besylate Inj 20 mg/10 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF 100",
        "generic_name": "Propofol Injection IP 100 mg/10 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF 200",
        "generic_name": "Propofol Injection IP 200 mg/20 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF 500",
        "generic_name": "Propofol Injection IP 500 mg/50 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF MCT 100",
        "generic_name": "Propofol Injection IP MCT-LCT 100 mg/10 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF MCT 200",
        "generic_name": "Propofol Injection IP MCT-LCT 200 mg/20 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COHROF MCT 500",
        "generic_name": "Propofol Injection IP MCT-LCT 500 mg/50 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "COPYRROL",
        "generic_name": "Glycopyrrolate Injection IP 200 mcg/ml (0.2 mg/1 ml)",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "DEXDOLAR 100",
        "generic_name": "Dexmedetomidine Hydrochloride USP Inj 100 mcg/ml; 1 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "DEXDOLAR 200",
        "generic_name": "Dexmedetomidine Hydrochloride USP Inj 100 mcg/ml; 2 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "LIDOTRUST 2%",
        "generic_name": "Lignocaine Hydrochloride Inj IP 2%; 30 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "LIDOTRUST ADR",
        "generic_name": "Lignocaine Hydrochloride 2% + Adrenaline Inj IP (1:200000); 30 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "LIDOTRUST GEL",
        "generic_name": "Lignocaine Hydrochloride Gel IP 2% w/v; 30 g",
        "dosage_form": "Gel Tube"
      },
      {
        "brand_name": "MAGISTIG 2.5",
        "generic_name": "Neostigmine Methylsulfate Inj IP 2.5 mg/5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "MAGISTIG G",
        "generic_name": "Glycopyrrolate 0.5 mg + Neostigmine Methylsulfate 2.5 mg Inj in 5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "NUBLODEX",
        "generic_name": "Sugammadex Inj 100 mg/ml in 2 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "ROCPACE 50",
        "generic_name": "Rocuronium Bromide Inj 50 mg/5 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "ROCPACE 100",
        "generic_name": "Rocuronium Bromide Inj 100 mg/10 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "SEVOVINT 50",
        "generic_name": "Sevoflurane USP 50 ml",
        "dosage_form": "Liq. for Inhalation, Bottle"
      },
      {
        "brand_name": "SEVOVINT 250",
        "generic_name": "Sevoflurane USP 250 ml",
        "dosage_form": "Liq. for Inhalation, Bottle"
      },
      {
        "brand_name": "VECBLOC 4",
        "generic_name": "Vecuronium Bromide Inj IP 4 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "VECBLOC 10",
        "generic_name": "Vecuronium Bromide Inj IP 10 mg",
        "dosage_form": "Dry Powder Vial"
      }
    ]
  },
  {
    "ICU Range": [
      {
        "brand_name": "ACYLOG 250",
        "generic_name": "Aciclovir Intravenous Infusion IP 250 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ACYLOG 500",
        "generic_name": "Aciclovir Intravenous Infusion IP 500 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ADNALINE 1",
        "generic_name": "Adrenaline Bitartrate Inj 1 mg/1 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "AMICRYS",
        "generic_name": "Nutritive Infusion of Pure Crystalline Amino Acid – 200 ml",
        "dosage_form": "Liquid Bottle"
      },
      {
        "brand_name": "ARASEIZ",
        "generic_name": "Levetiracetam Concentrate for Infusion 100 mg/ml; 5 ml Vial",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "ARREBAC 1.2",
        "generic_name": "Amoxicillin & Pot. Clavulanate Inj IP 1.2 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ASPROLIV 5",
        "generic_name": "L-Ornithine L-Aspartate Infusion Inj 5 gm/10 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "BACAVIZ 2.5",
        "generic_name": "Ceftazidime & Avibactam Inj 2.5 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "CETGESIC",
        "generic_name": "Paracetamol Infusion IP 1% w/v (1000 mg/100 ml)",
        "dosage_form": "LDPE Bottle"
      },
      {
        "brand_name": "COLMEISTEN 1 MIU",
        "generic_name": "Colistimethate Sodium Inj 1 MIU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "COLMEISTEN 2 MIU",
        "generic_name": "Colistimethate Sodium Inj 2 MIU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "COLMEISTEN 3 MIU",
        "generic_name": "Colistimethate Sodium Inj 3 MIU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "COLMEISTEN 4.5 MIU",
        "generic_name": "Colistimethate Sodium Inj 4.5 MIU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "CROSUL 1.5",
        "generic_name": "Cefoperazone & Sulbactam for Inj 1.5 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "CROSUL 3",
        "generic_name": "Ceforerazone & Sulbactam for Inj 3 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "CYSTACE 400 INJ",
        "generic_name": "Acetylcysteine Inj BP 400 mg/2 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "CYSTACE 600 TAB",
        "generic_name": "Acetylcysteine Effervescent Tab 600 mg",
        "dosage_form": "Effervescent Tab"
      },
      {
        "brand_name": "CYSTACE 1000 INJ",
        "generic_name": "Acetylcysteine Inj BP 1000 mg/5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "EVOFLOCIN",
        "generic_name": "Levofloxacin Infusion 500 mg/100 ml",
        "dosage_form": "FFS Bottle"
      },
      {
        "brand_name": "ESTOPRED 40",
        "generic_name": "Methylprednisolone Sodium Succinate Inj 40 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ESTOPRED 125",
        "generic_name": "Methylprednisolone Sodium Succinate Inj 125 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ESTOPRED 500",
        "generic_name": "Methylprednisolone Sodium Succinate Inj 500 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ESTOPRED 1000",
        "generic_name": "Methylprednisolone Sodium Succinate Inj 1000 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "GLOOT 600",
        "generic_name": "Glutathione for Inj 600 mg + Ascorbic Acid",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "HIZLAM 1",
        "generic_name": "Aztreonam Inj USP 1 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "HIZLAM 2",
        "generic_name": "Aztreonam Inj USP 2 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "HIZLAM AV",
        "generic_name": "Aztreonam & Avibactam Inj (1.5 gm/0.5 gm) – Lyophilized",
        "dosage_form": "Lyophilized Cake"
      },
      {
        "brand_name": "INHATOB 300",
        "generic_name": "Tobramycin Inhalation Solution IP 300 mg/5 ml Respules",
        "dosage_form": "Liquid Respules"
      },
      {
        "brand_name": "KLOPOT",
        "generic_name": "Potassium Chloride for Inj Concentrate IP 150 mg/ml, 10 ml",
        "dosage_form": "Liquid Amp (10 ml)"
      },
      {
        "brand_name": "LIDZOLIN 600 INJ",
        "generic_name": "Linezolid Inj 2 mg/ml in 300 ml",
        "dosage_form": "Liquid Bottle"
      },
      {
        "brand_name": "LIDZOLIN 600 TAB",
        "generic_name": "Linezolid Tab IP 600 mg",
        "dosage_form": "Film-coated Tab"
      },
      {
        "brand_name": "MIMITIDE LAR 30",
        "generic_name": "Octreotide Acetate LAR 30 mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "NEOGLUT 600",
        "generic_name": "Glutathione for Inj 600 mg + Ascorbic Acid",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "OLIGMA AV",
        "generic_name": "Aztreonam & Avibactam Inj (1.5 gm/0.5 gm) – Lyophilized",
        "dosage_form": "Lyophilized Cake"
      },
      {
        "brand_name": "PHENETOP",
        "generic_name": "Paracetamol Infusion IP 1% w/v (1000 mg/100 ml) Pouch",
        "dosage_form": "Liquid Pouch"
      },
      {
        "brand_name": "POCOLEV",
        "generic_name": "Levocarnitine Injection USP 1000 mg/5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "Q MIXIN 5L IU",
        "generic_name": "Polymyxin B Sulfate Inj 500000 IU",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "Q MIXIN 7.5L IU",
        "generic_name": "Polymyxin B Sulfate Inj 750000 IU",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QPAC TZ",
        "generic_name": "Piperacillin & Tazobactam Inj IP 4.5 gm Inj",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QUCORT 100",
        "generic_name": "Hydrocortisone Sodium Succinate Inj IP 100 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QUCYDOX 100",
        "generic_name": "Doxycycline for Inj USP 100 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QUCLIN 300",
        "generic_name": "Clindamycin Inj IP 300 mg/2 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "QUCLIN 600",
        "generic_name": "Clindamycin Inj IP 600 mg/4 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "QUCOP 200",
        "generic_name": "Teicoplanin Inj IP 200",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QUCOP 400",
        "generic_name": "Teicoplanin Inj IP 400",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QUEROPEN 500",
        "generic_name": "Meropenem Inj IP 500 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QUEROPEN 1000",
        "generic_name": "Meropenem Inj IP 1000 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QUETHRO 500",
        "generic_name": "Azithromycin for Inj USP 500 mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "QUFELER 100",
        "generic_name": "Iron Sucrose Inj 100 mg/5 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "QUFELER FCM 500",
        "generic_name": "Ferric Carboxymaltose Inj 500 mg/10 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "QUFELER FCM 1000",
        "generic_name": "Ferric Carboxymaltose Inj 1000 mg/20 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "QRITH 500",
        "generic_name": "Clarithromycin for Infusion IP 500 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "QULINI Q",
        "generic_name": "Ulinastatin Inj 100000 IU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "RUFOXIM 500 TAB",
        "generic_name": "Cefuroxime Axetil & Lactic Acid Bacillus Tab 500 mg",
        "dosage_form": "Film-coated Tab"
      },
      {
        "brand_name": "RUFOXIM 750 INJ",
        "generic_name": "Cefuroxime Sodium Inj IP 750 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "RUFOXIM 1500 INJ",
        "generic_name": "Cefuroxime Sodium Inj IP 1500 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "RUFEPIME TZ",
        "generic_name": "Cefepime & Tazobactam Inj 1.125 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "SPITZIPAR",
        "generic_name": "Teriparatide Inj Prefilled Pen 600 mcg/2.4 ml",
        "dosage_form": "Prefilled Pen (PFP)"
      },
      {
        "brand_name": "STOVISOD 8.4%",
        "generic_name": "Sodium Bicarbonate Injection IP 8.4% w/v; 25 ml",
        "dosage_form": "Liquid Amp (25 ml)"
      },
      {
        "brand_name": "STUBETOC",
        "generic_name": "Carbetocin Injection 100 mcg/ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "STYPEN 40",
        "generic_name": "Pantoprazole for Inj IP 40 mg (with NS)",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "SUCIMIN 100",
        "generic_name": "Minocycline for Inj USP 100 mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "SULBAFEND 1",
        "generic_name": "Sulbactam for Inj 1 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "TCOLIN 500",
        "generic_name": "Citicoline Inj IP 500 mg/2 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "TCOLIN 1000",
        "generic_name": "Citicoline Inj IP 1000 mg/4 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "TCOTOP 200",
        "generic_name": "Teicoplanin Inj 200 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "TCOTOP 600",
        "generic_name": "Teicoplanin Inj 600 mg (Lyophilized)",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "TIGYNT 50",
        "generic_name": "Tigecycline Inj IP 50 mg",
        "dosage_form": "Lyophilized Cake"
      },
      {
        "brand_name": "TIGYNT PLUS 100",
        "generic_name": "Tigecycline Inj 100 mg (Lyophilized)",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "TREVUP 200",
        "generic_name": "Thiamine Injection (Vit B1) IP 200 mg/2 ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "ULINI Q",
        "generic_name": "Ulinastatin Inj 100000 IU",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "UNIXAT",
        "generic_name": "Cefotaxime Inj IP 1 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "VAN Q 500",
        "generic_name": "Vancomycin Hydrochloride for IV Infusion 500 mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "VAN Q 1000",
        "generic_name": "Vancomycin Hydrochloride for IV Infusion 1000 mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "VASIMIP",
        "generic_name": "Imipenem & Cilastatin Inj IP 500 mg/500 mg",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "VIVITIDE 50",
        "generic_name": "Octreotide Acetate Inj 50 mcg/ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "VIVITIDE 100",
        "generic_name": "Octreotide Acetate Inj 100 mcg/ml",
        "dosage_form": "Liquid Amp"
      },
      {
        "brand_name": "VIVITIDE LAR 30",
        "generic_name": "Octreotide Acetate LAR 30 mg",
        "dosage_form": "Lyophilized Vial"
      },
      {
        "brand_name": "VRAHCIN 500",
        "generic_name": "Amikacin Sulphate IP Inj 500 mg/2 ml",
        "dosage_form": "Liquid Vial"
      },
      {
        "brand_name": "XOFISUL",
        "generic_name": "Ceftriaxone Inj IP 1 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "XOFISUL S",
        "generic_name": "Ceftriaxone & Sulbactam for Inj IP 1.5 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ZIVIBAC 2.5",
        "generic_name": "Ceftazidime & Avibactam Inj 2.5 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ZODITAZ",
        "generic_name": "Ceftazidime Inj IP 1 gm",
        "dosage_form": "Dry Powder Vial"
      },
      {
        "brand_name": "ZODITAZ AV",
        "generic_name": "Ceftazidime & Avibactam Inj 2.5 gm",
        "dosage_form": "Dry Powder Vial"
      }
    ]
  },
  {
    "Nutritional Products": [
      {
        "brand_name": "Q BUMIN 225",
        "generic_name": "Protein Powder 225 gm",
        "dosage_form": "Edible Protein Powder"
      },
      {
        "brand_name": "Q BUMIN 400",
        "generic_name": "Protein Powder 400 gm",
        "dosage_form": "Edible Protein Powder"
      },
      {
        "brand_name": "RELEGLUT 20",
        "generic_name": "L-Alanyl-L-Glutamine Infusion (20% w/v) in 50 ml",
        "dosage_form": "Liquid Glass Bottle"
      },
      {
        "brand_name": "RELEGLUT+",
        "generic_name": "L-Glutamine & Pre-Probiotics Sachet 15 gm",
        "dosage_form": "Edible Powder"
      }
    ]
  }
]
