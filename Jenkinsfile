pipeline {
    agent any
    
    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm run test:ci'
            }
        }
    }
}