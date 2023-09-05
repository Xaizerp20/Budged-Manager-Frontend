export interface Expense {
    expenseId: number;
    expenseDescription: string;
    amount: number;
    expenseDate: String;
    userName: string; // Mostrar el nombre del usuario
    categoryName: string; // Mostrar el nombre de la categoría
}