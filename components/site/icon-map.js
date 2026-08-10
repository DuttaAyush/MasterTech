'use client';

import {
  Cloud, Cpu, ShieldCheck, Workflow, Database, Layers, Zap,
  Landmark, Truck, ShoppingBag, HeartPulse, Building2, Lock
} from 'lucide-react';

const ICON_MAP = {
  Cloud,
  Cpu,
  ShieldCheck,
  Workflow,
  Database,
  Layers,
  Zap,
  Landmark,
  Truck,
  ShoppingBag,
  HeartPulse,
  Building2,
  Lock,
};

export default function RenderIcon({ name, className = 'h-5 w-5' }) {
  const Component = ICON_MAP[name] || Cloud;
  return <Component className={className} />;
}
