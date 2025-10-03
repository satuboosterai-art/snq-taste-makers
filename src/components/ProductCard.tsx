import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  flavor: string;
  benefits: string[];
  image?: string;
  color: string;
}

const ProductCard = ({ name, flavor, benefits, image, color }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden gradient-card shadow-secondary hover:shadow-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0">
      <div className={`h-64 relative overflow-hidden bg-muted/20`}>
        {image ? (
          <img 
            src={image} 
            alt={`${name} - ${flavor}`}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-smooth"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-20">🍯</div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg text-foreground">{name}</h3>
          <Badge variant="secondary" className="text-xs font-medium">
            {flavor}
          </Badge>
        </div>
        
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary mr-2 flex-shrink-0" />
              {benefit}
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-xs text-muted-foreground">
          Масса нетто: 150 г • Срок годности: 12 месяцев
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;