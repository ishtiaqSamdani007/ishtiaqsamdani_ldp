package exceptions;

// Define a custom exception class
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

public class ExceptionDemo {
    public static void main(String[] args) {
        // Example of a built-in exception
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Example of a custom exception
        try {
            int age = -1;
            if (age < 0) {
                throw new CustomException("Age cannot be negative");
            }
        } catch (CustomException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
