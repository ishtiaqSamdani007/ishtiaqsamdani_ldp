import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String buffer;
        Scanner input = new Scanner(System.in);
        buffer=input.nextLine();
        if(new RegexSearch().Regex("^(?=.*[a-z])(?!.*[^a-z]).{26}$",buffer.toLowerCase()))
        {
            System.out.println("contains all a-z alphabets");
        }
        else{
            System.out.println("some of a-z alphabets are missing");
        }
    }
}

//time complexity: O(1)
//space complexity: O(n)