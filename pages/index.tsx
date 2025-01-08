import Head from '@/components/Head';
import PageLayout from '@/components/PageLayout'
import SectionBox from '@/components/SectionBox'
import Route from "@/components/TransportationComponents/route";
import Pathfinder from "@/components/TransportationComponents/pathfinder";

export default function Home() {
  return (
    <>
      <Head
        title="Pathfinder by KONNO"
        description="A pathfinding system made by KONNO (for mainly use with railway system). Use by Minecraft servers"
        author="winsanmwtv"
        keywords="Harlon Trip Planner, Sylvarion Trip Planner, Limaru Trip Planner"
      />
      <PageLayout>
        <SectionBox>
            <Pathfinder/>
        </SectionBox>
        <SectionBox>
          <Route/>
        </SectionBox>
      </PageLayout>
    </>
  )
}
