
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Plus, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hello! I'm your Twello AI assistant. I can help you create landing pages, find the best affiliate offers, and optimize your campaigns. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const templates: Template[] = [
    {
      id: 't1',
      title: 'Product Review Landing Page',
      description: 'High-converting template for product reviews with CTAs',
      category: 'Landing Page'
    },
    {
      id: 't2',
      title: 'Email Capture Squeeze Page',
      description: 'Maximize email sign-ups with this optimized template',
      category: 'Lead Generation'
    },
    {
      id: 't3',
      title: 'Comparison Landing Page',
      description: 'Compare multiple products with pros and cons layout',
      category: 'Landing Page'
    },
    {
      id: 't4',
      title: 'Webinar Registration Page',
      description: 'Boost webinar signups with this proven template',
      category: 'Event'
    }
  ];

  const suggestedPrompts = [
    "Help me create a high-converting landing page for fitness products",
    "What are the top-performing affiliate offers in the health niche?",
    "Give me tips for optimizing my affiliate marketing campaigns",
    "How can I improve my affiliate website's SEO?",
    "Suggest some email marketing templates for affiliates"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response after delay
    setTimeout(() => {
      const botResponses = [
        "Based on your requirements, I recommend creating a landing page that focuses on clear value propositions and compelling CTAs. Would you like me to help you structure this page?",
        "I've analyzed our database and found 3 top-performing offers in that niche. The highest converting one has a 5.2% conversion rate and $42 average commission. Would you like more details?",
        "Looking at your request, I can suggest several optimization strategies. First, consider A/B testing your headlines and call-to-action buttons. Would you like me to provide a complete optimization checklist?",
        "I've researched the top affiliate programs for that product category. The best options currently are offering 8-12% commission rates with 90-day cookies. Would you like me to send you direct links to apply?",
        "I can help you create custom audience segments for that campaign. Based on industry data, targeting users aged 28-45 with interests in sustainability would be most effective. Should I elaborate on this strategy?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const newBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const usePrompt = (prompt: string) => {
    setInputValue(prompt);
    // Focus the input after setting the value
    const inputElement = document.getElementById('message-input');
    if (inputElement) {
      inputElement.focus();
    }
  };

  const startNewTemplate = (template: Template) => {
    toast({
      title: "Template selected",
      description: `Starting new project with ${template.title} template`,
    });
    // In a real implementation, this would navigate to a template editor
    // or populate the chat with template-specific assistance
    const newBotMessage: Message = {
      id: Date.now().toString(),
      content: `Great choice! Let's get started with the "${template.title}" template. What specific products or services would you like to promote with this landing page?`,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newBotMessage]);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">AI Assistant</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Tabs defaultValue="templates">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="prompts">Prompts</TabsTrigger>
                </TabsList>
                
                <TabsContent value="templates" className="mt-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Quick Templates</CardTitle>
                      <CardDescription>
                        Start with a pre-built template
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {templates.map(template => (
                        <div 
                          key={template.id} 
                          className="p-3 border rounded-md hover:bg-slate-50 cursor-pointer transition-colors"
                          onClick={() => startNewTemplate(template)}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium">{template.title}</h3>
                            <Badge variant="outline" className="text-xs">{template.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{template.description}</p>
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Browse More Templates
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="prompts" className="mt-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Suggested Prompts</CardTitle>
                      <CardDescription>
                        Try these prompts to get started
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {suggestedPrompts.map((prompt, index) => (
                        <div 
                          key={index}
                          className="p-3 border rounded-md hover:bg-slate-50 cursor-pointer transition-colors"
                          onClick={() => usePrompt(prompt)}
                        >
                          <p className="text-sm">{prompt}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Chat area */}
            <div className="lg:col-span-3">
              <Card className="h-[700px] flex flex-col">
                <CardHeader className="border-b px-6">
                  <div className="flex items-center">
                    <Bot className="h-6 w-6 mr-2 text-twello-blue" />
                    <div>
                      <CardTitle className="text-lg">Twello Assistant</CardTitle>
                      <CardDescription>Powered by AI</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow overflow-hidden p-0">
                  <ScrollArea className="h-full px-6 py-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div 
                          key={message.id} 
                          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                            <Avatar className="h-8 w-8">
                              {message.sender === 'bot' ? (
                                <Bot className="h-5 w-5 text-white" />
                              ) : (
                                <div className="bg-twello-purple text-white flex items-center justify-center h-full w-full">
                                  U
                                </div>
                              )}
                            </Avatar>
                            <div>
                              <div 
                                className={`px-4 py-3 rounded-lg ${
                                  message.sender === 'user' 
                                    ? 'bg-twello-blue text-white' 
                                    : 'bg-muted'
                                }`}
                              >
                                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {formatTime(message.timestamp)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="flex gap-3 max-w-[80%]">
                            <Avatar className="h-8 w-8">
                              <Bot className="h-5 w-5 text-white" />
                            </Avatar>
                            <div className="px-4 py-3 rounded-lg bg-muted">
                              <div className="flex space-x-2">
                                <div className="h-2 w-2 bg-muted-foreground/30 rounded-full animate-bounce"></div>
                                <div className="h-2 w-2 bg-muted-foreground/30 rounded-full animate-bounce delay-75"></div>
                                <div className="h-2 w-2 bg-muted-foreground/30 rounded-full animate-bounce delay-150"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                </CardContent>
                
                <CardFooter className="border-t p-4">
                  <div className="flex w-full gap-2">
                    <Input
                      id="message-input"
                      placeholder="Type your message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className="flex-grow"
                    />
                    <Button onClick={handleSend} disabled={inputValue.trim() === '' || isLoading}>
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAssistant;
