import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Search, Calendar, Shield, Filter, SortAsc } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Categories = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Sample category data
  const categoryData = {
    1: {
      name: "Dark Web Markets",
      description: "Illegal marketplaces for drugs, weapons, and other contraband",
      cases: [
        {
          id: 1,
          name: "Silk Road",
          url: "silkroad.onion",
          agency: "FBI",
          date: "October 2013",
          description: "The infamous dark web marketplace for illegal goods",
          status: "Seized",
          arrests: 1,
          location: "United States"
        },
        {
          id: 2,
          name: "AlphaBay",
          url: "alphabay.market",
          agency: "DEA/FBI",
          date: "July 2017",
          description: "One of the largest dark web marketplaces",
          status: "Seized",
          arrests: 4,
          location: "Thailand"
        },
        {
          id: 3,
          name: "Dream Market",
          url: "dreammarket.onion",
          agency: "FBI",
          date: "April 2019",
          description: "Popular darknet marketplace for illegal substances",
          status: "Seized",
          arrests: 2,
          location: "Netherlands"
        }
      ]
    },
    2: {
      name: "File Sharing",
      description: "Copyright infringement and piracy websites",
      cases: [
        {
          id: 4,
          name: "KickassTorrents",
          url: "kickasstorrents.to",
          agency: "DOJ",
          date: "July 2016",
          description: "Major torrent site for copyright infringement",
          status: "Seized",
          arrests: 1,
          location: "Poland"
        },
        {
          id: 5,
          name: "ExtraTorrent",
          url: "extratorrent.cc",
          agency: "MPAA",
          date: "May 2017",
          description: "BitTorrent system and website",
          status: "Seized",
          arrests: 0,
          location: "Unknown"
        }
      ]
    }
  };

  // Convert string id to number and ensure it's a valid key
  const categoryId = Number(id) as keyof typeof categoryData;
  const currentCategory = categoryData[categoryId] || categoryData[1];
  
  const filteredCases = currentCategory.cases.filter(
    (case_) =>
      case_.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCases = [...filteredCases].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "arrests") {
      return b.arrests - a.arrests;
    }
    return 0;
  });

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
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-400" />
                <div>
                  <h1 className="text-2xl font-bold text-white">{currentCategory.name}</h1>
                  <p className="text-slate-400 text-sm">{currentCategory.description}</p>
                </div>
              </div>
            </div>
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              {currentCategory.cases.length} Cases
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800 border border-slate-600 text-white px-3 py-2 rounded-md focus:border-blue-400"
              >
                <option value="date">Sort by Date</option>
                <option value="name">Sort by Name</option>
                <option value="arrests">Sort by Arrests</option>
              </select>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <h3 className="text-2xl font-bold text-white mr-4">
              {sortedCases.length} Cases Found
            </h3>
            <Separator className="flex-1 bg-slate-700" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCases.map((case_) => (
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
                      <span className="text-slate-400 text-sm">Location:</span>
                      <span className="text-slate-300 text-sm">{case_.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Arrests:</span>
                      <span className="text-slate-300 text-sm">{case_.arrests}</span>
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

          {sortedCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No cases found matching your search.</p>
            </div>
          )}
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

export default Categories;
