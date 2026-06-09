pipeline {
    agent {
        docker { image 'mcr.microsoft.com/playwright:v1.60.0-noble' }
    }
    
    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
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