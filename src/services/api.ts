import axios from "axios";
import Cookie from 'js-cookie';

const token = Cookie.get('XSRF-TOKEN') || '';

axios.defaults.withCredentials = true;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["x-xsrf-token"] = token;

export const identityManagementApi = axios.create({
  baseURL: '/api/identitymanagement/v3'
});

export const tenantManagementApi = axios.create({
  baseURL: '/api/tenantmanagement/v4'
});

export const technicalTokenManagerApi = axios.create({
  baseURL: '/api/technicaltokenmanager/v3'
});

export const usageTransparencyApi = axios.create({
  baseURL: '/api/usagetransparency/v3'
});

export const IoTFileApi = axios.create({
  baseURL: '/api/iotfile/v3'
});

export const IoTTimeSeriesApi = axios.create({
  baseURL: '/api/iottimeseries/v3'
});

export const IoTTimeSeriesAggregatesApi = axios.create({
  baseURL: '/api/iottsaggregates/v4'
});

export const IoTTimeSeriesBulkApi = axios.create({
  baseURL: '/api/iottsbulk/v3'
});

export const agentManagementApi = axios.create({
  baseURL: '/api/agentmanagement/v3'
});

export const mindConnectApi = axios.create({
  baseURL: '/api/mindconnect/v3'
});

export const assetManagementApi = axios.create({
  baseURL: '/api/assetmanagement/v3'
});

export const eventManagementApi = axios.create({
  baseURL: '/api/eventmanagement/v3'
});

export const notificationApi = axios.create({
  baseURL: '/api/notification/v4'
});

export const anomalyDetectionApi = axios.create({
  baseURL: '/api/anomalydetection/v3'
});

export const dataExchangeApi = axios.create({
  baseURL: '/api/dataexchange/v3'
});

export const eventAnalyticsApi = axios.create({
  baseURL: '/api/eventanalytics/v3'
});

export const jobManagerApi = axios.create({
  baseURL: '/api/jobmanager/v3'
});

export const kpiCalculationApi = axios.create({
  baseURL: '/api/kpicalculation/v3'
});

export const modelManagementApi = axios.create({
  baseURL: '/api/modelmanagement/v3'
});

export const signalCalculationApi = axios.create({
  baseURL: '/api/signalcalculation/v3'
});

export const signalValidationApi = axios.create({
  baseURL: '/api/signalvalidation/v3'
});

export const signalSpectrumAnalysisApi = axios.create({
  baseURL: '/api/spectrumanalysis/v3'
});

export const trendPredictionApi = axios.create({
  baseURL: '/api/trendprediction/v3'
});

export const deploymentWorkflowApi = axios.create({
  baseURL: '/api/deploymentworkflow/v3'
});

export const deviceConfigurationApi = axios.create({
  baseURL: '/api/deviceconfiguration/v3'
});

export const deviceManagementApi = axios.create({
  baseURL: '/api/devicemanagement/v3'
});

export const deviceStatusApi = axios.create({
  baseURL: '/api/devicestatus/v3'
});

export const edgeAppInstanceManagementApi = axios.create({
  baseURL: '/api/edgeappinstancemanagement/v3'
});

export const firmwareDeploymentApi = axios.create({
  baseURL: '/api/firmwaredeployment/v3'
});

export const sdiApi = axios.create({
  baseURL: '/api/sdi/v4'
});