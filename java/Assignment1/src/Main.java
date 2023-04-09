import java.util.Scanner;
import java.util.regex.Pattern;
public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        DirectorySearch obj = new DirectorySearch();
        obj.dSearch("C:\\Users\\Ishtiaq\\Desktop\\Projects\\JAVA", input.nextLine());
    }
}