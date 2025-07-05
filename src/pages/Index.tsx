import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Shield, Database, Archive, Eye, Globe, ShoppingCart, Users, FileText, Gavel, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredCases = [
    {
      id: 1,
      name: "Silk Road",
      url: "silkroad.onion",
      agency: "FBI",
      date: "October 2013",
      category: "Dark Web Marketplace",
      description: "The infamous dark web marketplace for illegal goods, shut down by the FBI after a lengthy investigation.",
      status: "Seized",
      image: "placeholder-dark-web.jpg"
    },
    {
      id: 2,
      name: "AlphaBay",
      url: "alphabay.market",
      agency: "DEA/FBI",
      date: "July 2017",
      category: "Cryptocurrency Market",
      description: "One of the largest dark web marketplaces, taken down in an international operation.",
      status: "Seized",
      image: "placeholder-marketplace.jpg"
    },
    {
      id: 3,
      name: "KickassTorrents",
      url: "kickasstorrents.to",
      agency: "DOJ",
      date: "July 2016",
      category: "File Sharing",
      description: "Major torrent site seized for copyright infringement and money laundering.",
      status: "Seized",
      image: "placeholder-torrent.jpg"
    }
  ];

  const timelineEvents = [
    { year: "2011", event: "Megaupload seized", agency: "DOJ" },
    { year: "2013", event: "Silk Road shutdown", agency: "FBI" },
    { year: "2016", event: "KickassTorrents seized", agency: "DOJ" },
    { year: "2017", event: "AlphaBay takedown", agency: "DEA/FBI" },
    { year: "2020", event: "Welcome To Video seized", agency: "HSI" },
  ];

  const categories = [
    {
      id: 1,
      name: "Dark Web Markets",
      icon: ShoppingCart,
      count: 45,
      description: "Illegal marketplaces for drugs, weapons, and other contraband",
      color: "bg-red-600/20 text-red-400 border-red-600"
    },
    {
      id: 2,
      name: "File Sharing",
      icon: FileText,
      count: 28,
      description: "Copyright infringement and piracy websites",
      color: "bg-orange-600/20 text-orange-400 border-orange-600"
    },
    {
      id: 3,
      name: "Fraud & Scams",
      icon: Gavel,
      count: 32,
      description: "Financial fraud, phishing, and scam operations",
      color: "bg-yellow-600/20 text-yellow-400 border-yellow-600"
    },
    {
      id: 4,
      name: "Child Exploitation",
      icon: Lock,
      count: 19,
      description: "Sites involved in child exploitation and abuse",
      color: "bg-purple-600/20 text-purple-400 border-purple-600"
    },
    {
      id: 5,
      name: "Forums & Communities",
      icon: Users,
      count: 22,
      description: "Criminal forums and underground communities",
      color: "bg-blue-600/20 text-blue-400 border-blue-600"
    },
    {
      id: 6,
      name: "Other Criminal Sites",
      icon: Globe,
      count: 15,
      description: "Various other criminal websites and services",
      color: "bg-green-600/20 text-green-400 border-green-600"
    }
  ];

  const filteredCases = featuredCases.filter(
    (case_) =>
      case_.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.agency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">Digital Evidence Museum</h1>
                <p className="text-slate-400 text-sm">Archive of Law Enforcement Website Seizures</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-blue-400 border-blue-400">
                <Database className="h-3 w-3 mr-1" />
                {featuredCases.length} Cases
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Digital <span className="text-blue-400">Evidence</span> Archive
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              A comprehensive digital museum documenting websites seized by law enforcement agencies worldwide. 
              Preserving digital history and showcasing the intersection of technology, crime, and justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Archive className="h-5 w-5 mr-2" />
                Explore Archive
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Eye className="h-5 w-5 mr-2" />
                View Timeline
              </Button>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search cases by name, category, or agency..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
              />
            </div>
          </div>
        </section>

        {/* Featured Cases */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h3 className="text-3xl font-bold text-white mr-4">Featured Cases</h3>
            <Separator className="flex-1 bg-slate-700" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((case_) => (
              <Card key={case_.id} className="bg-slate-800 border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/10">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl mb-2">{case_.name}</CardTitle>
                      <CardDescription className="text-slate-400 font-mono text-sm">
                        {case_.url}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant="destructive" 
                      className="bg-red-600/20 text-red-400 border-red-600"
                    >
                      {case_.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 leading-relaxed">{case_.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Agency:</span>
                      <Badge variant="secondary" className="bg-blue-600/20 text-blue-400">
                        {case_.agency}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Category:</span>
                      <span className="text-slate-300 text-sm">{case_.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Date:</span>
                      <span className="text-slate-300 text-sm">{case_.date}</span>
                    </div>
                  </div>
                  <Link to={`/case/${case_.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 border-slate-600 text-slate-300 hover:bg-slate-700"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h3 className="text-3xl font-bold text-white mr-4">Browse by Category</h3>
            <Separator className="flex-1 bg-slate-700" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.id} to={`/category/${category.id}`}>
                  <Card className="bg-slate-800 border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/10 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-slate-700">
                            <IconComponent className="h-6 w-6 text-blue-400" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                            <Badge variant="outline" className={category.color}>
                              {category.count} cases
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 text-sm leading-relaxed">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h3 className="text-3xl font-bold text-white mr-4">Historical Timeline</h3>
            <Separator className="flex-1 bg-slate-700" />
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-400"></div>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2 w-4 h-4 bg-blue-400 rounded-full -translate-x-1/2 border-4 border-slate-900"></div>
                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-blue-400 border-blue-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.year}
                        </Badge>
                        <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                          {event.agency}
                        </Badge>
                      </div>
                      <p className="text-white font-medium">{event.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">150+</div>
                  <div className="text-slate-400">Total Cases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">25</div>
                  <div className="text-slate-400">Agencies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                  <div className="text-slate-400">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">2010</div>
                  <div className="text-slate-400">Since Year</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-400 mb-2">
              Digital Evidence Museum - Preserving Digital History
            </p>
            <p className="text-slate-500 text-sm">
              Educational purposes only. All information is publicly available.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
