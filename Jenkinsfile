pipeline {
    agent any
    
    environment {
        NODEJS_VERSION = '20.8.1'  // specify your desired Node.js version
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Getting Requirements....'
                sh 'git --version'
                git branch: 'main',
                    url: 'https://github.com/prupertawraqpublishing/my-next-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Use nvm to install and use the specified Node.js version
                    // sh "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash"
                    //  sh "source ~/.nvm/nvm.sh && nvm install $NODEJS_VERSION"
                    echo "Displaying scripts"
                }
                sh "npm install"
            }
        }

        stage('Run Tests') {
            steps {
                sh "npm test"
            }
        }

        stage('Build') {
            steps {
                sh "npm run build"
            }
        }

        stage('Deploy') {
            steps {
                echo 'Getting Deploy ....'
                // Add deployment steps here if needed
            }
        }
    }

    post {
        success {
            echo 'Build successful! Deploy your application.'
        }
        failure {
            echo 'Build failed. Please check the logs for details.'
        }
    }
}
