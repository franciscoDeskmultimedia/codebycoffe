
name: Run Build

on:
  push:
    branches: 
        - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Deploy to codebycoffe
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SSH_HOST }}
        username: ${{ secrets.SSH_USERNAME }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        script: |
            cd ${{ secrets.PROJECT_PATH }}
            git pull origin master
            npm run build
            npm run start