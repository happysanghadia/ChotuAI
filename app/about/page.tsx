import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Target, Users, Zap } from "lucide-react"

export default function AboutPage() {
    const values = [
        {
            icon: Heart,
            title: "Community First",
            description:
                "We believe in strengthening local communities by empowering neighbourhood stores and making shopping convenient for families.",
        },
        {
            icon: Target,
            title: "Trust & Transparency",
            description:
                "Building trust through transparent transactions, secure payments, and reliable delivery from trusted local merchants.",
        },
        {
            icon: Users,
            title: "Inclusive Growth",
            description:
                "Enabling small retailers and distributors to compete in the digital economy while preserving their traditional business models.",
        },
        {
            icon: Zap,
            title: "Innovation",
            description:
                "Leveraging AI and technology to solve real problems while keeping the human touch that makes local shopping special.",
        },
    ]

    return (
        <div className="py-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                        About Chotu
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
                        Chotu is your personal shopping assistant that connects families with
                        their trusted neighbourhood stores. We&apos;re building a platform that
                        respects local business traditions while bringing the convenience of
                        modern technology.
                    </p>
                </div>

                {/* Mission Section */}
                <section className="mb-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-lg">
                                To make everyday shopping effortless for families while empowering
                                local retailers and distributors to thrive in the digital age. We
                                believe that technology should enhance, not replace, the personal
                                relationships that make neighbourhood shopping special.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </section>

                {/* Values Section */}
                <section className="mb-16">
                    <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {values.map((value) => (
                            <Card key={value.title} className="h-full">
                                <CardHeader>
                                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                                        <value.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {value.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Story Section */}
                <section>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-3xl">Our Story</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-lg text-gray-600">
                                Chotu was born from a simple observation: families love their
                                local kirana stores, but modern life demands convenience. We saw
                                an opportunity to bridge this gap by creating a platform that
                                respects both needs.
                            </p>
                            <p className="text-lg text-gray-600">
                                Our conversational AI understands how families actually shop -
                                speaking naturally in Hindi, Hinglish, or English. Our digital
                                khata system brings the trust of traditional credit into the
                                digital age. And our network of neighbourhood stores ensures
                                that every delivery comes from someone you know and trust.
                            </p>
                            <p className="text-lg text-gray-600">
                                We&apos;re not trying to replace your local store. We&apos;re trying to
                                make it easier for you to shop there, and easier for them to
                                serve you better.
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    )
}

