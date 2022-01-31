import { Employee, Expense } from "./Entities";
import { Handler } from "./Services-dto";
import axios from "axios";



export default class RequestHandler implements Handler{



    async GetRoster(): Promise<Employee[]> {
        const body = {}
        const response = await axios.get('http://localhost:5000/employee', body);

        return response.data.employeeList;
    }

    async Approve(uid: string): Promise<string> {
        const body = {}
        const response = await axios.patch(`http://localhost:5000/approve/${uid}`,body);
        return response.data.message
        
    }
    async Reject(uid: string): Promise<string> {
        const body = {uid}
        const response = await axios.patch(`http://localhost:5000/reject/${uid}`,body);
        return response.data.message
    }
    async CreateExpense(uid: string, expense: Expense): Promise<Employee> {
        const body = {expense}
        const response = await axios.patch(`http://localhost:5000/expense/${uid}`,body);

        return response.data.message
    }
    async Login(username: string, password: string): Promise<Employee> {
        const body = {username, password}
        const response = await axios.patch('http://localhost:5000/login', body)

        return response.data.employee;
    }




}