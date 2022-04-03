Feature: Login

    When I navigate to URL
    
    Scenario:validate url
        
        Then the url must contain

    Scenario outline:validate primary menu
        Then the Primary menu should contain <option>
        examples|option|
                |Home|
                |About|
                |Shop|
                |Blog|
                |Contact|
                |My account|
