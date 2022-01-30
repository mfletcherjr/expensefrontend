import { Employee, Expense } from "./Entities";
import { Handler } from "./Services-dto";
import axios from "axios";



export default class RequestHandler implements Handler{



    async GetRoster(): Promise<Employee[]> {
        const body = {}
        const response = await axios.get('http://localhost:5000/employee', body);

        return response.data.employeeList;
    }

    async approve(uid: string): Promise<string> {
        const body = {uid}
        const response = await axios.patch('http://localhost:5000/approve/:id',body);
        return response.data.message
        
    }
    async reject(uid: string): Promise<string> {
        const body = {uid}
        const response = await axios.patch('http://localhost:5000/reject/:id',body);
        return response.data.message
    }
    async createExpense(empId: string, request: Expense): Promise<Employee> {
        const body = {empId, request}
        const response = await axios.patch('http://localhost:5000/expense/:id',body);

        return response.data.message
    }
    async Login(username: string, password: string): Promise<Employee> {
        const body = {username, password}
        const response = await axios.patch('http://localhost:5000/login', body)

        return response.data.employee;
    }




}