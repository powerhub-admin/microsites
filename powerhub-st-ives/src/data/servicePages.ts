// Registry of slugs that have full long-form content (rendered via ServicePage).
// Slugs not listed here fall back to the simple template in [slug].astro.
import type { ServicePageData } from './service-pages/types';
import electricalRepairs from './service-pages/electrical-repairs';
import electricalFaultFinding from './service-pages/electrical-fault-finding';
import switchboardUpgrade from './service-pages/switchboard-upgrade';
import safetySwitchInstallation from './service-pages/safety-switch-installation';
import lightingInstallation from './service-pages/lighting-installation';
import ceilingFanInstallation from './service-pages/ceiling-fan-installation';
import exhaustFanInstallation from './service-pages/exhaust-fan-installation';
import powerPointInstallation from './service-pages/power-point-installation';
import houseRewiring from './service-pages/house-rewiring';
import threePhasePowerUpgrade from './service-pages/3-phase-power-upgrade';
import applianceInstallation from './service-pages/appliance-installation';
import smokeAlarmInstallation from './service-pages/smoke-alarm-installation';
import level2Electrician from './service-pages/level-2-electrician';

export const servicePages: Record<string, ServicePageData> = {
  'electrical-repairs': electricalRepairs,
  'electrical-fault-finding': electricalFaultFinding,
  'switchboard-upgrade': switchboardUpgrade,
  'safety-switch-installation': safetySwitchInstallation,
  'lighting-installation': lightingInstallation,
  'ceiling-fan-installation': ceilingFanInstallation,
  'exhaust-fan-installation': exhaustFanInstallation,
  'power-point-installation': powerPointInstallation,
  'house-rewiring': houseRewiring,
  '3-phase-power-upgrade': threePhasePowerUpgrade,
  'appliance-installation': applianceInstallation,
  'smoke-alarm-installation': smokeAlarmInstallation,
  'level-2-electrician': level2Electrician,
};
