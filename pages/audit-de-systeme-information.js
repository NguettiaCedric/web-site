import Layout from "@/components/layout/Layout"
import RsmDetails from "@/components/sections/inner/RsmDetails"
import PageTitle from "@/components/sections/PageTitle"
import CTA from "@/components/sections/Ctarsm"
import Link from "next/link"
import AuditSystemeInformationDetails from "@/components/sections/inner/AuditSystemeInformationDetails"

export default function Teampage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <PageTitle pageName="Audit de Système d'information" />
                <AuditSystemeInformationDetails  />
                {/* <CTA  /> */}
                
            </Layout>
        </>
    )
}