
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Linkedin } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  linkedInUrl?: string;
  avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  company,
  linkedInUrl,
  avatarUrl
}) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="text-primary text-4xl font-serif">"</div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-lg leading-relaxed">
          {quote}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
          <img
            src={avatarUrl || `https://ui-avatars.com/api/?name=${name}&background=random`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{name}</p>
            {linkedInUrl && (
              <a 
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s LinkedIn profile`}
                className="text-primary hover:text-primary/80"
              >
                <Linkedin size={16} />
              </a>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {role}{company ? ` at ${company}` : ''}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
