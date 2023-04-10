package lambda;

interface MyInterface {
    void printMessage(String message);
}

public class LambdaDemo {
    public static void main(String[] args) {
        // Example of a lambda function that implements the MyInterface interface
        MyInterface myLambda = (String message) -> System.out.println("Lambda says: " + message);

        // Call the lambda function to print a message
        myLambda.printMessage("Hello, world!");
    }
}
