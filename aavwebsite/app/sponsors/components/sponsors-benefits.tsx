// import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Brand Visibility",
    description: "Exposure at international competitions, events, and through our digital platforms",
  },
  {
    icon: Users,
    title: "Talent Pipeline",
    description: "Direct access to top engineering students for recruitment and internship opportunities",
  },
  {
    icon: Lightbulb,
    title: "Innovation Partnership",
    description: "Collaborate on cutting-edge autonomous systems research and development",
  },
  {
    icon: TrendingUp,
    title: "CSR Impact",
    description: "Support STEM education and inspire the next generation of engineers",
  },
]

export function SponsorsBenefits() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Why Sponsor Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with a leading robotics team and gain valuable benefits
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
            //   <Card key={index} className="border-2 hover:border-primary transition-colors">
            //     <CardContent className="p-8">
            //       <div className="flex items-start gap-4">
            //         <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
            //           <benefit.icon className="w-7 h-7 text-primary" />
            //         </div>
            //         <div>
            //           <h3 className="font-display text-xl font-semibold mb-2">{benefit.title}</h3>
            //           <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            //         </div>
            //       </div>
            //     </CardContent>
            //   </Card>
            // ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
