import { services } from "../data/services";

export const orderByCategories = () => {
//Omito categorias repetidas
 const categories = [...new Set(services.services.map(service => service.category))];
 //Ordeno los servicios por categorio
 const servicesByCategories = categories.map(category => ({
     category: category,
     services: services.services.filter(service => service.category === category)
 }));
 return servicesByCategories
}
