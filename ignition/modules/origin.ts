import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("LockModule", (m) => {
  const origin = m.contract("Origin", []);
  return { origin };
});

export default LockModule;
