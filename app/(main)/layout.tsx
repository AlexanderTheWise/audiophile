import { WrapperMain } from "../_components/atoms";
import { BestAudioGear } from "../_components/organisms";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WrapperMain>
      {children}
      <BestAudioGear />
    </WrapperMain>
  );
}
