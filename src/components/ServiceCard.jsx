import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, icon: Icon, pricing }) => {
  return (
    <Card className="card-hover overflow-hidden flex flex-col h-full">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="text-primary" size={24} />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex-1">
        <CardDescription className="text-base">{description}</CardDescription>
        {pricing && (
          <div className="mt-4 text-lg font-medium">Starting at {pricing}</div>
        )}
      </CardContent>

      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to="/contact">Get Started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
