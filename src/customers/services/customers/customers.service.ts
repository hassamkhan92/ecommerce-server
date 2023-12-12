import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/customers/dtos/CreateCustomer.dto';
import { Customers } from 'src/customers/types/Customers';

@Injectable()
export class CustomersService {
  private customers: Customers[] = [
    {
      id: 1,
      email: 'khan.hassam1992@gmail.com',
      name: 'Hassam',
    },
    {
      id: 2,
      email: 'hassankhan424@gmail.com',
      name: 'Hassan',
    },
    {
      id: 3,
      email: 'husaimahKhan@gmail.com',
      name: 'Husaimah',
    },
  ];

  findCustomersById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDTO) {
    this.customers.push(customerDto);
  }

  getCustomers() {
    return this.customers;
  }
}
