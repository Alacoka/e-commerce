import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fone sem fio',
    price: 149.99,
    description: 'Fone de ouvido sem fio de alta qualidade com cancelamento de ruído',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Audio',
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 289.99,
    description: 'Smart watch rico em recursos com monitoramento de saúde',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Wearables',
    rating: 4.8,
    reviews: 256
  },
  {
    id: '3',
    name: 'Mochila para notebook',
    price: 59.99,
    description: 'Mochila para laptop durável e espaçosa',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'Accessories',
    rating: 4.2,
    reviews: 89
  },
  {
    id: '4',
    name: 'Carregador sem fio',
    price: 39.99,
    description: 'Base de carregamento sem fio rápida para todos os dispositivos habilitados para carregamento por indução',
    image: 'https://images.unsplash.com/photo-1698314440014-3badb1e9c938?w=500',
    category: 'Accessories',
    rating: 4.3,
    reviews: 167
  },
  {
    id: '5',
    name: 'Teclado mecânico',
    price: 129.99,
    description: 'Teclado mecânico para jogos RGB com switches personalizados',
    image: 'https://images.unsplash.com/photo-1626958390943-a70309376444?w=500',
    category: 'Gaming',
    rating: 4.7,
    reviews: 342
  },
  {
    id: '6',
    name: 'Alto-falante portátil',
    price: 129.99,
    description: 'Alto-falante portátil resistente à água com ótima qualidade de áudio',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: 'Audio',
    rating: 4.4,
    reviews: 203
  }
];