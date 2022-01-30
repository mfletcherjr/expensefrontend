export interface Expense{
    id: string 
    description: string 
    amount: string 
    status: number
    date: string // makes dates numbers and store them as unix epoch time
}

export interface Employee{
    id:string
    fname:string
    lname:string
    username:string
    password:string
    expenses:Expense[]
    isManager:Boolean

}