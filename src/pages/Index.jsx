import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Menu, Paw, Heart, Info, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Simulating an API call for a cat fact
    const facts = [
      "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
      "A group of cats is called a clowder.",
      "Cats spend 70% of their lives sleeping.",
      "The first cat in space was a French cat named Felicette in 1963.",
      "Cats can rotate their ears 180 degrees.",
    ];
    setCatFact(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Paw className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">CatWorld</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="ghost">Home</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    Breeds <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Siamese</DropdownMenuItem>
                  <DropdownMenuItem>Persian</DropdownMenuItem>
                  <DropdownMenuItem>Maine Coon</DropdownMenuItem>
                  <DropdownMenuItem>Bengal</DropdownMenuItem>
                  <DropdownMenuItem>British Shorthair</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost">Care</Button>
              <Button variant="ghost">About</Button>
            </div>
            <div className="flex items-center sm:hidden">
              <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start">Home</Button>
              <Button variant="ghost" className="w-full justify-start">Breeds</Button>
              <Button variant="ghost" className="w-full justify-start">Care</Button>
              <Button variant="ghost" className="w-full justify-start">About</Button>
            </div>
          </div>
        )}
      </nav>

      <div className="relative bg-cover bg-center h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-white mb-4"
          >
            All About Cats
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white"
          >
            Discover the fascinating world of our feline friends
          </motion.p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Cat Fact of the Day</h2>
          <p className="text-lg text-center italic">{catFact}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center"><Heart className="mr-2 text-red-500" /> Characteristics of Cats</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Independent nature</li>
                  <li>Excellent hunters with sharp claws and teeth</li>
                  <li>Flexible bodies and quick reflexes</li>
                  <li>Keen senses, especially hearing and night vision</li>
                  <li>Communicate through vocalizations, body language, and scent</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center"><Paw className="mr-2 text-purple-600" /> Popular Cat Breeds</CardTitle>
                <CardDescription>Some well-known cat breeds around the world</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex overflow-x-auto space-x-4 pb-4">
                  {["Siamese", "Persian", "Maine Coon", "Bengal", "British Shorthair"].map((breed, index) => (
                    <div key={index} className="flex-shrink-0 w-48 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-lg font-semibold">{breed}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Card className="mt-12 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center"><Info className="mr-2 text-blue-500" /> Interesting Cat Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How long do cats sleep?</AccordionTrigger>
                <AccordionContent>
                  Cats sleep an average of 15 hours a day, and some can sleep up to 20 hours in a 24-hour period.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How far can cats jump?</AccordionTrigger>
                <AccordionContent>
                  Cats can jump up to six times their length in a single bound, which is nearly 8 feet high!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do cats sweat?</AccordionTrigger>
                <AccordionContent>
                  Cats only sweat through their paws. They primarily cool themselves by panting and grooming.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold">CatWorld</h2>
              <p className="mt-2">Celebrating our feline friends</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Breeds</a></li>
                <li><a href="#" className="hover:text-gray-300">Care</a></li>
                <li><a href="#" className="hover:text-gray-300">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <form className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2023 CatWorld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
