@echo off

echo ==========================================
echo Admin Alliance Terraterri Deployment Start
echo ==========================================

set PROJECT_ID=terraterri-454406
set REGION=asia-south1
set REPOSITORY=admin-alliance-terraterri
set SERVICE_NAME=admin-alliance-terraterri
set IMAGE_NAME=asia-south1-docker.pkg.dev/%PROJECT_ID%/%REPOSITORY%/%SERVICE_NAME%:latest
set SERVICE_ACCOUNT=deployer-sa@terraterri-454406.iam.gserviceaccount.com

echo.
echo Setting Google Cloud Project...
call gcloud config set project %PROJECT_ID%

echo.
echo Configuring Docker Auth...
call gcloud auth configure-docker %REGION%-docker.pkg.dev --quiet

echo.
echo Building Docker Image...
docker build -t %IMAGE_NAME% .

echo.
echo Pushing Docker Image...
docker push %IMAGE_NAME%

echo.
echo Deploying to Cloud Run...
call gcloud run deploy %SERVICE_NAME% ^
 --image=%IMAGE_NAME% ^
 --region=%REGION% ^
 --platform=managed ^
 --allow-unauthenticated ^
 --min-instances=1 ^
 --max-instances=100 ^
 --port=3000 ^
 --service-account=%SERVICE_ACCOUNT%

echo.
echo Deployment Completed!
pause