// import neo.neshta

public class PaymentContract : SmartContract {

        public static void Main(){

                String hostAddress = asfas12312;        // neo addresses
                String usrAddress = asdq2r121;
                int betValue = 10;      // 10 neo
                float winvalue = 0.05 * (float)betValue + betValue;
                float lostvalue = winvalue + 0.01*(float)betValue;
                int targetScore = 50;           // passed 50 pipes
                int achievedScore = 55;

                if(achievedScore >= targetScore){
                        
                        // transfer(winvalue, hostAddress, usrAddress);
                
                }else{

                        // transfer(lostvalue, usrAddress, hostAddress);

                }
                
        }
        // public void Check(){

                // check whether the transaction was correct.

        // }
}
