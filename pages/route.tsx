import Head from '@/components/Head'
import PageLayout from '@/components/PageLayout'
import SectionBox from '@/components/SectionBox'
import CurrentRoute from '@/components/TransportationComponents/route'
import TripPlanner from '@/components/TransportationComponents/pathfinder'

export default function Home() {
    return (
        <>
            <Head
                title="Route Query | KONNO"
                description="A pathfinding system made by KONNO (for mainly use with railway system). Use by Minecraft servers"
                author="winsanmwtv"
                keywords="Harlon Trip Planner, Sylvarion Trip Planner, Limaru Trip Planner"
            />
            <PageLayout title="">
                <SectionBox>
                    <TripPlanner/>
                </SectionBox>
                <SectionBox>
                    <CurrentRoute/>
                </SectionBox>
            </PageLayout>
        </>
    )
}
