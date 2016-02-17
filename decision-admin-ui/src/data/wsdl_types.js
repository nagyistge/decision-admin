(function (ErrorType) {
    ErrorType[ErrorType["WARNING"] = 0] = "WARNING";
    ErrorType[ErrorType["NON_DEPLOY_FT"] = 1] = "NON_DEPLOY_FT";
    ErrorType[ErrorType["UN_KNOWN"] = 2] = "UN_KNOWN";
    ErrorType[ErrorType["ASSET_NOT_EXIST"] = 3] = "ASSET_NOT_EXIST";
    ErrorType[ErrorType["NOT_DRAFT"] = 4] = "NOT_DRAFT";
    ErrorType[ErrorType["In_USE"] = 5] = "In_USE";
    ErrorType[ErrorType["NO_DD_IN_VG_HIERARCHY"] = 6] = "NO_DD_IN_VG_HIERARCHY";
    ErrorType[ErrorType["DUPLICATE_NAME"] = 7] = "DUPLICATE_NAME";
    ErrorType[ErrorType["EXTRACT_CRF_FILE"] = 8] = "EXTRACT_CRF_FILE";
    ErrorType[ErrorType["EXPORT_ERROR"] = 9] = "EXPORT_ERROR";
    ErrorType[ErrorType["PROCESS_IS_RUNNING_ASYNC"] = 10] = "PROCESS_IS_RUNNING_ASYNC";
    ErrorType[ErrorType["OBJECT_NOT_IN_LATEST_STATE"] = 11] = "OBJECT_NOT_IN_LATEST_STATE";
    ErrorType[ErrorType["FILE_NOT_FOUND"] = 12] = "FILE_NOT_FOUND";
    ErrorType[ErrorType["VG_NOT_AUTHORIZED"] = 13] = "VG_NOT_AUTHORIZED";
    ErrorType[ErrorType["SAME_GLOSSARY"] = 14] = "SAME_GLOSSARY";
    ErrorType[ErrorType["ROOT_VG"] = 15] = "ROOT_VG";
    ErrorType[ErrorType["CHILD_VG_TO_PARENT_VG"] = 16] = "CHILD_VG_TO_PARENT_VG";
    ErrorType[ErrorType["PARENT_VG_TO_CHILD_VG"] = 17] = "PARENT_VG_TO_CHILD_VG";
    ErrorType[ErrorType["RECURSIVE_FORMULA"] = 18] = "RECURSIVE_FORMULA";
    ErrorType[ErrorType["DIRTY_TASK_TRANSITION"] = 19] = "DIRTY_TASK_TRANSITION";
    ErrorType[ErrorType["RFV_ALREADY_IN_DV"] = 20] = "RFV_ALREADY_IN_DV";
    ErrorType[ErrorType["FILE_OVER_SIZE"] = 21] = "FILE_OVER_SIZE";
    ErrorType[ErrorType["TASK_IS_ON_HOLD"] = 22] = "TASK_IS_ON_HOLD";
    ErrorType[ErrorType["STATUS_IS_NOT_READY"] = 23] = "STATUS_IS_NOT_READY";
    ErrorType[ErrorType["RFV_WITH_DRAFT_FT"] = 24] = "RFV_WITH_DRAFT_FT";
    ErrorType[ErrorType["OPERATION_NOT_SUPPORTED_FOR_ENTITY"] = 25] = "OPERATION_NOT_SUPPORTED_FOR_ENTITY";
    ErrorType[ErrorType["DEP_DESC_NOT_SYNC"] = 26] = "DEP_DESC_NOT_SYNC";
    ErrorType[ErrorType["JOB_NOT_RUNNING"] = 27] = "JOB_NOT_RUNNING";
})(exports.ErrorType || (exports.ErrorType = {}));
var ErrorType = exports.ErrorType;
(function (AuditStyle) {
    AuditStyle[AuditStyle["NONE"] = 0] = "NONE";
    AuditStyle[AuditStyle["ENVERS"] = 1] = "ENVERS";
    AuditStyle[AuditStyle["AUDIT_LOG"] = 2] = "AUDIT_LOG";
})(exports.AuditStyle || (exports.AuditStyle = {}));
var AuditStyle = exports.AuditStyle;
(function (Operator) {
})(exports.Operator || (exports.Operator = {}));
var Operator = exports.Operator;
(function (DataType) {
    DataType[DataType["AMOUNT"] = 0] = "AMOUNT";
    DataType[DataType["CODE"] = 1] = "CODE";
    DataType[DataType["DATE"] = 2] = "DATE";
    DataType[DataType["DATE_TIME"] = 3] = "DATE_TIME";
    DataType[DataType["IDENTIFIER"] = 4] = "IDENTIFIER";
    DataType[DataType["INDICATOR"] = 5] = "INDICATOR";
    DataType[DataType["NAME"] = 6] = "NAME";
    DataType[DataType["NUMERIC"] = 7] = "NUMERIC";
    DataType[DataType["PERCENT"] = 8] = "PERCENT";
    DataType[DataType["QUANTITY"] = 9] = "QUANTITY";
    DataType[DataType["TEXT"] = 10] = "TEXT";
    DataType[DataType["LIST"] = 11] = "LIST";
    DataType[DataType["CONCLUSION"] = 12] = "CONCLUSION";
    DataType[DataType["CONCLUSION_LIST"] = 13] = "CONCLUSION_LIST";
    DataType[DataType["DAY"] = 14] = "DAY";
    DataType[DataType["BASIS_POINTS"] = 15] = "BASIS_POINTS";
    DataType[DataType["MONTH_YEAR"] = 16] = "MONTH_YEAR";
    DataType[DataType["MONTH"] = 17] = "MONTH";
    DataType[DataType["YEAR"] = 18] = "YEAR";
    DataType[DataType["ENUMERATOR"] = 19] = "ENUMERATOR";
})(exports.DataType || (exports.DataType = {}));
var DataType = exports.DataType;
(function (ExternalSetStructureType) {
    ExternalSetStructureType[ExternalSetStructureType["LIST"] = 0] = "LIST";
    ExternalSetStructureType[ExternalSetStructureType["HIERARCHY"] = 1] = "HIERARCHY";
})(exports.ExternalSetStructureType || (exports.ExternalSetStructureType = {}));
var ExternalSetStructureType = exports.ExternalSetStructureType;
(function (ApprovalStrategyType) {
    ApprovalStrategyType[ApprovalStrategyType["NONE"] = 0] = "NONE";
    ApprovalStrategyType[ApprovalStrategyType["ALL"] = 1] = "ALL";
    ApprovalStrategyType[ApprovalStrategyType["ANY"] = 2] = "ANY";
})(exports.ApprovalStrategyType || (exports.ApprovalStrategyType = {}));
var ApprovalStrategyType = exports.ApprovalStrategyType;
(function (VoterActionType) {
    VoterActionType[VoterActionType["APPROVE"] = 0] = "APPROVE";
    VoterActionType[VoterActionType["REJECT"] = 1] = "REJECT";
})(exports.VoterActionType || (exports.VoterActionType = {}));
var VoterActionType = exports.VoterActionType;
(function (AssetState) {
    AssetState[AssetState["DRAFT"] = 0] = "DRAFT";
    AssetState[AssetState["CANDIDATE"] = 1] = "CANDIDATE";
    AssetState[AssetState["APPROVED"] = 2] = "APPROVED";
    AssetState[AssetState["REJECTED"] = 3] = "REJECTED";
    AssetState[AssetState["RETIRED"] = 4] = "RETIRED";
})(exports.AssetState || (exports.AssetState = {}));
var AssetState = exports.AssetState;
(function (VersionInc) {
    VersionInc[VersionInc["MAJOR"] = 0] = "MAJOR";
    VersionInc[VersionInc["MINOR"] = 1] = "MINOR";
    VersionInc[VersionInc["NON"] = 2] = "NON";
})(exports.VersionInc || (exports.VersionInc = {}));
var VersionInc = exports.VersionInc;
(function (WorkflowStatus) {
    WorkflowStatus[WorkflowStatus["NEW"] = 0] = "NEW";
    WorkflowStatus[WorkflowStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    WorkflowStatus[WorkflowStatus["COMPLETED"] = 2] = "COMPLETED";
})(exports.WorkflowStatus || (exports.WorkflowStatus = {}));
var WorkflowStatus = exports.WorkflowStatus;
(function (TaskWorkflowProperties) {
    TaskWorkflowProperties[TaskWorkflowProperties["CONFLICT"] = 0] = "CONFLICT";
    TaskWorkflowProperties[TaskWorkflowProperties["RESOLVE_CONFLICT"] = 1] = "RESOLVE_CONFLICT";
    TaskWorkflowProperties[TaskWorkflowProperties["NON_DEPLOY_FT"] = 2] = "NON_DEPLOY_FT";
    TaskWorkflowProperties[TaskWorkflowProperties["RESOLVE_NONDEPLOY_FT"] = 3] = "RESOLVE_NONDEPLOY_FT";
    TaskWorkflowProperties[TaskWorkflowProperties["WARNING"] = 4] = "WARNING";
    TaskWorkflowProperties[TaskWorkflowProperties["RESOLVE_WARNING"] = 5] = "RESOLVE_WARNING";
    TaskWorkflowProperties[TaskWorkflowProperties["OWNER_TASK_ID"] = 6] = "OWNER_TASK_ID";
})(exports.TaskWorkflowProperties || (exports.TaskWorkflowProperties = {}));
var TaskWorkflowProperties = exports.TaskWorkflowProperties;
(function (RowOperation) {
    RowOperation[RowOperation["NEW"] = 0] = "NEW";
    RowOperation[RowOperation["UPDATED"] = 1] = "UPDATED";
    RowOperation[RowOperation["DELETED"] = 2] = "DELETED";
})(exports.RowOperation || (exports.RowOperation = {}));
var RowOperation = exports.RowOperation;
(function (PullRequestChangeType) {
    PullRequestChangeType[PullRequestChangeType["ASSET_ADDED"] = 0] = "ASSET_ADDED";
    PullRequestChangeType[PullRequestChangeType["ASSET_REMOVED"] = 1] = "ASSET_REMOVED";
    PullRequestChangeType[PullRequestChangeType["DEPLOYMENT_DESCRIPTOR_CHANGED"] = 2] = "DEPLOYMENT_DESCRIPTOR_CHANGED";
    PullRequestChangeType[PullRequestChangeType["DEPLOYMENT_DESCRIPTOR_ADDED"] = 3] = "DEPLOYMENT_DESCRIPTOR_ADDED";
    PullRequestChangeType[PullRequestChangeType["DEPLOYMENT_DESCRIPTOR_REMOVED"] = 4] = "DEPLOYMENT_DESCRIPTOR_REMOVED";
})(exports.PullRequestChangeType || (exports.PullRequestChangeType = {}));
var PullRequestChangeType = exports.PullRequestChangeType;
(function (pullRequestType) {
    pullRequestType[pullRequestType["AD_HOC"] = 0] = "AD_HOC";
    pullRequestType[pullRequestType["FULL_MERGE"] = 1] = "FULL_MERGE";
    pullRequestType[pullRequestType["PARTIAL_MERGE"] = 2] = "PARTIAL_MERGE";
})(exports.pullRequestType || (exports.pullRequestType = {}));
var pullRequestType = exports.pullRequestType;
(function (PullRequestStatus) {
    PullRequestStatus[PullRequestStatus["DRAFT"] = 0] = "DRAFT";
    PullRequestStatus[PullRequestStatus["CANDIDATE"] = 1] = "CANDIDATE";
    PullRequestStatus[PullRequestStatus["APPROVED"] = 2] = "APPROVED";
})(exports.PullRequestStatus || (exports.PullRequestStatus = {}));
var PullRequestStatus = exports.PullRequestStatus;
(function (TaskType) {
    TaskType[TaskType["BCD_TASK"] = 0] = "BCD_TASK";
    TaskType[TaskType["FT_TASK"] = 1] = "FT_TASK";
    TaskType[TaskType["BCD_SUB_TASK"] = 2] = "BCD_SUB_TASK";
    TaskType[TaskType["INFO"] = 3] = "INFO";
    TaskType[TaskType["EXPORT_TASK"] = 4] = "EXPORT_TASK";
    TaskType[TaskType["DV_TO_VG_ASSOC_TASK"] = 5] = "DV_TO_VG_ASSOC_TASK";
    TaskType[TaskType["EXTENSION"] = 6] = "EXTENSION";
    TaskType[TaskType["IMPORT_TASK"] = 7] = "IMPORT_TASK";
    TaskType[TaskType["OWNER_TASK"] = 8] = "OWNER_TASK";
})(exports.TaskType || (exports.TaskType = {}));
var TaskType = exports.TaskType;
(function (Priority) {
    Priority[Priority["HIGH"] = 0] = "HIGH";
    Priority[Priority["NORMAL"] = 1] = "NORMAL";
    Priority[Priority["LOW"] = 2] = "LOW";
})(exports.Priority || (exports.Priority = {}));
var Priority = exports.Priority;
(function (StateStatus) {
    StateStatus[StateStatus["WAITING_FOR_APPROVAL"] = 0] = "WAITING_FOR_APPROVAL";
    StateStatus[StateStatus["REJECTED"] = 1] = "REJECTED";
    StateStatus[StateStatus["APPROVED"] = 2] = "APPROVED";
})(exports.StateStatus || (exports.StateStatus = {}));
var StateStatus = exports.StateStatus;
(function (ExpressionType) {
    ExpressionType[ExpressionType["SIMPLE"] = 0] = "SIMPLE";
    ExpressionType[ExpressionType["COMPLEX"] = 1] = "COMPLEX";
})(exports.ExpressionType || (exports.ExpressionType = {}));
var ExpressionType = exports.ExpressionType;
(function (ChangedStatus) {
    ChangedStatus[ChangedStatus["UNCHANGED"] = 0] = "UNCHANGED";
    ChangedStatus[ChangedStatus["DELETED"] = 1] = "DELETED";
})(exports.ChangedStatus || (exports.ChangedStatus = {}));
var ChangedStatus = exports.ChangedStatus;
(function (ModelMappingStatus) {
    ModelMappingStatus[ModelMappingStatus["DRAFT"] = 0] = "DRAFT";
    ModelMappingStatus[ModelMappingStatus["CANDIDATE"] = 1] = "CANDIDATE";
    ModelMappingStatus[ModelMappingStatus["APPROVED"] = 2] = "APPROVED";
})(exports.ModelMappingStatus || (exports.ModelMappingStatus = {}));
var ModelMappingStatus = exports.ModelMappingStatus;
(function (ReleaseType) {
    ReleaseType[ReleaseType["RELEASE"] = 0] = "RELEASE";
    ReleaseType[ReleaseType["TAG"] = 1] = "TAG";
    ReleaseType[ReleaseType["SNAPSHOT_TAG"] = 2] = "SNAPSHOT_TAG";
})(exports.ReleaseType || (exports.ReleaseType = {}));
var ReleaseType = exports.ReleaseType;
(function (DomainType) {
    DomainType[DomainType["ANY_VALUE"] = 0] = "ANY_VALUE";
    DomainType[DomainType["RANGE"] = 1] = "RANGE";
    DomainType[DomainType["REGULAR_SET"] = 2] = "REGULAR_SET";
    DomainType[DomainType["DYNAMIC_SET"] = 3] = "DYNAMIC_SET";
    DomainType[DomainType["EXTERNAL_SET"] = 4] = "EXTERNAL_SET";
})(exports.DomainType || (exports.DomainType = {}));
var DomainType = exports.DomainType;
(function (EntityStatus) {
    EntityStatus[EntityStatus["DISABLED"] = 0] = "DISABLED";
    EntityStatus[EntityStatus["RETIRED"] = 1] = "RETIRED";
    EntityStatus[EntityStatus["DEPRECATED"] = 2] = "DEPRECATED";
    EntityStatus[EntityStatus["ENABLED"] = 3] = "ENABLED";
})(exports.EntityStatus || (exports.EntityStatus = {}));
var EntityStatus = exports.EntityStatus;
(function (FactTypeFlag) {
})(exports.FactTypeFlag || (exports.FactTypeFlag = {}));
var FactTypeFlag = exports.FactTypeFlag;
(function (PrimitiveDataType) {
    PrimitiveDataType[PrimitiveDataType["DATE"] = 0] = "DATE";
    PrimitiveDataType[PrimitiveDataType["DATE_TIME"] = 1] = "DATE_TIME";
    PrimitiveDataType[PrimitiveDataType["NUMERIC"] = 2] = "NUMERIC";
    PrimitiveDataType[PrimitiveDataType["TEXT"] = 3] = "TEXT";
    PrimitiveDataType[PrimitiveDataType["LIST"] = 4] = "LIST";
    PrimitiveDataType[PrimitiveDataType["CONCLUSION"] = 5] = "CONCLUSION";
    PrimitiveDataType[PrimitiveDataType["CONCLUSION_LIST"] = 6] = "CONCLUSION_LIST";
    PrimitiveDataType[PrimitiveDataType["BASIS_POINTS"] = 7] = "BASIS_POINTS";
    PrimitiveDataType[PrimitiveDataType["MONTH_YEAR"] = 8] = "MONTH_YEAR";
    PrimitiveDataType[PrimitiveDataType["NON_SENSITIVE_TEXT"] = 9] = "NON_SENSITIVE_TEXT";
    PrimitiveDataType[PrimitiveDataType["ENUMERATOR"] = 10] = "ENUMERATOR";
    PrimitiveDataType[PrimitiveDataType["INTEGER"] = 11] = "INTEGER";
})(exports.PrimitiveDataType || (exports.PrimitiveDataType = {}));
var PrimitiveDataType = exports.PrimitiveDataType;
(function (QueryParameterDefinitionType) {
    QueryParameterDefinitionType[QueryParameterDefinitionType["NONE"] = 0] = "NONE";
    QueryParameterDefinitionType[QueryParameterDefinitionType["FACT_TYPE_PARAM"] = 1] = "FACT_TYPE_PARAM";
    QueryParameterDefinitionType[QueryParameterDefinitionType["EXTERNAL_SET_PARAM"] = 2] = "EXTERNAL_SET_PARAM";
})(exports.QueryParameterDefinitionType || (exports.QueryParameterDefinitionType = {}));
var QueryParameterDefinitionType = exports.QueryParameterDefinitionType;
(function (OperandType) {
})(exports.OperandType || (exports.OperandType = {}));
var OperandType = exports.OperandType;
(function (GlossaryArtifactType) {
    GlossaryArtifactType[GlossaryArtifactType["FACT_TYPE"] = 0] = "FACT_TYPE";
    GlossaryArtifactType[GlossaryArtifactType["LINK"] = 1] = "LINK";
    GlossaryArtifactType[GlossaryArtifactType["ALIAS"] = 2] = "ALIAS";
})(exports.GlossaryArtifactType || (exports.GlossaryArtifactType = {}));
var GlossaryArtifactType = exports.GlossaryArtifactType;
(function (ExternalSetFindLevel) {
})(exports.ExternalSetFindLevel || (exports.ExternalSetFindLevel = {}));
var ExternalSetFindLevel = exports.ExternalSetFindLevel;
(function (RepoQueryJunctionType) {
    RepoQueryJunctionType[RepoQueryJunctionType["CONJUNCTION"] = 0] = "CONJUNCTION";
    RepoQueryJunctionType[RepoQueryJunctionType["DISJUNCTION"] = 1] = "DISJUNCTION";
    RepoQueryJunctionType[RepoQueryJunctionType["SUBTRACTION"] = 2] = "SUBTRACTION";
})(exports.RepoQueryJunctionType || (exports.RepoQueryJunctionType = {}));
var RepoQueryJunctionType = exports.RepoQueryJunctionType;
(function (ImportFactTypeStatus) {
    ImportFactTypeStatus[ImportFactTypeStatus["UNCHANGED"] = 0] = "UNCHANGED";
    ImportFactTypeStatus[ImportFactTypeStatus["NEW_VERSION"] = 1] = "NEW_VERSION";
    ImportFactTypeStatus[ImportFactTypeStatus["NEW_FACT_TYPE"] = 2] = "NEW_FACT_TYPE";
    ImportFactTypeStatus[ImportFactTypeStatus["UPDATED_FACT_TYPE"] = 3] = "UPDATED_FACT_TYPE";
    ImportFactTypeStatus[ImportFactTypeStatus["ERROR"] = 4] = "ERROR";
})(exports.ImportFactTypeStatus || (exports.ImportFactTypeStatus = {}));
var ImportFactTypeStatus = exports.ImportFactTypeStatus;
(function (ValidationType) {
    ValidationType[ValidationType["WARNING"] = 0] = "WARNING";
    ValidationType[ValidationType["ERROR"] = 1] = "ERROR";
})(exports.ValidationType || (exports.ValidationType = {}));
var ValidationType = exports.ValidationType;
(function (PropertyDataType) {
    PropertyDataType[PropertyDataType["STRING"] = 0] = "STRING";
    PropertyDataType[PropertyDataType["BOOLEAN"] = 1] = "BOOLEAN";
    PropertyDataType[PropertyDataType["INTEGER"] = 2] = "INTEGER";
})(exports.PropertyDataType || (exports.PropertyDataType = {}));
var PropertyDataType = exports.PropertyDataType;
(function (PropertyDiscriminator) {
    PropertyDiscriminator[PropertyDiscriminator["SYSTEM"] = 0] = "SYSTEM";
    PropertyDiscriminator[PropertyDiscriminator["VIEW_GROUP"] = 1] = "VIEW_GROUP";
    PropertyDiscriminator[PropertyDiscriminator["USER"] = 2] = "USER";
})(exports.PropertyDiscriminator || (exports.PropertyDiscriminator = {}));
var PropertyDiscriminator = exports.PropertyDiscriminator;
(function (Property) {
    Property[Property["SYS_SEARCH_RESULT_MAX_SIZE"] = 0] = "SYS_SEARCH_RESULT_MAX_SIZE";
    Property[Property["SYS_DECISION_GRAPH_COLUMN_SPACING"] = 1] = "SYS_DECISION_GRAPH_COLUMN_SPACING";
    Property[Property["SYS_DECISION_GRAPH_DIRECTION"] = 2] = "SYS_DECISION_GRAPH_DIRECTION";
    Property[Property["SYS_DECISION_GRAPH_LAYER_SPACING"] = 3] = "SYS_DECISION_GRAPH_LAYER_SPACING";
    Property[Property["SYS_DECISION_GRAPH_MAX_SHAPE_WIDTH"] = 4] = "SYS_DECISION_GRAPH_MAX_SHAPE_WIDTH";
    Property[Property["SYS_DECISION_GRAPH_MIN_SHAPE_WIDTH"] = 5] = "SYS_DECISION_GRAPH_MIN_SHAPE_WIDTH";
    Property[Property["SYS_DECISION_GRAPH_MIN_DECISION_SHAPE_WIDTH"] = 6] = "SYS_DECISION_GRAPH_MIN_DECISION_SHAPE_WIDTH";
    Property[Property["SYS_DECISION_GRAPH_MAX_DECISION_SHAPE_WIDTH"] = 7] = "SYS_DECISION_GRAPH_MAX_DECISION_SHAPE_WIDTH";
    Property[Property["SYS_DECISION_GRAPH_TEXT_SPACING"] = 8] = "SYS_DECISION_GRAPH_TEXT_SPACING";
    Property[Property["SYS_SEND_MAIL_TO_ALL_USERS"] = 9] = "SYS_SEND_MAIL_TO_ALL_USERS";
    Property[Property["SYS_MAIL_PORT"] = 10] = "SYS_MAIL_PORT";
    Property[Property["SYS_MAIL_HOST"] = 11] = "SYS_MAIL_HOST";
    Property[Property["SYS_MAIL_FROM"] = 12] = "SYS_MAIL_FROM";
    Property[Property["SYS_DEFAULT_DEPLOYMENT_TYPE"] = 13] = "SYS_DEFAULT_DEPLOYMENT_TYPE";
    Property[Property["VG_IS_GENERATE_FULL_FACT_TYPE_NAME"] = 14] = "VG_IS_GENERATE_FULL_FACT_TYPE_NAME";
    Property[Property["USER_IS_SEND_MAIL_FOR_TASK"] = 15] = "USER_IS_SEND_MAIL_FOR_TASK";
    Property[Property["USER_IS_SEND_MAIL_FOR_NOTIFICATION"] = 16] = "USER_IS_SEND_MAIL_FOR_NOTIFICATION";
    Property[Property["VG_FAIL_NO_FACET"] = 17] = "VG_FAIL_NO_FACET";
    Property[Property["SYS_NUMBER_OF_AUTO_OPENED_RELATED_OBJECTS_IN_CONTEXT_DI"] = 18] = "SYS_NUMBER_OF_AUTO_OPENED_RELATED_OBJECTS_IN_CONTEXT_DI";
    Property[Property["SYS_MAX_NUMBER_OF_TESTCASES_DISPLAY"] = 19] = "SYS_MAX_NUMBER_OF_TESTCASES_DISPLAY";
    Property[Property["SYS_MAX_NUMBER_OF_TESTCASES_GENERATE"] = 20] = "SYS_MAX_NUMBER_OF_TESTCASES_GENERATE";
    Property[Property["SYS_RFV_MAX_NUMBER_OF_CELLS_PER_PAGE"] = 21] = "SYS_RFV_MAX_NUMBER_OF_CELLS_PER_PAGE";
    Property[Property["USER_SHOW_SPACES_IN_INPUT_VALUE"] = 22] = "USER_SHOW_SPACES_IN_INPUT_VALUE";
    Property[Property["SYS_ENVIRONMENT_NAME"] = 23] = "SYS_ENVIRONMENT_NAME";
    Property[Property["SYS_REPEATING_GROUP_SUPPORT"] = 24] = "SYS_REPEATING_GROUP_SUPPORT";
    Property[Property["SYS_CANDIDATE_ASSET_IN_REVISION"] = 25] = "SYS_CANDIDATE_ASSET_IN_REVISION";
    Property[Property["SYS_AUTOATICALLY_SHOW_ASSET_INFO"] = 26] = "SYS_AUTOATICALLY_SHOW_ASSET_INFO";
    Property[Property["SYS_DECISION_GRAPH_EXPANSION_ENABLED"] = 27] = "SYS_DECISION_GRAPH_EXPANSION_ENABLED";
    Property[Property["SYS_DECISION_GRAPH_EXPANSION_THRESHOLD"] = 28] = "SYS_DECISION_GRAPH_EXPANSION_THRESHOLD";
    Property[Property["USER_PIN_WHITEBOARD_PANE"] = 29] = "USER_PIN_WHITEBOARD_PANE";
    Property[Property["USER_PIN_ADDITIONAL_INFO_PANE"] = 30] = "USER_PIN_ADDITIONAL_INFO_PANE";
    Property[Property["USER_SHORT_DISPLAY_MODE_RFV"] = 31] = "USER_SHORT_DISPLAY_MODE_RFV";
    Property[Property["SYS_QUEUE_POLLING_TIME"] = 32] = "SYS_QUEUE_POLLING_TIME";
    Property[Property["SYS_IDLE_TIME"] = 33] = "SYS_IDLE_TIME";
    Property[Property["SYS_FT_NULL_IN_MSG_PLACEHOLDER"] = 34] = "SYS_FT_NULL_IN_MSG_PLACEHOLDER";
})(exports.Property || (exports.Property = {}));
var Property = exports.Property;
(function (AuditType) {
    AuditType[AuditType["IMPORT"] = 0] = "IMPORT";
    AuditType[AuditType["EXPORT"] = 1] = "EXPORT";
})(exports.AuditType || (exports.AuditType = {}));
var AuditType = exports.AuditType;
(function (ImpExpAuditState) {
    ImpExpAuditState[ImpExpAuditState["PASSED"] = 0] = "PASSED";
    ImpExpAuditState[ImpExpAuditState["FAILED"] = 1] = "FAILED";
})(exports.ImpExpAuditState || (exports.ImpExpAuditState = {}));
var ImpExpAuditState = exports.ImpExpAuditState;
(function (ValidationLevel) {
    ValidationLevel[ValidationLevel["DECISION_VIEW"] = 0] = "DECISION_VIEW";
    ValidationLevel[ValidationLevel["RULE_FAMILY_VIEW"] = 1] = "RULE_FAMILY_VIEW";
    ValidationLevel[ValidationLevel["RULE_ROW"] = 2] = "RULE_ROW";
})(exports.ValidationLevel || (exports.ValidationLevel = {}));
var ValidationLevel = exports.ValidationLevel;
(function (ValidationPrincipleCode) {
    ValidationPrincipleCode[ValidationPrincipleCode["P"] = 0] = "P";
    ValidationPrincipleCode[ValidationPrincipleCode["P1"] = 1] = "P1";
    ValidationPrincipleCode[ValidationPrincipleCode["P2"] = 2] = "P2";
    ValidationPrincipleCode[ValidationPrincipleCode["P3"] = 3] = "P3";
    ValidationPrincipleCode[ValidationPrincipleCode["P4"] = 4] = "P4";
    ValidationPrincipleCode[ValidationPrincipleCode["P5"] = 5] = "P5";
    ValidationPrincipleCode[ValidationPrincipleCode["P6"] = 6] = "P6";
    ValidationPrincipleCode[ValidationPrincipleCode["P7"] = 7] = "P7";
    ValidationPrincipleCode[ValidationPrincipleCode["P8"] = 8] = "P8";
    ValidationPrincipleCode[ValidationPrincipleCode["P9"] = 9] = "P9";
    ValidationPrincipleCode[ValidationPrincipleCode["P10"] = 10] = "P10";
    ValidationPrincipleCode[ValidationPrincipleCode["P11"] = 11] = "P11";
    ValidationPrincipleCode[ValidationPrincipleCode["P12"] = 12] = "P12";
    ValidationPrincipleCode[ValidationPrincipleCode["P13"] = 13] = "P13";
    ValidationPrincipleCode[ValidationPrincipleCode["P14"] = 14] = "P14";
})(exports.ValidationPrincipleCode || (exports.ValidationPrincipleCode = {}));
var ValidationPrincipleCode = exports.ValidationPrincipleCode;
(function (ExportStatus) {
    ExportStatus[ExportStatus["EXPORTED"] = 0] = "EXPORTED";
    ExportStatus[ExportStatus["DEPLOYED"] = 1] = "DEPLOYED";
    ExportStatus[ExportStatus["UNDEPLOYED"] = 2] = "UNDEPLOYED";
    ExportStatus[ExportStatus["REQUESTED"] = 3] = "REQUESTED";
    ExportStatus[ExportStatus["REJECTED"] = 4] = "REJECTED";
    ExportStatus[ExportStatus["FAILED"] = 5] = "FAILED";
})(exports.ExportStatus || (exports.ExportStatus = {}));
var ExportStatus = exports.ExportStatus;
(function (RecordType) {
    RecordType[RecordType["DV_ADDED"] = 0] = "DV_ADDED";
    RecordType[RecordType["DV_REMOVED"] = 1] = "DV_REMOVED";
    RecordType[RecordType["CREATED"] = 2] = "CREATED";
    RecordType[RecordType["RETIRED"] = 3] = "RETIRED";
    RecordType[RecordType["MOVED_VG"] = 4] = "MOVED_VG";
    RecordType[RecordType["FROZEN"] = 5] = "FROZEN";
    RecordType[RecordType["UNFROZEN"] = 6] = "UNFROZEN";
    RecordType[RecordType["RESTORED"] = 7] = "RESTORED";
    RecordType[RecordType["FLOW_ADDED"] = 8] = "FLOW_ADDED";
    RecordType[RecordType["FLOW_REMOVED"] = 9] = "FLOW_REMOVED";
    RecordType[RecordType["DEMOTE_TAG_TO_SNAPSHOT"] = 10] = "DEMOTE_TAG_TO_SNAPSHOT";
    RecordType[RecordType["PROMOTE_SNAPSHOT_TO_TAG"] = 11] = "PROMOTE_SNAPSHOT_TO_TAG";
    RecordType[RecordType["SYNC_TAG_WITH_RELEASE"] = 12] = "SYNC_TAG_WITH_RELEASE";
    RecordType[RecordType["DD_CREATED"] = 13] = "DD_CREATED";
    RecordType[RecordType["DD_REMOVED"] = 14] = "DD_REMOVED";
    RecordType[RecordType["DD_MODIFIED"] = 15] = "DD_MODIFIED";
})(exports.RecordType || (exports.RecordType = {}));
var RecordType = exports.RecordType;
(function (ErrorTypeDto) {
    ErrorTypeDto[ErrorTypeDto["PARSING_FILE"] = 0] = "PARSING_FILE";
    ErrorTypeDto[ErrorTypeDto["EMPTY_FILE"] = 1] = "EMPTY_FILE";
    ErrorTypeDto[ErrorTypeDto["formatting_date_added"] = 2] = "formatting_date_added";
    ErrorTypeDto[ErrorTypeDto["cell_operator"] = 3] = "cell_operator";
    ErrorTypeDto[ErrorTypeDto["FILE_FORMAT"] = 4] = "FILE_FORMAT";
    ErrorTypeDto[ErrorTypeDto["column_header"] = 5] = "column_header";
    ErrorTypeDto[ErrorTypeDto["whiteboard"] = 6] = "whiteboard";
    ErrorTypeDto[ErrorTypeDto["parse_int"] = 7] = "parse_int";
    ErrorTypeDto[ErrorTypeDto["not_valid"] = 8] = "not_valid";
    ErrorTypeDto[ErrorTypeDto["empty_cell"] = 9] = "empty_cell";
    ErrorTypeDto[ErrorTypeDto["LIMIT_EXCEEDED"] = 10] = "LIMIT_EXCEEDED";
    ErrorTypeDto[ErrorTypeDto["READING_ERROR"] = 11] = "READING_ERROR";
    ErrorTypeDto[ErrorTypeDto["EXTRACT_ERROR"] = 12] = "EXTRACT_ERROR";
    ErrorTypeDto[ErrorTypeDto["file_not_found"] = 13] = "file_not_found";
    ErrorTypeDto[ErrorTypeDto["FACT_TYPE_ALREADY_EXIST_BUT_NOT_APPROVED"] = 14] = "FACT_TYPE_ALREADY_EXIST_BUT_NOT_APPROVED";
    ErrorTypeDto[ErrorTypeDto["INVALID_FACT_TYPE"] = 15] = "INVALID_FACT_TYPE";
    ErrorTypeDto[ErrorTypeDto["DUPLICATE_FACT_TYPE"] = 16] = "DUPLICATE_FACT_TYPE";
    ErrorTypeDto[ErrorTypeDto["DYNAMIC_PROPERTY_TEMPLATE_MISSING"] = 17] = "DYNAMIC_PROPERTY_TEMPLATE_MISSING";
    ErrorTypeDto[ErrorTypeDto["QUALIFIER_TEMPLATE_MISSING"] = 18] = "QUALIFIER_TEMPLATE_MISSING";
    ErrorTypeDto[ErrorTypeDto["CUSTOM_METADATA_TEMPLATE_MISSING"] = 19] = "CUSTOM_METADATA_TEMPLATE_MISSING";
    ErrorTypeDto[ErrorTypeDto["VALUE_MAPPING_DEFINITION_MISSING"] = 20] = "VALUE_MAPPING_DEFINITION_MISSING";
    ErrorTypeDto[ErrorTypeDto["MODEL_DEFINITION_TEMPLATE_MISSING"] = 21] = "MODEL_DEFINITION_TEMPLATE_MISSING";
    ErrorTypeDto[ErrorTypeDto["MODEL_VERSION_MISSING"] = 22] = "MODEL_VERSION_MISSING";
    ErrorTypeDto[ErrorTypeDto["DOMAIN_TEMPLATE_MISSING"] = 23] = "DOMAIN_TEMPLATE_MISSING";
})(exports.ErrorTypeDto || (exports.ErrorTypeDto = {}));
var ErrorTypeDto = exports.ErrorTypeDto;
(function (batchStatus) {
    batchStatus[batchStatus["COMPLETED"] = 0] = "COMPLETED";
    batchStatus[batchStatus["STARTING"] = 1] = "STARTING";
    batchStatus[batchStatus["STARTED"] = 2] = "STARTED";
    batchStatus[batchStatus["STOPPING"] = 3] = "STOPPING";
    batchStatus[batchStatus["STOPPED"] = 4] = "STOPPED";
    batchStatus[batchStatus["FAILED"] = 5] = "FAILED";
    batchStatus[batchStatus["ABANDONED"] = 6] = "ABANDONED";
    batchStatus[batchStatus["UNKNOWN"] = 7] = "UNKNOWN";
})(exports.batchStatus || (exports.batchStatus = {}));
var batchStatus = exports.batchStatus;
(function (NodeDirectionType) {
    NodeDirectionType[NodeDirectionType["PROGRESSION"] = 0] = "PROGRESSION";
    NodeDirectionType[NodeDirectionType["BRANCH"] = 1] = "BRANCH";
    NodeDirectionType[NodeDirectionType["FULL_MERGE"] = 2] = "FULL_MERGE";
})(exports.NodeDirectionType || (exports.NodeDirectionType = {}));
var NodeDirectionType = exports.NodeDirectionType;
(function (ColumnTypeDto) {
    ColumnTypeDto[ColumnTypeDto["ASSET_TYPE"] = 0] = "ASSET_TYPE";
    ColumnTypeDto[ColumnTypeDto["ASSET_NAME"] = 1] = "ASSET_NAME";
    ColumnTypeDto[ColumnTypeDto["ASSET_VERSION"] = 2] = "ASSET_VERSION";
    ColumnTypeDto[ColumnTypeDto["ASSET_STATE"] = 3] = "ASSET_STATE";
    ColumnTypeDto[ColumnTypeDto["RELEASE"] = 4] = "RELEASE";
    ColumnTypeDto[ColumnTypeDto["RELEASE_ASSIGNMENT"] = 5] = "RELEASE_ASSIGNMENT";
    ColumnTypeDto[ColumnTypeDto["SUBMISSION_DATE"] = 6] = "SUBMISSION_DATE";
    ColumnTypeDto[ColumnTypeDto["REQUEST_FOR_DEPLOYMENT_DATE"] = 7] = "REQUEST_FOR_DEPLOYMENT_DATE";
    ColumnTypeDto[ColumnTypeDto["DEPLOYMENT_DATE"] = 8] = "DEPLOYMENT_DATE";
    ColumnTypeDto[ColumnTypeDto["EFFECTIVE_DATE"] = 9] = "EFFECTIVE_DATE";
    ColumnTypeDto[ColumnTypeDto["EXPIRATION_DATE"] = 10] = "EXPIRATION_DATE";
    ColumnTypeDto[ColumnTypeDto["CUSTOM_FIELD"] = 11] = "CUSTOM_FIELD";
    ColumnTypeDto[ColumnTypeDto["RELEASE_ELEMENT_APPROVED_DATE"] = 12] = "RELEASE_ELEMENT_APPROVED_DATE";
    ColumnTypeDto[ColumnTypeDto["RELEASE_ELEMENT_APPROVED_BY"] = 13] = "RELEASE_ELEMENT_APPROVED_BY";
    ColumnTypeDto[ColumnTypeDto["RELEASE_ELEMENT_COMPARE_STATUS"] = 14] = "RELEASE_ELEMENT_COMPARE_STATUS";
    ColumnTypeDto[ColumnTypeDto["BEFORE_CHANGE_DEPLOYMENT_DATE"] = 15] = "BEFORE_CHANGE_DEPLOYMENT_DATE";
    ColumnTypeDto[ColumnTypeDto["BEFORE_CHANGE_EFFECTIVE_DATE"] = 16] = "BEFORE_CHANGE_EFFECTIVE_DATE";
    ColumnTypeDto[ColumnTypeDto["BEFORE_CHANGE_EXPIRATION_DATE"] = 17] = "BEFORE_CHANGE_EXPIRATION_DATE";
    ColumnTypeDto[ColumnTypeDto["BEFORE_CHANGE_CUSTOM_FIELD"] = 18] = "BEFORE_CHANGE_CUSTOM_FIELD";
    ColumnTypeDto[ColumnTypeDto["IS_DEPLOYED_TO_PRODUCTION"] = 19] = "IS_DEPLOYED_TO_PRODUCTION";
    ColumnTypeDto[ColumnTypeDto["GROUP_ID"] = 20] = "GROUP_ID";
})(exports.ColumnTypeDto || (exports.ColumnTypeDto = {}));
var ColumnTypeDto = exports.ColumnTypeDto;
(function (deploymentDescriptorChangeType) {
    deploymentDescriptorChangeType[deploymentDescriptorChangeType["UNCHANGED"] = 0] = "UNCHANGED";
    deploymentDescriptorChangeType[deploymentDescriptorChangeType["ADDED"] = 1] = "ADDED";
    deploymentDescriptorChangeType[deploymentDescriptorChangeType["CHANGED"] = 2] = "CHANGED";
    deploymentDescriptorChangeType[deploymentDescriptorChangeType["DELETED"] = 3] = "DELETED";
})(exports.deploymentDescriptorChangeType || (exports.deploymentDescriptorChangeType = {}));
var deploymentDescriptorChangeType = exports.deploymentDescriptorChangeType;
(function (PermissionType) {
    PermissionType[PermissionType["BCD_DELETE"] = 0] = "BCD_DELETE";
    PermissionType[PermissionType["BCD_READ"] = 1] = "BCD_READ";
    PermissionType[PermissionType["BCD_UPDATE"] = 2] = "BCD_UPDATE";
    PermissionType[PermissionType["BCD_WRITE"] = 3] = "BCD_WRITE";
    PermissionType[PermissionType["BC_DELETE"] = 4] = "BC_DELETE";
    PermissionType[PermissionType["BC_READ"] = 5] = "BC_READ";
    PermissionType[PermissionType["BC_WRITE"] = 6] = "BC_WRITE";
    PermissionType[PermissionType["DEC_DELETE"] = 7] = "DEC_DELETE";
    PermissionType[PermissionType["DEC_READ"] = 8] = "DEC_READ";
    PermissionType[PermissionType["DEC_WRITE"] = 9] = "DEC_WRITE";
    PermissionType[PermissionType["EXPORT"] = 10] = "EXPORT";
    PermissionType[PermissionType["FTD_DELETE"] = 11] = "FTD_DELETE";
    PermissionType[PermissionType["FTD_READ"] = 12] = "FTD_READ";
    PermissionType[PermissionType["FTD_WRITE"] = 13] = "FTD_WRITE";
    PermissionType[PermissionType["FT_DELETE"] = 14] = "FT_DELETE";
    PermissionType[PermissionType["FT_READ"] = 15] = "FT_READ";
    PermissionType[PermissionType["FT_UPDATE"] = 16] = "FT_UPDATE";
    PermissionType[PermissionType["FT_WRITE"] = 17] = "FT_WRITE";
    PermissionType[PermissionType["GLS_READ"] = 18] = "GLS_READ";
    PermissionType[PermissionType["GLS_WRITE"] = 19] = "GLS_WRITE";
    PermissionType[PermissionType["IMPORT"] = 20] = "IMPORT";
    PermissionType[PermissionType["PERM_CREATE"] = 21] = "PERM_CREATE";
    PermissionType[PermissionType["PERM_FIND"] = 22] = "PERM_FIND";
    PermissionType[PermissionType["PERM_GRP_CREATE"] = 23] = "PERM_GRP_CREATE";
    PermissionType[PermissionType["PERM_GRP_DELETE"] = 24] = "PERM_GRP_DELETE";
    PermissionType[PermissionType["PERM_GRP_FIND"] = 25] = "PERM_GRP_FIND";
    PermissionType[PermissionType["PERM_GRP_UPDATE"] = 26] = "PERM_GRP_UPDATE";
    PermissionType[PermissionType["ROLE_CREATE"] = 27] = "ROLE_CREATE";
    PermissionType[PermissionType["ROLE_DELETE"] = 28] = "ROLE_DELETE";
    PermissionType[PermissionType["ROLE_FIND"] = 29] = "ROLE_FIND";
    PermissionType[PermissionType["ROLE_UPDATE"] = 30] = "ROLE_UPDATE";
    PermissionType[PermissionType["USER_CREATE"] = 31] = "USER_CREATE";
    PermissionType[PermissionType["USER_FIND"] = 32] = "USER_FIND";
    PermissionType[PermissionType["USER_UPDATE"] = 33] = "USER_UPDATE";
    PermissionType[PermissionType["VG_DELTE"] = 34] = "VG_DELTE";
    PermissionType[PermissionType["VG_READ"] = 35] = "VG_READ";
    PermissionType[PermissionType["VG_USR_READ"] = 36] = "VG_USR_READ";
    PermissionType[PermissionType["VG_USR_WRITE"] = 37] = "VG_USR_WRITE";
    PermissionType[PermissionType["VG_WRITE"] = 38] = "VG_WRITE";
    PermissionType[PermissionType["VIEW_DELETE"] = 39] = "VIEW_DELETE";
    PermissionType[PermissionType["VIEW_READ"] = 40] = "VIEW_READ";
    PermissionType[PermissionType["VIEW_WRITE"] = 41] = "VIEW_WRITE";
    PermissionType[PermissionType["WB_ANALYST"] = 42] = "WB_ANALYST";
    PermissionType[PermissionType["WB_READ"] = 43] = "WB_READ";
    PermissionType[PermissionType["WB_WRITE"] = 44] = "WB_WRITE";
    PermissionType[PermissionType["RQB_READ"] = 45] = "RQB_READ";
    PermissionType[PermissionType["RQB_WRITE"] = 46] = "RQB_WRITE";
    PermissionType[PermissionType["MCATEGORY_WRITE"] = 47] = "MCATEGORY_WRITE";
    PermissionType[PermissionType["MCATEGORY_READ"] = 48] = "MCATEGORY_READ";
    PermissionType[PermissionType["DEPLOY"] = 49] = "DEPLOY";
    PermissionType[PermissionType["AUDIT_READ"] = 50] = "AUDIT_READ";
    PermissionType[PermissionType["VPT_READ"] = 51] = "VPT_READ";
    PermissionType[PermissionType["VPT_UPDATE"] = 52] = "VPT_UPDATE";
    PermissionType[PermissionType["SP_UPDATE"] = 53] = "SP_UPDATE";
    PermissionType[PermissionType["TI_UPDATE"] = 54] = "TI_UPDATE";
    PermissionType[PermissionType["PERM_ACCESS"] = 55] = "PERM_ACCESS";
    PermissionType[PermissionType["PERM_READ_WRITE"] = 56] = "PERM_READ_WRITE";
    PermissionType[PermissionType["PERM_CREATE_OLD"] = 57] = "PERM_CREATE_OLD";
    PermissionType[PermissionType["PERM_REMOVE"] = 58] = "PERM_REMOVE";
    PermissionType[PermissionType["CARI_EXTRACT"] = 59] = "CARI_EXTRACT";
    PermissionType[PermissionType["ADMIN"] = 60] = "ADMIN";
    PermissionType[PermissionType["GLS_IMPORT"] = 61] = "GLS_IMPORT";
    PermissionType[PermissionType["GLS_EXPORT"] = 62] = "GLS_EXPORT";
    PermissionType[PermissionType["SETTINGS"] = 63] = "SETTINGS";
    PermissionType[PermissionType["SECURITY"] = 64] = "SECURITY";
    PermissionType[PermissionType["TSK_REASSIGN"] = 65] = "TSK_REASSIGN";
    PermissionType[PermissionType["TSK_CREATE"] = 66] = "TSK_CREATE";
    PermissionType[PermissionType["TSK_UPDATE"] = 67] = "TSK_UPDATE";
    PermissionType[PermissionType["BCD_MNG"] = 68] = "BCD_MNG";
    PermissionType[PermissionType["WF_UPDATE"] = 69] = "WF_UPDATE";
    PermissionType[PermissionType["DV_TO_VG_ASSOCIATE_APPROVE"] = 70] = "DV_TO_VG_ASSOCIATE_APPROVE";
    PermissionType[PermissionType["DV_TO_VG_ASSOCIATE_REQUEST"] = 71] = "DV_TO_VG_ASSOCIATE_REQUEST";
    PermissionType[PermissionType["DEPLOY_READ"] = 72] = "DEPLOY_READ";
    PermissionType[PermissionType["AD_HOC"] = 73] = "AD_HOC";
    PermissionType[PermissionType["VIEW_SUBMIT_TASK"] = 74] = "VIEW_SUBMIT_TASK";
    PermissionType[PermissionType["BCR_LEADER"] = 75] = "BCR_LEADER";
    PermissionType[PermissionType["SET_ON_HOLD"] = 76] = "SET_ON_HOLD";
    PermissionType[PermissionType["CANCEL_BCD"] = 77] = "CANCEL_BCD";
    PermissionType[PermissionType["SUB_TASK"] = 78] = "SUB_TASK";
    PermissionType[PermissionType["VIEW_ALL_WB"] = 79] = "VIEW_ALL_WB";
    PermissionType[PermissionType["ALLOW_DYN_SET_UPDATE"] = 80] = "ALLOW_DYN_SET_UPDATE";
    PermissionType[PermissionType["ALLOW_FORCE_REVALIDATE"] = 81] = "ALLOW_FORCE_REVALIDATE";
})(exports.PermissionType || (exports.PermissionType = {}));
var PermissionType = exports.PermissionType;
(function (ReportExportHandlerEnum) {
    ReportExportHandlerEnum[ReportExportHandlerEnum["FILE_SYSTEM_EXPORT_HANDLER"] = 0] = "FILE_SYSTEM_EXPORT_HANDLER";
    ReportExportHandlerEnum[ReportExportHandlerEnum["ANOTHER_TAB_EXPORT_HANDLER"] = 1] = "ANOTHER_TAB_EXPORT_HANDLER";
})(exports.ReportExportHandlerEnum || (exports.ReportExportHandlerEnum = {}));
var ReportExportHandlerEnum = exports.ReportExportHandlerEnum;
(function (signType) {
    signType[signType["INTERNAL"] = 0] = "INTERNAL";
    signType[signType["LOGICAL"] = 1] = "LOGICAL";
    signType[signType["EXTERNAL"] = 2] = "EXTERNAL";
})(exports.signType || (exports.signType = {}));
var signType = exports.signType;
(function (trimmedValueType) {
    trimmedValueType[trimmedValueType["ALLOWED_VALUE"] = 0] = "ALLOWED_VALUE";
    trimmedValueType[trimmedValueType["CELL_VALUE"] = 1] = "CELL_VALUE";
})(exports.trimmedValueType || (exports.trimmedValueType = {}));
var trimmedValueType = exports.trimmedValueType;
(function (revisionType) {
    revisionType[revisionType["ADD"] = 0] = "ADD";
    revisionType[revisionType["MOD"] = 1] = "MOD";
    revisionType[revisionType["DEL"] = 2] = "DEL";
})(exports.revisionType || (exports.revisionType = {}));
var revisionType = exports.revisionType;
(function (CompareType) {
    CompareType[CompareType["REJECT"] = 0] = "REJECT";
    CompareType[CompareType["LAST_APPROVE"] = 1] = "LAST_APPROVE";
    CompareType[CompareType["ORIGINAL"] = 2] = "ORIGINAL";
    CompareType[CompareType["VERSION"] = 3] = "VERSION";
    CompareType[CompareType["OTHER_VIEWS"] = 4] = "OTHER_VIEWS";
    CompareType[CompareType["CONFLICT"] = 5] = "CONFLICT";
})(exports.CompareType || (exports.CompareType = {}));
var CompareType = exports.CompareType;
(function (SankaResponse) {
    SankaResponse[SankaResponse["YEAH_MAN"] = 0] = "YEAH_MAN";
    SankaResponse[SankaResponse["DB_IS_MIA"] = 1] = "DB_IS_MIA";
})(exports.SankaResponse || (exports.SankaResponse = {}));
var SankaResponse = exports.SankaResponse;
(function (LogLevel) {
    LogLevel[LogLevel["TRACE"] = 0] = "TRACE";
    LogLevel[LogLevel["DEBUG"] = 1] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["FATAL"] = 5] = "FATAL";
})(exports.LogLevel || (exports.LogLevel = {}));
var LogLevel = exports.LogLevel;
(function (CountType) {
    CountType[CountType["MAX"] = 0] = "MAX";
    CountType[CountType["AVG"] = 1] = "AVG";
    CountType[CountType["ALL"] = 2] = "ALL";
})(exports.CountType || (exports.CountType = {}));
var CountType = exports.CountType;
(function (OperatorInclusionType) {
    OperatorInclusionType[OperatorInclusionType["ALL_EXCLUSIVE"] = 0] = "ALL_EXCLUSIVE";
    OperatorInclusionType[OperatorInclusionType["ALL_INCLUSIVE"] = 1] = "ALL_INCLUSIVE";
})(exports.OperatorInclusionType || (exports.OperatorInclusionType = {}));
var OperatorInclusionType = exports.OperatorInclusionType;
//# sourceMappingURL=wsdl_types.js.map