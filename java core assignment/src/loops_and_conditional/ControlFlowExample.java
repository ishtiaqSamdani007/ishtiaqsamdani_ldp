package loops_and_conditional;

public class ControlFlowExample {
    public static void main(String[] args) {
        int num = 3;
        String color = "red";

        // if-else statement
        if (num > 0) {
            System.out.println("The number is positive.");
        } else {
            System.out.println("The number is not positive.");
        }

        // switch statement
        switch (color) {
            case "red":
                System.out.println("The color is red.");
                break;
            case "blue":
                System.out.println("The color is blue.");
                break;
            case "green":
                System.out.println("The color is green.");
                break;
            default:
                System.out.println("The color is not red, blue, or green.");
        }
    }
}
