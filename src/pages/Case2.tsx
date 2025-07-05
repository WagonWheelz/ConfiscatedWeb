
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Globe, Users, Download, ExternalLink, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CaseDetails = () => {
  const { id } = useParams();
  
  // Mock data - in a real app, this would come from an API or database
  const caseData = {
    id: 1,
    name: "CUMMMMMMM",
    url: "silkroad.onion",
    agency: "FBI",
    date: "October 2013",
    location: "San Francisco, CA, USA",
    category: "Dark Web Marketplace",
    description: "The Silk Road was an online black market and the first modern darknet market, best known as a platform for selling illegal drugs. It was operated as a Tor hidden service, which allowed users to browse it anonymously and securely without potential traffic monitoring. The website was launched in February 2011; development had begun six months prior. Initially there were a limited number of new seller accounts available; new sellers had to purchase an account in an auction. Later, a fixed fee was charged for each new seller account. In October 2013, the Federal Bureau of Investigation (FBI) shut down the website and arrested Ross Ulbricht under charges of being the site's pseudonymous founder 'Dread Pirate Roberts'. On 6 November 2013, Silk Road 2.0 came online, run by former administrators of Silk Road. It too was shut down, and the alleged operator was arrested on 6 November 2014 as part of the so-called 'Operation Onymous'.",
    status: "Seized",
    arrests: 1,
    screenshots: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    ],
    mediaArticles: [
      {
        title: "FBI Shuts Down Silk Road Dark Web Marketplace",
        source: "Reuters",
        date: "October 2, 2013",
        url: "#"
      },
      {
        title: "Dread Pirate Roberts Arrested in San Francisco",
        source: "TechCrunch",
        date: "October 2, 2013",
        url: "#"
      },
      {
        title: "The Rise and Fall of the Silk Road",
        source: "Wired",
        date: "October 15, 2013",
        url: "#"
      }
    ],
    downloadableFiles: [
      {
        name: "FBI Press Release - Silk Road Takedown",
        type: "PDF",
        size: "2.4 MB",
        url: "#"
      },
      {
        name: "Court Documents - United States v. Ulbricht",
        type: "PDF",
        size: "15.7 MB",
        url: "#"
      },
      {
        name: "Technical Analysis Report",
        type: "PDF",
        size: "8.2 MB",
        url: "#"
      }
    ]
  };

  const [selectedScreenshot, setSelectedScreenshot] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Archive
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6 bg-slate-600" />
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-400" />
                <div>
                  <h1 className="text-xl font-bold text-white">Case Details</h1>
                  <p className="text-slate-400 text-sm">Digital Evidence Archive</p>
                </div>
              </div>
            </div>
            <Badge 
              variant="destructive" 
              className="bg-red-600/20 text-red-400 border-red-600"
            >
              {caseData.status}
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Case Header */}
        <section className="mb-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold text-white mb-4">{caseData.name}</h2>
            <p className="text-xl text-slate-300 mb-4 font-mono">{caseData.url}</p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 text-sm px-3 py-1">
                {caseData.category}
              </Badge>
              <Badge variant="secondary" className="bg-slate-700 text-slate-300 text-sm px-3 py-1">
                {caseData.agency}
              </Badge>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Screenshots and Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Screenshots */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6">Website Screenshots</h3>
              <div className="space-y-4">
                <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                  <AspectRatio ratio={16 / 10}>
                    <img
                      src={caseData.screenshots[selectedScreenshot]}
                      alt={`${caseData.name} screenshot ${selectedScreenshot + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </Card>
                
                {caseData.screenshots.length > 1 && (
                  <div className="flex gap-3">
                    {caseData.screenshots.map((screenshot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedScreenshot(index)}
                        className={`relative w-20 h-16 rounded border-2 overflow-hidden transition-all ${
                          selectedScreenshot === index 
                            ? 'border-blue-400' 
                            : 'border-slate-600 hover:border-slate-500'
                        }`}
                      >
                        <img
                          src={screenshot}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Description */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6">Case Description</h3>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    {caseData.description}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Media Coverage */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6">Media Coverage</h3>
              <div className="space-y-4">
                {caseData.mediaArticles.map((article, index) => (
                  <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-400 transition-colors">
                    <CardContent className="pt-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-2">{article.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <span>{article.source}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Data Overview and Downloads */}
          <div className="space-y-6">
            {/* Data Overview */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6">Data Overview</h3>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-sm">Date of Seizure</p>
                      <p className="text-white font-medium">{caseData.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white font-medium">{caseData.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-sm">Original URL</p>
                      <p className="text-white font-medium font-mono text-sm break-all">{caseData.url}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-sm">Number of Arrests</p>
                      <p className="text-white font-medium">{caseData.arrests}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="text-slate-400 text-sm">Lead Agency</p>
                      <p className="text-white font-medium">{caseData.agency}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Downloadable Files */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6">Downloaded Files</h3>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6 space-y-4">
                  {caseData.downloadableFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <Download className="h-4 w-4 text-blue-400" />
                        <div>
                          <p className="text-white text-sm font-medium">{file.name}</p>
                          <p className="text-slate-400 text-xs">{file.type} • {file.size}</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CaseDetails;
