
export enum ErrorType {
	WARNING = 0,
	NON_DEPLOY_FT = 1,
	UN_KNOWN = 2,
	ASSET_NOT_EXIST = 3,
	NOT_DRAFT = 4,
	In_USE = 5,
	NO_DD_IN_VG_HIERARCHY = 6,
	DUPLICATE_NAME = 7,
	EXTRACT_CRF_FILE = 8,
	EXPORT_ERROR = 9,
	PROCESS_IS_RUNNING_ASYNC = 10,
	OBJECT_NOT_IN_LATEST_STATE = 11,
	FILE_NOT_FOUND = 12,
	VG_NOT_AUTHORIZED = 13,
	SAME_GLOSSARY = 14,
	ROOT_VG = 15,
	CHILD_VG_TO_PARENT_VG = 16,
	PARENT_VG_TO_CHILD_VG = 17,
	RECURSIVE_FORMULA = 18,
	DIRTY_TASK_TRANSITION = 19,
	RFV_ALREADY_IN_DV = 20,
	FILE_OVER_SIZE = 21,
	TASK_IS_ON_HOLD = 22,
	STATUS_IS_NOT_READY = 23,
	RFV_WITH_DRAFT_FT = 24,
	OPERATION_NOT_SUPPORTED_FOR_ENTITY = 25,
	DEP_DESC_NOT_SYNC = 26,
	JOB_NOT_RUNNING = 27
}
export enum AuditStyle {
	NONE = 0,
	ENVERS = 1,
	AUDIT_LOG = 2
}
export enum Operator {
}
export enum DataType {
	AMOUNT = 0,
	CODE = 1,
	DATE = 2,
	DATE_TIME = 3,
	IDENTIFIER = 4,
	INDICATOR = 5,
	NAME = 6,
	NUMERIC = 7,
	PERCENT = 8,
	QUANTITY = 9,
	TEXT = 10,
	LIST = 11,
	CONCLUSION = 12,
	CONCLUSION_LIST = 13,
	DAY = 14,
	BASIS_POINTS = 15,
	MONTH_YEAR = 16,
	MONTH = 17,
	YEAR = 18,
	ENUMERATOR = 19
}
export enum ExternalSetStructureType {
	LIST = 0,
	HIERARCHY = 1
}
export enum ApprovalStrategyType {
	NONE = 0,
	ALL = 1,
	ANY = 2
}
export enum VoterActionType {
	APPROVE = 0,
	REJECT = 1
}
export enum AssetState {
	DRAFT = 0,
	CANDIDATE = 1,
	APPROVED = 2,
	REJECTED = 3,
	RETIRED = 4
}
export enum VersionInc {
	MAJOR = 0,
	MINOR = 1,
	NON = 2
}
export enum WorkflowStatus {
	NEW = 0,
	IN_PROGRESS = 1,
	COMPLETED = 2
}
export enum TaskWorkflowProperties {
	CONFLICT = 0,
	RESOLVE_CONFLICT = 1,
	NON_DEPLOY_FT = 2,
	RESOLVE_NONDEPLOY_FT = 3,
	WARNING = 4,
	RESOLVE_WARNING = 5,
	OWNER_TASK_ID = 6
}
export enum RowOperation {
	NEW = 0,
	UPDATED = 1,
	DELETED = 2
}
export enum PullRequestChangeType {
	ASSET_ADDED = 0,
	ASSET_REMOVED = 1,
	DEPLOYMENT_DESCRIPTOR_CHANGED = 2,
	DEPLOYMENT_DESCRIPTOR_ADDED = 3,
	DEPLOYMENT_DESCRIPTOR_REMOVED = 4
}
export enum pullRequestType {
	AD_HOC = 0,
	FULL_MERGE = 1,
	PARTIAL_MERGE = 2
}
export enum PullRequestStatus {
	DRAFT = 0,
	CANDIDATE = 1,
	APPROVED = 2
}
export enum TaskType {
	BCD_TASK = 0,
	FT_TASK = 1,
	BCD_SUB_TASK = 2,
	INFO = 3,
	EXPORT_TASK = 4,
	DV_TO_VG_ASSOC_TASK = 5,
	EXTENSION = 6,
	IMPORT_TASK = 7,
	OWNER_TASK = 8
}
export enum Priority {
	HIGH = 0,
	NORMAL = 1,
	LOW = 2
}
export enum StateStatus {
	WAITING_FOR_APPROVAL = 0,
	REJECTED = 1,
	APPROVED = 2
}
export enum ExpressionType {
	SIMPLE = 0,
	COMPLEX = 1
}
export enum ChangedStatus {
	UNCHANGED = 0,
	DELETED = 1
}
export enum ModelMappingStatus {
	DRAFT = 0,
	CANDIDATE = 1,
	APPROVED = 2
}
export enum ReleaseType {
	RELEASE = 0,
	TAG = 1,
	SNAPSHOT_TAG = 2
}
export enum DomainType {
	ANY_VALUE = 0,
	RANGE = 1,
	REGULAR_SET = 2,
	DYNAMIC_SET = 3,
	EXTERNAL_SET = 4
}
export enum EntityStatus {
	DISABLED = 0,
	RETIRED = 1,
	DEPRECATED = 2,
	ENABLED = 3
}
export enum FactTypeFlag {
}
export enum PrimitiveDataType {
	DATE = 0,
	DATE_TIME = 1,
	NUMERIC = 2,
	TEXT = 3,
	LIST = 4,
	CONCLUSION = 5,
	CONCLUSION_LIST = 6,
	BASIS_POINTS = 7,
	MONTH_YEAR = 8,
	NON_SENSITIVE_TEXT = 9,
	ENUMERATOR = 10,
	INTEGER = 11
}
export enum QueryParameterDefinitionType {
	NONE = 0,
	FACT_TYPE_PARAM = 1,
	EXTERNAL_SET_PARAM = 2
}
export enum OperandType {
}
export enum GlossaryArtifactType {
	FACT_TYPE = 0,
	LINK = 1,
	ALIAS = 2
}
export enum ExternalSetFindLevel {
}
export enum RepoQueryJunctionType {
	CONJUNCTION = 0,
	DISJUNCTION = 1,
	SUBTRACTION = 2
}
export enum ImportFactTypeStatus {
	UNCHANGED = 0,
	NEW_VERSION = 1,
	NEW_FACT_TYPE = 2,
	UPDATED_FACT_TYPE = 3,
	ERROR = 4
}
export enum ValidationType {
	WARNING = 0,
	ERROR = 1
}
export enum PropertyDataType {
	STRING = 0,
	BOOLEAN = 1,
	INTEGER = 2
}
export enum PropertyDiscriminator {
	SYSTEM = 0,
	VIEW_GROUP = 1,
	USER = 2
}
export enum Property {
	SYS_SEARCH_RESULT_MAX_SIZE = 0,
	SYS_DECISION_GRAPH_COLUMN_SPACING = 1,
	SYS_DECISION_GRAPH_DIRECTION = 2,
	SYS_DECISION_GRAPH_LAYER_SPACING = 3,
	SYS_DECISION_GRAPH_MAX_SHAPE_WIDTH = 4,
	SYS_DECISION_GRAPH_MIN_SHAPE_WIDTH = 5,
	SYS_DECISION_GRAPH_MIN_DECISION_SHAPE_WIDTH = 6,
	SYS_DECISION_GRAPH_MAX_DECISION_SHAPE_WIDTH = 7,
	SYS_DECISION_GRAPH_TEXT_SPACING = 8,
	SYS_SEND_MAIL_TO_ALL_USERS = 9,
	SYS_MAIL_PORT = 10,
	SYS_MAIL_HOST = 11,
	SYS_MAIL_FROM = 12,
	SYS_DEFAULT_DEPLOYMENT_TYPE = 13,
	VG_IS_GENERATE_FULL_FACT_TYPE_NAME = 14,
	USER_IS_SEND_MAIL_FOR_TASK = 15,
	USER_IS_SEND_MAIL_FOR_NOTIFICATION = 16,
	VG_FAIL_NO_FACET = 17,
	SYS_NUMBER_OF_AUTO_OPENED_RELATED_OBJECTS_IN_CONTEXT_DI = 18,
	SYS_MAX_NUMBER_OF_TESTCASES_DISPLAY = 19,
	SYS_MAX_NUMBER_OF_TESTCASES_GENERATE = 20,
	SYS_RFV_MAX_NUMBER_OF_CELLS_PER_PAGE = 21,
	USER_SHOW_SPACES_IN_INPUT_VALUE = 22,
	SYS_ENVIRONMENT_NAME = 23,
	SYS_REPEATING_GROUP_SUPPORT = 24,
	SYS_CANDIDATE_ASSET_IN_REVISION = 25,
	SYS_AUTOATICALLY_SHOW_ASSET_INFO = 26,
	SYS_DECISION_GRAPH_EXPANSION_ENABLED = 27,
	SYS_DECISION_GRAPH_EXPANSION_THRESHOLD = 28,
	USER_PIN_WHITEBOARD_PANE = 29,
	USER_PIN_ADDITIONAL_INFO_PANE = 30,
	USER_SHORT_DISPLAY_MODE_RFV = 31,
	SYS_QUEUE_POLLING_TIME = 32,
	SYS_IDLE_TIME = 33,
	SYS_FT_NULL_IN_MSG_PLACEHOLDER = 34
}
export enum AuditType {
	IMPORT = 0,
	EXPORT = 1
}
export enum ImpExpAuditState {
	PASSED = 0,
	FAILED = 1
}
export enum ValidationLevel {
	DECISION_VIEW = 0,
	RULE_FAMILY_VIEW = 1,
	RULE_ROW = 2
}
export enum ValidationPrincipleCode {
	P = 0,
	P1 = 1,
	P2 = 2,
	P3 = 3,
	P4 = 4,
	P5 = 5,
	P6 = 6,
	P7 = 7,
	P8 = 8,
	P9 = 9,
	P10 = 10,
	P11 = 11,
	P12 = 12,
	P13 = 13,
	P14 = 14
}
export enum ExportStatus {
	EXPORTED = 0,
	DEPLOYED = 1,
	UNDEPLOYED = 2,
	REQUESTED = 3,
	REJECTED = 4,
	FAILED = 5
}
export enum RecordType {
	DV_ADDED = 0,
	DV_REMOVED = 1,
	CREATED = 2,
	RETIRED = 3,
	MOVED_VG = 4,
	FROZEN = 5,
	UNFROZEN = 6,
	RESTORED = 7,
	FLOW_ADDED = 8,
	FLOW_REMOVED = 9,
	DEMOTE_TAG_TO_SNAPSHOT = 10,
	PROMOTE_SNAPSHOT_TO_TAG = 11,
	SYNC_TAG_WITH_RELEASE = 12,
	DD_CREATED = 13,
	DD_REMOVED = 14,
	DD_MODIFIED = 15
}
export enum ErrorTypeDto {
	PARSING_FILE = 0,
	EMPTY_FILE = 1,
	formatting_date_added = 2,
	cell_operator = 3,
	FILE_FORMAT = 4,
	column_header = 5,
	whiteboard = 6,
	parse_int = 7,
	not_valid = 8,
	empty_cell = 9,
	LIMIT_EXCEEDED = 10,
	READING_ERROR = 11,
	EXTRACT_ERROR = 12,
	file_not_found = 13,
	FACT_TYPE_ALREADY_EXIST_BUT_NOT_APPROVED = 14,
	INVALID_FACT_TYPE = 15,
	DUPLICATE_FACT_TYPE = 16,
	DYNAMIC_PROPERTY_TEMPLATE_MISSING = 17,
	QUALIFIER_TEMPLATE_MISSING = 18,
	CUSTOM_METADATA_TEMPLATE_MISSING = 19,
	VALUE_MAPPING_DEFINITION_MISSING = 20,
	MODEL_DEFINITION_TEMPLATE_MISSING = 21,
	MODEL_VERSION_MISSING = 22,
	DOMAIN_TEMPLATE_MISSING = 23
}
export enum batchStatus {
	COMPLETED = 0,
	STARTING = 1,
	STARTED = 2,
	STOPPING = 3,
	STOPPED = 4,
	FAILED = 5,
	ABANDONED = 6,
	UNKNOWN = 7
}
export enum NodeDirectionType {
	PROGRESSION = 0,
	BRANCH = 1,
	FULL_MERGE = 2
}
export enum ColumnTypeDto {
	ASSET_TYPE = 0,
	ASSET_NAME = 1,
	ASSET_VERSION = 2,
	ASSET_STATE = 3,
	RELEASE = 4,
	RELEASE_ASSIGNMENT = 5,
	SUBMISSION_DATE = 6,
	REQUEST_FOR_DEPLOYMENT_DATE = 7,
	DEPLOYMENT_DATE = 8,
	EFFECTIVE_DATE = 9,
	EXPIRATION_DATE = 10,
	CUSTOM_FIELD = 11,
	RELEASE_ELEMENT_APPROVED_DATE = 12,
	RELEASE_ELEMENT_APPROVED_BY = 13,
	RELEASE_ELEMENT_COMPARE_STATUS = 14,
	BEFORE_CHANGE_DEPLOYMENT_DATE = 15,
	BEFORE_CHANGE_EFFECTIVE_DATE = 16,
	BEFORE_CHANGE_EXPIRATION_DATE = 17,
	BEFORE_CHANGE_CUSTOM_FIELD = 18,
	IS_DEPLOYED_TO_PRODUCTION = 19,
	GROUP_ID = 20
}
export enum deploymentDescriptorChangeType {
	UNCHANGED = 0,
	ADDED = 1,
	CHANGED = 2,
	DELETED = 3
}
export enum PermissionType {
	BCD_DELETE = 0,
	BCD_READ = 1,
	BCD_UPDATE = 2,
	BCD_WRITE = 3,
	BC_DELETE = 4,
	BC_READ = 5,
	BC_WRITE = 6,
	DEC_DELETE = 7,
	DEC_READ = 8,
	DEC_WRITE = 9,
	EXPORT = 10,
	FTD_DELETE = 11,
	FTD_READ = 12,
	FTD_WRITE = 13,
	FT_DELETE = 14,
	FT_READ = 15,
	FT_UPDATE = 16,
	FT_WRITE = 17,
	GLS_READ = 18,
	GLS_WRITE = 19,
	IMPORT = 20,
	PERM_CREATE = 21,
	PERM_FIND = 22,
	PERM_GRP_CREATE = 23,
	PERM_GRP_DELETE = 24,
	PERM_GRP_FIND = 25,
	PERM_GRP_UPDATE = 26,
	ROLE_CREATE = 27,
	ROLE_DELETE = 28,
	ROLE_FIND = 29,
	ROLE_UPDATE = 30,
	USER_CREATE = 31,
	USER_FIND = 32,
	USER_UPDATE = 33,
	VG_DELTE = 34,
	VG_READ = 35,
	VG_USR_READ = 36,
	VG_USR_WRITE = 37,
	VG_WRITE = 38,
	VIEW_DELETE = 39,
	VIEW_READ = 40,
	VIEW_WRITE = 41,
	WB_ANALYST = 42,
	WB_READ = 43,
	WB_WRITE = 44,
	RQB_READ = 45,
	RQB_WRITE = 46,
	MCATEGORY_WRITE = 47,
	MCATEGORY_READ = 48,
	DEPLOY = 49,
	AUDIT_READ = 50,
	VPT_READ = 51,
	VPT_UPDATE = 52,
	SP_UPDATE = 53,
	TI_UPDATE = 54,
	PERM_ACCESS = 55,
	PERM_READ_WRITE = 56,
	PERM_CREATE_OLD = 57,
	PERM_REMOVE = 58,
	CARI_EXTRACT = 59,
	ADMIN = 60,
	GLS_IMPORT = 61,
	GLS_EXPORT = 62,
	SETTINGS = 63,
	SECURITY = 64,
	TSK_REASSIGN = 65,
	TSK_CREATE = 66,
	TSK_UPDATE = 67,
	BCD_MNG = 68,
	WF_UPDATE = 69,
	DV_TO_VG_ASSOCIATE_APPROVE = 70,
	DV_TO_VG_ASSOCIATE_REQUEST = 71,
	DEPLOY_READ = 72,
	AD_HOC = 73,
	VIEW_SUBMIT_TASK = 74,
	BCR_LEADER = 75,
	SET_ON_HOLD = 76,
	CANCEL_BCD = 77,
	SUB_TASK = 78,
	VIEW_ALL_WB = 79,
	ALLOW_DYN_SET_UPDATE = 80,
	ALLOW_FORCE_REVALIDATE = 81
}
export enum ReportExportHandlerEnum {
	FILE_SYSTEM_EXPORT_HANDLER = 0,
	ANOTHER_TAB_EXPORT_HANDLER = 1
}
export enum signType {
	INTERNAL = 0,
	LOGICAL = 1,
	EXTERNAL = 2
}
export enum trimmedValueType {
	ALLOWED_VALUE = 0,
	CELL_VALUE = 1
}
export enum revisionType {
	ADD = 0,
	MOD = 1,
	DEL = 2
}
export enum CompareType {
	REJECT = 0,
	LAST_APPROVE = 1,
	ORIGINAL = 2,
	VERSION = 3,
	OTHER_VIEWS = 4,
	CONFLICT = 5
}
export enum SankaResponse {
	YEAH_MAN = 0,
	DB_IS_MIA = 1
}
export enum LogLevel {
	TRACE = 0,
	DEBUG = 1,
	INFO = 2,
	WARN = 3,
	ERROR = 4,
	FATAL = 5
}
export enum CountType {
	MAX = 0,
	AVG = 1,
	ALL = 2
}
export enum OperatorInclusionType {
	ALL_EXCLUSIVE = 0,
	ALL_INCLUSIVE = 1
}
export interface BdmsExceptionDetails {
	errMessage: string;
	errCode: string;
	errType: ErrorType;
	errTypeSpecified: boolean;
}
export interface ExportDto {
	fileContent: number[];
	extension: string;
}
export interface AttributeAllowedValue {
	value: string;
	displayValue: string;
}
export interface IdTypeEntity {
	entityId: number;
	entityIdSpecified: boolean;
	entityType: EntityType;
	name: string;
}
export interface EntityType extends AbstractEntity {
	name: string;
	entityClass: string;
	parent: EntityType;
	auditType: AuditStyle;
	auditTypeSpecified: boolean;
	camelCasedName: string;
	displayName: string;
}
export interface AbstractEntity {
	id: number;
	idSpecified: boolean;
}
export interface RepoQueryObjectTypeMeta extends AbstractEntity {
	objectType: EntityType;
	objectClass: string;
	basicAliases: string[];
	projection: string[];
	attributes: RepoQueryAttributeMeta[];
}
export interface RepoQueryAttributeMeta extends AbstractEntity {
	text: string;
	propertyMappings: string[];
	propertyMetaDataMappings: string[];
	joinTableAliases: string[];
	type: AttributeType;
	isQualifierOnly: boolean;
	isCojunctionPropertyMapping: boolean;
	isDefaultFilter: boolean;
	subQuery: SubQueryAttributeMeta;
	parentAttributes: RepoQueryAttributeMeta[];
	joinOn: string;
}
export interface AttributeType extends AbstractEntity {
	name: string;
	validOperators: Operator[];
	allowedValues: AttributeAllowedValue[];
}
export interface SubQueryAttributeMeta extends AbstractEntity {
	propertyMapping: string;
	propertyProjection: string;
	clazz: string;
	outerQueryOperator: Operator;
	outerQueryOperatorSpecified: boolean;
	joinTableAliases: string[];
	propertyMappings: string[];
}
export interface QueryParameterInstance extends AbstractEntity {
	queryParameterDefinition: QueryParameterDefinition;
	value: string;
}
export interface QueryParameterDefinition extends AbstractEntity {
	name: string;
	description: string;
	defaultValue: string;
	isInUse: boolean;
	queryParameterDefinitionType: QueryParameterDefinitionType;
	queryParameterDefinitionTypeSpecified: boolean;
	factType: FactType;
	externalSetInstance: ExternalSetInstance;
}
export interface FactType extends Asset {
	businessFriendlyName: string;
	displayFormat: Format;
	factAllowedValues: Domain;
	factDomain: FactDomain;
	factTypeDefinition: FactTypeDefinition;
	flags: FactTypeFlag[];
	formula: Formula;
	isDeployable: boolean;
	isDeployableSpecified: boolean;
	isFormula: boolean;
	isList: boolean;
	isListSpecified: boolean;
	notes: Note[];
	testValues: string[];
	validationSign: string;
}
export interface Asset extends ExtendableEntity {
	approvedBy: User;
	approvedDate: Date;
	approvedDateSpecified: boolean;
	createdBy: User;
	createdDate: Date;
	createdDateSpecified: boolean;
	editNumber: number;
	externalSign: string;
	internalSign: string;
	isLatestVersion: boolean;
	logicalSign: string;
	name: string;
	state: AssetState;
	stateSpecified: boolean;
	timeStamp: number;
	timeStampSpecified: boolean;
	version: Version;
}
export interface ExtendableEntity extends AbstractEntity {
	dp: DynamicProperty[];
}
export interface DynamicProperty extends AbstractEntity {
	template: DynamicPropertyTemplate;
	value: string;
}
export interface DynamicPropertyTemplate extends AbstractEntity {
	identifierName: string;
	name: string;
	entityStatus: EntityStatus;
	entityStatusSpecified: boolean;
	domain: Domain;
	displayFormat: Format;
	defaultValue: string;
}
export interface Domain extends AbstractEntity {
	domainType: DomainType;
	domainTypeSpecified: boolean;
	dataType: DataType;
	dataTypeSpecified: boolean;
	format: string;
	required: boolean;
	ranges: Range[];
	domainValues: DomainValue[];
	name: string;
	isTemplate: boolean;
	isDepricated: boolean;
	template: Domain;
	ownerName: string;
	glossaries: Glossary[];
	isLocal: boolean;
	externalSetInstance: ExternalSetInstance;
	length: number;
	lengthSpecified: boolean;
	regex: string;
	regexMsg: string;
}
export interface Range {
	endValue: string;
	endValueIncluded: boolean;
	endValueIncludedSpecified: boolean;
	startValue: string;
	startValueIncluded: boolean;
	startValueIncludedSpecified: boolean;
}
export interface DomainValue {
	val: string;
}
export interface Glossary extends AbstractEntity {
	name: string;
	autoGenerateName: boolean;
	autoGenerateNameSpecified: boolean;
	qualifiers: Qualifier[];
	customMetadata: CustomMetadataElement[];
	domainTemplates: Domain[];
}
export interface Qualifier extends AbstractEntity {
	name: string;
	qualifierValues: QualifierValue[];
	qualifierPosition: number;
	qualifierPositionSpecified: boolean;
	prefixDelimiter: string;
	postfixDelimiter: string;
}
export interface QualifierValue extends AbstractEntity {
	value: string;
}
export interface CustomMetadataElement extends AbstractEntity {
	name: string;
	required: boolean;
	requiredSpecified: boolean;
}
export interface ExternalSetInstance extends AbstractEntity {
	name: string;
	description: string;
	lastModified: Date;
	lastModifiedSpecified: boolean;
	isActive: boolean;
	dataType: DataType;
	dataTypeSpecified: boolean;
	provider: ExternalSetDefinition;
	viewGroup: ViewGroup;
	props: ExternalSetPropData[];
}
export interface ExternalSetDefinition extends AbstractEntity {
	identifier: string;
	name: string;
	loaded: boolean;
	structureType: ExternalSetStructureType;
	structureTypeSpecified: boolean;
	properties: ExternalSetPropDesc[];
}
export interface ExternalSetPropDesc extends AbstractEntity {
	propertyDescriptor: PropertyDescriptor;
}
export interface PropertyDescriptor extends AbstractEntity {
	name: string;
	dataType: DataType;
	dataTypeSpecified: boolean;
	optional: boolean;
}
export interface ViewGroup extends ExtendableEntity {
	releases: Release[];
	facet: ViewGroupFacet;
	name: string;
	viewGroupChildren: ViewGroup[];
	path: string;
	users: User[];
	userRoles: UserRole[];
	defaultBcdManager: User;
	glossary: Glossary;
	isHasDecisionViews: boolean;
	hasDescendants: boolean;
}
export interface Release extends ExtendableEntity {
	releaseType: ReleaseType;
	releaseTypeSpecified: boolean;
	name: string;
	description: string;
	targetReleaseDate: Date;
	targetReleaseDateSpecified: boolean;
	ownersFlowApprovalStrategy: OwnersFlowApprovalStrategy;
	creationDate: Date;
	creationDateSpecified: boolean;
	creator: User;
	releaseDecisionViews: ReleaseDecisionView[];
	releaseRuleFlows: ReleaseRuleFlow[];
	isFrozen: boolean;
	isRetired: boolean;
	isModifiedSinceExport: boolean;
	branchedFrom: Release;
	isEditableByUser: boolean;
	internalSign: string;
}
export interface OwnersFlowApprovalStrategy extends AbstractEntity {
	owners: Owner[];
	approvalStrategyType: ApprovalStrategyType;
	approvalStrategyTypeSpecified: boolean;
	distinctUser: boolean;
}
export interface Owner extends AbstractEntity {
	user: User;
	responsibility: string;
}
export interface User extends AbstractEntity {
	name: string;
	displayName: string;
	isActive: boolean;
	mailAddress: string;
	userRoles: UserRole[];
}
export interface UserRole extends AbstractEntity {
	role: Role;
	startDate: Date;
	startDateSpecified: boolean;
	endDate: Date;
	endDateSpecified: boolean;
}
export interface Role extends AbstractEntity {
	name: string;
	permissionGroups: PermissionGroup[];
	userRoles: UserRole[];
}
export interface PermissionGroup extends AbstractEntity {
	name: string;
	permissions: Permission[];
	roles: Role[];
}
export interface Permission extends AbstractEntity {
	name: string;
	description: string;
}
export interface ReleaseDecisionView extends AbstractEntity {
	decisionView: DecisionView;
	effectiveDate: Date;
	effectiveDateSpecified: boolean;
	expirationDate: Date;
	expirationDateSpecified: boolean;
}
export interface DecisionView extends Asset {
	decisionViewViewGroups: DecisionViewViewGroup[];
	view: View;
	decision: Decision;
	notes: Note[];
	validationSign: string;
	repeatingGroupHead: RepeatingGroup;
}
export interface DecisionViewViewGroup extends AbstractEntity {
	viewGroup: ViewGroup;
}
export interface View extends ExtendableEntity {
	name: string;
}
export interface Decision extends AbstractEntity {
	factTypeDefinition: FactTypeDefinition;
	verb: Verb;
}
export interface FactTypeDefinition extends AssetDefinition {
	fullFactTypeName: string;
	latestBusinessFriendlyName: string;
	description: string;
	businessConcept: BusinessConcept;
	atomicFactType: string;
	qualifiers: QualifierInstance[];
	modelMappings: ModelMapping[];
	customMetadataInstances: CustomMetadataInstance[];
	repeatingGroupFactTypeDefinitions: RepeatingGroupFactTypeDefinition[];
}
export interface AssetDefinition extends AbstractEntity {
}
export interface BusinessConcept extends ExtendableEntity {
	name: string;
	businessConcepts: BusinessConcept[];
	path: string;
}
export interface QualifierInstance extends AbstractEntity {
	qualifier: Qualifier;
	qualifierValue: QualifierValue;
}
export interface ModelMapping extends ExtendableEntity {
	modelDefinition: ModelDefinition;
	modelVersions: ModelVersion[];
	info: string;
	mappingCode: string;
	ownersFlowState: OwnersFlowState;
	changedStatus: ChangedStatus;
	changedStatusSpecified: boolean;
	modelMappingStatus: ModelMappingStatus;
	modelMappingStatusSpecified: boolean;
	valueMappings: ValueMapping[];
	logicalSign: string;
}
export interface ModelDefinition extends AbstractEntity {
	targetModelName: string;
	ownersFlowApprovalStrategy: OwnersFlowApprovalStrategy;
	modelVersions: ModelVersion[];
	modelDefinitionCustomPropertyTemplates: ModelDefinitionCustomPropertyTemplate[];
	isModelDefinitionInUse: boolean;
}
export interface ModelVersion extends AbstractEntity {
	version: string;
	frozen: boolean;
}
export interface ModelDefinitionCustomPropertyTemplate extends AbstractEntity {
	dynamicPropertyTemplate: DynamicPropertyTemplate;
}
export interface OwnersFlowState extends AbstractEntity {
	ownerVotes: OwnerVote[];
	workflowStatus: StateStatus;
	workflowStatusSpecified: boolean;
	entityType: EntityType;
	requestor: User;
	creationDate: Date;
	creationDateSpecified: boolean;
	statusNote: string;
	bcdTasks: BcdTask[];
	ownersFlowApprovalStrategy: OwnersFlowApprovalStrategy;
}
export interface OwnerVote extends AbstractEntity {
	user: User;
	message: string;
	actionType: VoterActionType;
	actionTypeSpecified: boolean;
	approvalDate: Date;
	approvalDateSpecified: boolean;
}
export interface BcdTask extends ExtendableEntity {
	name: string;
	freeText: string;
	taskType: TaskType;
	taskTypeSpecified: boolean;
	priority: Priority;
	prioritySpecified: boolean;
	dueDate: Date;
	dueDateSpecified: boolean;
	assignedDate: Date;
	assignedDateSpecified: boolean;
	completedDate: Date;
	completedDateSpecified: boolean;
	read: boolean;
	note: string;
	done: boolean;
	tranDetails: string;
	onHold: boolean;
	status: string;
	assignedBy: User;
	owner: User;
	originalAssignee: User;
	whiteboard: Whiteboard;
	assets: WbAsset[];
	taskWorkflowInst: TaskWorkflowInst;
	childrenTask: BcdTask[];
	properties: BcdTaskEntry[];
	deploymentType: DeploymentType;
	statusNote: string;
	taskLinks: TaskLink[];
	extensionType: string;
	linkQueryParameters: KeyValueDto[];
	entityTypeUI: EntityType;
	project: Project;
	branch: Branch;
}
export interface Whiteboard extends AbstractEntity {
	active: boolean;
	analyst: boolean;
	bcdTaskWorkflow: TaskWorkflowTmpl;
	editable: boolean;
	ftTaskWorkflow: TaskWorkflowTmpl;
	name: string;
	owner: User;
	release: Release;
	viewGroup: ViewGroup;
}
export interface TaskWorkflowTmpl extends AbstractEntity {
	workflow: Workflow;
	stateUsers: StateUser[];
	notificationUsers: NotificationUser[];
}
export interface Workflow extends AbstractEntity {
	name: string;
	objectType: EntityType;
	viewGroup: ViewGroup;
	transitions: Transition[];
	stateRoles: StateRole[];
	startState: State;
	distinctionList: State[];
	layout: string;
	active: boolean;
	submissionList: boolean;
	allowGroupQueue: boolean;
}
export interface Transition extends AbstractEntity {
	state: State;
	nextState: State;
	actionName: string;
	resultAssetState: AssetState;
	resultAssetStateSpecified: boolean;
	nextTaskDefaultTitle: string;
	nextTaskDefaultFreeText: string;
}
export interface State extends AbstractEntity {
	name: string;
}
export interface StateRole extends AbstractEntity {
	state: State;
	role: Role;
}
export interface StateUser extends AbstractEntity {
	stateRole: StateRole;
	user: User;
	assignedToGroup: boolean;
}
export interface NotificationUser extends AbstractEntity {
	transition: Transition;
	users: User[];
}
export interface WbAsset extends AbstractEntity {
	asset: Asset;
	originatedFromAsset: Asset;
	versionInc: VersionInc;
	versionIncSpecified: boolean;
	viewGroup: ViewGroup;
	contextId: number;
	contextIdSpecified: boolean;
	contextType: EntityType;
}
export interface TaskWorkflowInst extends AbstractEntity {
	taskWorkflowTmpl: TaskWorkflowTmpl;
	currentState: State;
	workflowStatus: WorkflowStatus;
	workflowStatusSpecified: boolean;
}
export interface BcdTaskEntry {
	key: TaskWorkflowProperties;
	keySpecified: boolean;
	value: string;
}
export interface DeploymentType extends AbstractEntity {
	name: string;
}
export interface TaskLink extends AbstractEntity {
	objectId: number;
	objectIdSpecified: boolean;
	objectType: EntityType;
}
export interface KeyValueDto {
	key: string;
	value: string;
}
export interface Project extends ExtendableEntity {
	name: string;
	description: string;
	viewGroup: ViewGroup;
	creator: User;
	creationDate: Date;
	creationDateSpecified: boolean;
	ownersFlowApprovalStrategy: OwnersFlowApprovalStrategy;
	branches: Branch[];
	isRetired: boolean;
	retireDate: Date;
	retireDateSpecified: boolean;
	retireUser: User;
	displayName: string;
}
export interface Branch extends AbstractEntity {
	name: string;
	lastSnapshotTagName: string;
	creator: User;
	description: string;
	creationDate: Date;
	creationDateSpecified: boolean;
	branchedFromRevision: Revision;
	branchRevisions: BranchRevision[];
	releaseTargetEffectiveDate: Date;
	releaseTargetEffectiveDateSpecified: boolean;
	isRetired: boolean;
	retireDate: Date;
	retireDateSpecified: boolean;
	retireUser: User;
	isRetiredByProject: boolean;
	headBranchRevisions: BranchRevision[];
	displayName: string;
}
export interface Revision extends ExtendableEntity {
	tag: string;
	creationDate: Date;
	creationDateSpecified: boolean;
	tagCreationDate: Date;
	tagCreationDateSpecified: boolean;
	tagCreator: User;
	internalSign: string;
	pullRequests: PullRequest[];
	deploymentDescriptors: DeploymentDescriptor[];
	name: string;
	isTagged: boolean;
}
export interface PullRequest extends AbstractEntity {
	description: string;
	type: pullRequestType;
	typeSpecified: boolean;
	creationDate: Date;
	creationDateSpecified: boolean;
	submitter: User;
	ownersFlowState: OwnersFlowState;
	status: PullRequestStatus;
	statusSpecified: boolean;
	pullRequestChanges: PullRequestChange[];
	targetBranch: Branch;
	bcdTask: BcdTask;
	bcd: Bcd;
	mergedFrom: Revision;
}
export interface PullRequestChange extends AbstractEntity {
	oldDeploymentDescriptor: DeploymentDescriptor;
	newDeploymentDescriptor: DeploymentDescriptor;
	type: PullRequestChangeType;
	typeSpecified: boolean;
}
export interface DeploymentDescriptor extends AbstractEntity {
	deploymentDescriptorViewGroup: ViewGroup;
	decisionView: DecisionView;
	ruleFlow: RuleFlow;
	descriptorMetadataElements: DescriptorMetadataElement[];
	submissionDate: Date;
	submissionDateSpecified: boolean;
	requestForDeploymentDate: Date;
	requestForDeploymentDateSpecified: boolean;
	deploymentDate: Date;
	deploymentDateSpecified: boolean;
	effectiveDate: Date;
	effectiveDateSpecified: boolean;
	expirationDate: Date;
	expirationDateSpecified: boolean;
	internalSign: string;
	identifierHashId: string;
	committed: boolean;
	groupId: number;
	groupIdSpecified: boolean;
	rowOperation: RowOperation;
	rowOperationSpecified: boolean;
	timestamp: number;
	timestampSpecified: boolean;
	release: Release;
	bcdTask: BcdTask;
	assetVersion: string;
}
export interface RuleFlow extends Asset {
	ruleFlowContent: RuleFlowContent;
	ruleFlowDisplayContent: RuleFlowDisplayContent;
	ruleFlowDefinition: RuleFlowDefinition;
	ruleFlowDecisionViews: RuleFlowDecisionView[];
	ruleFlowFactTypes: RuleFlowFactType[];
	ruleFlowViewGroups: RuleFlowViewGroup[];
	ruleFlowTasksDynamicProperties: RuleFlowTasksDynamicProperty[];
	notes: Note[];
	validationSign: string;
	unapprovedBusinessName: string;
}
export interface RuleFlowContent extends AbstractEntity {
	content: string;
	internalSign: string;
	logicalSign: string;
	externalSign: string;
}
export interface RuleFlowDisplayContent extends AbstractEntity {
	displayContent: string;
}
export interface RuleFlowDefinition extends AssetDefinition {
	businessName: string;
}
export interface RuleFlowDecisionView extends AbstractEntity {
	decisionView: DecisionView;
}
export interface RuleFlowFactType extends AbstractEntity {
	factType: FactType;
}
export interface RuleFlowViewGroup extends AbstractEntity {
	viewGroup: ViewGroup;
}
export interface RuleFlowTasksDynamicProperty extends AbstractEntity {
	template: DynamicPropertyTemplate;
}
export interface Note extends AbstractEntity {
	createdBy: User;
	createdDate: Date;
	createdDateSpecified: boolean;
	text: string;
	containerVersionLabel: string;
	subject: string;
	isLinkOnly: boolean;
}
export interface DescriptorMetadataElement extends AbstractEntity {
	template: DescriptorMetadataTemplate;
	value: string;
}
export interface DescriptorMetadataTemplate extends AbstractEntity {
	name: string;
	description: string;
	domain: Domain;
	viewGroup: ViewGroup;
	displayFormat: Format;
	defaultValue: string;
	isIdentifier: boolean;
	sortOrder: number;
	sortOrderSpecified: boolean;
}
export interface Format extends AbstractEntity {
	name: string;
	example: string;
	format: string;
}
export interface Bcd extends AbstractEntity {
	name: string;
	description: string;
	admin: User;
	originalAssignee: User;
	tasks: BcdTask[];
	viewGroup: ViewGroup;
	onHold: boolean;
	done: boolean;
	analysisIndicator: boolean;
	status: string;
	creationDate: Date;
	creationDateSpecified: boolean;
	completionDate: Date;
	completionDateSpecified: boolean;
	statusNote: string;
	privateBcd: boolean;
	privateUsers: PrivateUser;
}
export interface PrivateUser extends AbstractEntity {
	userList: PrivateUserDetail[];
}
export interface PrivateUserDetail extends AbstractEntity {
	user: User;
	readOnly: boolean;
}
export interface BranchRevision extends AbstractEntity {
	revision: Revision;
}
export interface ValueMapping extends AbstractEntity {
	sourceMatchType: ExpressionType;
	sourceMatchTypeSpecified: boolean;
	targetMatchType: ExpressionType;
	targetMatchTypeSpecified: boolean;
	source: string;
	target: string;
}
export interface CustomMetadataInstance extends AbstractEntity {
	customMetadataElement: CustomMetadataElement;
	metadata: string;
}
export interface RepeatingGroupFactTypeDefinition extends AbstractEntity {
	factTypeDefinition: FactTypeDefinition;
}
export interface Verb extends AbstractEntity {
	name: string;
}
export interface RepeatingGroup extends AbstractEntity {
	name: string;
	description: string;
	repeatingGroupFactTypeDefinitions: RepeatingGroupFactTypeDefinition[];
	repeatingGroupChildren: RepeatingGroup[];
	internalSign: string;
	logicalSign: string;
	externalSign: string;
}
export interface ReleaseRuleFlow extends AbstractEntity {
	ruleFlow: RuleFlow;
}
export interface ViewGroupFacet extends AbstractEntity {
	displayName: string;
	type: string;
	allowedFields: FacetAllowedField[];
	allowedChildrenTypes: string[];
	allowedSiblingTypes: string[];
}
export interface FacetAllowedField extends AbstractEntity {
	displayedName: string;
	entityTypeName: string;
}
export interface ExternalSetPropData extends AbstractEntity {
	propertyData: PropertyData;
}
export interface PropertyData extends AbstractEntity {
	descriptor: PropertyDescriptor;
	value: string;
}
export interface Version {
	label: string;
	number: number;
}
export interface FactDomain extends Asset {
	dataType: DataType;
	dataTypeSpecified: boolean;
	decimalPoint: number;
	domain: Domain;
	domainType: DomainType;
	domainTypeSpecified: boolean;
	factDomainDefinition: AssetDefinition;
	maxLength: number;
	maxLengthSpecified: boolean;
	regExp: string;
}
export interface Formula extends AbstractEntity {
	name: string;
	formula: string;
	functions: Function[];
	factTypeDefinitions: FactTypeDefinition[];
}
export interface Function extends AbstractEntity {
	name: string;
	arguments: FunctionArguemnt[];
	returnType: PrimitiveDataType;
	returnTypeSpecified: boolean;
	isEnabled: boolean;
	isEnabledSpecified: boolean;
	description: string;
}
export interface FunctionArguemnt extends AbstractEntity {
	name: string;
	type: PrimitiveDataType;
	typeSpecified: boolean;
	isList: boolean;
	isInfinite: boolean;
}
export interface Environment extends ExtendableEntity {
	viewGroup: ViewGroup;
	modelDefinition: ModelDefinition;
	modelVersion: ModelVersion;
	formatDefinition: ExportFormatDefinition;
	repositoryDefinition: ExportRepositoryDefinition;
	authorizedUserRolesForExport: UserRole[];
	name: string;
	description: string;
	ownersFlowApprovalStrategy: OwnersFlowApprovalStrategy;
	entityStatus: EntityStatus;
	entityStatusSpecified: boolean;
	internalSign: string;
	isTestEnvironment: boolean;
	isAllowSnapshots: boolean;
	snapshotSuffix: string;
	environmentType: EnvironmentType;
}
export interface ExportFormatDefinition extends ExportDefinition {
	isIncrementalExportSupported: boolean;
	isModelDefinitionRequired: boolean;
}
export interface ExportDefinition extends AbstractEntity {
	exportDefinitionPropertyTemplates: ExportDefinitionPropertyTemplate[];
	identifierName: string;
	implBeanName: string;
	displayName: string;
	entityStatus: EntityStatus;
	entityStatusSpecified: boolean;
}
export interface ExportDefinitionPropertyTemplate extends AbstractEntity {
	dynamicPropertyTemplate: DynamicPropertyTemplate;
}
export interface ExportRepositoryDefinition extends ExportDefinition {
}
export interface EnvironmentType {
	name: string;
	production: boolean;
}
export interface RuleRow extends ExtendableEntity {
	groupId: number;
	groupIdSpecified: boolean;
	conditionCells: ConditionCell[];
	conclusionCell: ConclusionCell;
	rulePattern: string;
	externalSign: string;
	internalSign: string;
	dateAdded: Date;
	dateAddedSpecified: boolean;
	notes: Note[];
	logicalSign: string;
}
export interface ConditionCell extends AbstractEntity {
	cellOperator: CellOperator;
	condition: Condition;
	operandFactTypeDefinition: FactTypeDefinition;
	value: string;
	formula: Formula;
	rowCellValues: RowCellValue[];
	notes: Note[];
}
export interface CellOperator extends AbstractEntity {
	operatorKey: string;
	operator: string;
	dataTypes: DataType[];
	rightOperandTypes: OperandType[];
	symbol: string;
	execClass: string;
	inclusionType: string;
}
export interface Condition extends AbstractEntity {
	factTypeDefinition: FactTypeDefinition;
	populatedColumn: boolean;
	notes: Note[];
}
export interface RowCellValue extends AbstractEntity {
	value: string;
}
export interface ConclusionCell extends AbstractEntity {
	cellOperator: CellOperator;
	operandFactTypeDefinition: FactTypeDefinition;
	formula: Formula;
	value: string;
	rowCellValues: RowCellValue[];
	notes: Note[];
}
export interface GlossaryArtifact extends Asset {
	aliasBusinessFriendlyName: string;
	factTypeDefinition: FactTypeDefinition;
	glossary: Glossary;
	glossaryArtifactType: GlossaryArtifactType;
	glossaryArtifactTypeSpecified: boolean;
	autoTextItem: GlossaryArtifactAutoTextItem[];
}
export interface GlossaryArtifactAutoTextItem extends AbstractEntity {
	autoText: string;
}
export interface RuleFamilyView extends Asset {
	conditions: Condition[];
	conclusionFactTypeDefinition: FactTypeDefinition;
	view: View;
	rows: RuleRow[];
	decisionViewRuleFamilyViews: DecisionViewRuleFamilyView[];
	notes: Note[];
	conclusionNotes: ConclusionNotes;
}
export interface DecisionViewRuleFamilyView extends AbstractEntity {
	decisionView: DecisionView;
	validationSign: string;
	repeatingGroup: RepeatingGroup;
}
export interface ConclusionNotes extends AbstractEntity {
	notes: Note[];
}
export interface QueryParameterBag extends AbstractEntity {
	queryParameterInstances: QueryParameterInstance[];
	user: User;
	repoQueryBasket: RepoQueryBasket;
}
export interface RepoQueryBasket extends AbstractEntity {
	whiteBoard: Whiteboard;
	viewGroup: ViewGroup;
	user: User;
	description: string;
	name: string;
	queryParameterDefinitions: QueryParameterDefinition[];
	createDate: Date;
	createDateSpecified: boolean;
	rootJunctions: RepoQueryRootJunction[];
}
export interface RepoQueryRootJunction extends AbstractEntity {
	entityType: EntityType;
	queryJunction: RepoQueryJunction;
}
export interface RepoQueryJunction extends AbstractEntity {
	junctionType: RepoQueryJunctionType;
	junctionTypeSpecified: boolean;
	queryCriteria: RepoQueryCriterion[];
}
export interface RepoQueryCriterion extends AbstractEntity {
	repoQueryJunction: RepoQueryJunction;
	repoQuery: RepoQuery;
}
export interface RepoQuery extends AbstractEntity {
	repoQueryConditions: QueryConditions[];
	isAllRepoQueryConditionsRequired: boolean;
	isAllRepoQueryConditionsRequiredSpecified: boolean;
	dql: string;
	isLatestVersionOnly: boolean;
}
export interface QueryConditions extends AbstractEntity {
	attribute: RepoQueryAttributeMeta;
	operator: Operator;
	operatorSpecified: boolean;
	value: string;
	queryParameterDefinition: QueryParameterDefinition;
	displayValue: string;
	repoQueryConditions: QueryConditions[];
	conditionExternalSet: RepoQueryConditionExternalSet;
}
export interface RepoQueryConditionExternalSet extends AbstractEntity {
	externalSetInstance: ExternalSetInstance;
	findLevels: ExternalSetFindLevel[];
	repoQueryConditionExternalSetArguments: RepoQueryConditionExternalSetArgument[];
}
export interface RepoQueryConditionExternalSetArgument extends AbstractEntity {
	name: string;
	value: string;
	queryParameterDefinition: QueryParameterDefinition;
}
export interface FormatDataType extends AbstractEntity {
	dataType: DataType;
	dataTypeSpecified: boolean;
	isDefaultFormat: boolean;
	format: Format;
}
export interface ImportedFactType extends AbstractEntity {
	jobExecutionId: number;
	jobExecutionIdSpecified: boolean;
	businessFriendlyName: string;
	commonDataHash: string;
	versionedDataHash: string;
	factTypeStatus: ImportFactTypeStatus;
	factTypeStatusSpecified: boolean;
	importFactTypeDto: string;
}
export interface ExecutionEnvironmentProperty extends AbstractEntity {
	executionEngineProperty: ExecutionEngineProperty;
	value: string;
}
export interface ExecutionEngineProperty extends AbstractEntity {
	name: string;
	description: string;
}
export interface ExecutionEngine extends AbstractEntity {
	engineType: string;
	name: string;
	exEngineProperties: ExecutionEngineProperty[];
}
export interface ExecutionEnvironment extends AbstractEntity {
	name: string;
	description: string;
	executionEngine: ExecutionEngine;
	exEnvironmentProperties: ExecutionEnvironmentProperty[];
	isEnabled: boolean;
}
export interface AppFile extends AbstractEntity {
	fileName: string;
	fileExtension: FileExtension;
	fileContent: number[];
}
export interface FileExtension extends AbstractEntity {
	mimeType: string;
	maxByteSize: number;
	description: string;
}
export interface BatchJobDataImport extends AbstractEntity {
	jobExecutionId: number;
	jobExecutionIdSpecified: boolean;
	glossaryId: number;
	glossaryIdSpecified: boolean;
	jobName: string;
	executingUser: User;
	importedDate: Date;
	importedDateSpecified: boolean;
	importedFileName: string;
	importedFileFormat: string;
	isDataAnalyzed: boolean;
	isDataAnalyzedSpecified: boolean;
	isDataImportStarted: boolean;
	isDataImportStartedSpecified: boolean;
	importedFactTypeIds: number[];
	failureMessages: string[];
}
export interface ValidationViolationRuleFlow extends AbstractEntity {
	ruleFlowId: number;
	ruleFlowIdSpecified: boolean;
	processElementId: string;
	sequenceFlowId: string;
	processId: string;
	violationMessage: string;
	validationType: ValidationType;
	validationTypeSpecified: boolean;
}
export interface PropertyConfig extends AbstractEntity {
	name: string;
	propertyDataType: PropertyDataType;
	propertyDataTypeSpecified: boolean;
	propertyDiscriminator: PropertyDiscriminator;
	propertyDiscriminatorSpecified: boolean;
	defaultValue: string;
	description: string;
	propertyIdentifier: Property;
	propertyIdentifierSpecified: boolean;
	isEnabled: boolean;
}
export interface ImportExportFileType extends AbstractEntity {
	fileType: string;
}
export interface FailedElementAudit extends AbstractEntity {
	file: string;
	errorDescription: string;
	exception: string;
	idTypeEntity: IdTypeEntity;
}
export interface ImportExportAudit extends AbstractEntity {
	user: User;
	date: Date;
	dateSpecified: boolean;
	auditType: AuditType;
	auditTypeSpecified: boolean;
	impExpAuditState: ImpExpAuditState;
	impExpAuditStateSpecified: boolean;
	successful: IdTypeEntity[];
	failedElementAudits: FailedElementAudit[];
	expectedNotImported: string[];
	importedNotExpected: IdTypeEntity[];
	importExportFileType: ImportExportFileType;
}
export interface ValidationDefinition extends AbstractEntity {
	validationMessageCode: string;
	validationType: ValidationType;
	validationTypeSpecified: boolean;
	validationLevel: ValidationLevel;
	validationLevelSpecified: boolean;
	validationPrincipleCode: ValidationPrincipleCode;
	validationPrincipleCodeSpecified: boolean;
	principleDescription: string;
	validationMessage: string;
}
export interface ValidationInstance extends AbstractEntity {
	entityType: EntityType;
	validationDefinition: ValidationDefinition;
	violationMessage: string;
	isSuppressed: boolean;
	rowIds: number[];
	conditionIds: number[];
	decisionViewId: number;
	ruleFamilyViewId: number;
	conditionCellId: number;
	conclusionCellId: number;
	categoryId: number;
	categoryIdSpecified: boolean;
	entityId: number;
	entityIdSpecified: boolean;
}
export interface ExportedFile extends AbstractEntity {
	content: number[];
}
export interface RevisionExportHistoryInfoDto extends AbstractEntity {
	exportDate: Date;
	exportDateSpecified: boolean;
	exportStatus: ExportStatus;
	exportStatusSpecified: boolean;
	exportStatusDate: Date;
	exportStatusDateSpecified: boolean;
	revisionId: number;
	revisionIdSpecified: boolean;
	revisionTagName: string;
	incrementedFromRevisionTagName: string;
	exportName: string;
	environmentId: number;
	environmentIdSpecified: boolean;
	environmentName: string;
	environmentType: EnvironmentType;
	formatDefinition: ExportFormatDefinition;
	exportModelName: string;
	missingExportModelNameReason: string;
	exportModelVersion: string;
	missingExportModelVersionReason: string;
	repositoryDefinition: ExportRepositoryDefinition;
	exporterName: string;
	projectName: string;
	fullExportFile: ExportedFile;
	incrementalExportFile: ExportedFile;
	isIncremental: boolean;
	UNKNOWN_MSG: string;
	UNKNOWN_REASON_MSG: string;
}
export interface ReleaseHistoryRecord extends AbstractEntity {
	release: Release;
	decisionView: DecisionView;
	ruleFlow: RuleFlow;
	deploymentDescriptor: DeploymentDescriptor;
	viewGroup: ViewGroup;
	type: RecordType;
	typeSpecified: boolean;
	changeDate: Date;
	changeDateSpecified: boolean;
	originTask: BcdTask;
	user: User;
	deletedRecord: deletedReleaseHistoryRecord;
}
export interface deletedReleaseHistoryRecord {
	assetId: number;
	assetIdSpecified: boolean;
	assetName: string;
	assetVersion: string;
	entityType: string;
}
export interface MessageDecorator extends AbstractEntity {
	name: string;
	prefix: string;
	suffix: string;
}
export interface MessageElementDefinition extends AbstractEntity {
	resolverBeanName: string;
	name: string;
	descritpion: string;
	prefix: string;
	suffix: string;
}
export interface MessageElement extends AbstractEntity {
	definition: MessageElementDefinition;
	parameterId: number;
	parameterIdSpecified: boolean;
	defaultPlacholder: string;
	resolvedPlacholder: string;
	value: string;
	defaultValue: boolean;
	displayPlaceholder: string;
}
export interface RuleRowMessage extends AbstractEntity {
	ruleRow: RuleRow;
	decisionView: DecisionView;
	category: RowMessageCategory;
	text: string;
	elements: MessageElement[];
	decorators: MessageDecorator[];
	notes: Note[];
	logicalSign: string;
	externalSign: string;
}
export interface RowMessageCategory extends AbstractEntity {
	name: string;
	viewGroups: ViewGroup[];
	isReused: boolean;
	isInherited: boolean;
	internalSign: string;
	logicalSign: string;
	externalSign: string;
	modelMappings: ModelMapping[];
}
export interface Perspective extends AbstractEntity {
	serializedPerspective: string;
	isDefault: boolean;
}
export interface FlowElement extends AbstractEntity {
	primaryElementId: number;
	primaryElementIdSpecified: boolean;
	primaryElementType: EntityType;
	primaryElementContextId: number;
	primaryElementContextIdSpecified: boolean;
	primaryElementName: string;
}
export interface Flow extends AbstractEntity {
	flowElements: FlowElement[];
}
export interface EntitySymbol extends AbstractEntity {
	figureId: string;
	content: string;
	fillColor: string;
	borderColor: string;
}
export interface DataTypeFormatsDto {
	dataType: DataType;
	dataTypeSpecified: boolean;
	dataTypeFormats: FormatDataType[];
}
export interface NoSuchJobException {
	message: string;
}
export interface JobInstanceAlreadyCompleteException {
	message: string;
}
export interface JobExecutionAlreadyRunningException {
	message: string;
}
export interface JobParametersInvalidException {
	message: string;
}
export interface JobRestartException {
	message: string;
}
export interface approve {
}
export interface approveResponse {
}
export interface reject {
}
export interface rejectResponse {
}
export interface findApprovalStrategy {
}
export interface findApprovalStrategyResponse {
}
export interface approveByBcdTask {
}
export interface approveByBcdTaskResponse {
}
export interface start {
}
export interface startResponse {
}
export interface rejectByBcdTask {
}
export interface rejectByBcdTaskResponse {
}
export interface updateApprovalStrategy {
}
export interface updateApprovalStrategyResponse {
}
export interface findAllExecutionEnvironmentsFull {
}
export interface findAllExecutionEnvironmentsFullResponse {
}
export interface deleteExecutionEngine {
}
export interface deleteExecutionEngineResponse {
}
export interface findAllExecutionEnvironments {
}
export interface findAllExecutionEnvironmentsResponse {
}
export interface deleteExecutionEnvironment {
}
export interface deleteExecutionEnvironmentResponse {
}
export interface findExecutionEnvironmentByName {
}
export interface findExecutionEnvironmentByNameResponse {
}
export interface findByType {
}
export interface findByTypeResponse {
}
export interface createExecutionEngine {
}
export interface createExecutionEngineResponse {
}
export interface deleteExecutionEnvironmentProperty {
}
export interface deleteExecutionEnvironmentPropertyResponse {
}
export interface importEngines {
}
export interface importEnginesResponse {
}
export interface updateExecutionEnvironmentProperty {
}
export interface updateExecutionEnvironmentPropertyResponse {
}
export interface createExecutionEnvironmentProperty {
}
export interface createExecutionEnvironmentPropertyResponse {
}
export interface findAllExecutionEnginesFull {
}
export interface findAllExecutionEnginesFullResponse {
}
export interface createExecutionEnvironment {
}
export interface createExecutionEnvironmentResponse {
}
export interface addPropertyToExecutionEnvironment {
}
export interface addPropertyToExecutionEnvironmentResponse {
}
export interface deletePropertyFromExecutionEnvironment {
}
export interface deletePropertyFromExecutionEnvironmentResponse {
}
export interface updateExecutionEngineProperty {
}
export interface updateExecutionEnginePropertyResponse {
}
export interface deleteExecutionEngineProperty {
}
export interface deleteExecutionEnginePropertyResponse {
}
export interface createExecutionEngineProperty {
}
export interface createExecutionEnginePropertyResponse {
}
export interface findAllExecutionEngines {
}
export interface findAllExecutionEnginesResponse {
}
export interface deletePropertyFromExecutionEngine {
}
export interface deletePropertyFromExecutionEngineResponse {
}
export interface addPropertyToExecutionEngine {
}
export interface addPropertyToExecutionEngineResponse {
}
export interface findExecutionEngineByName {
}
export interface findExecutionEngineByNameResponse {
}
export interface updateExecutionEnvironment {
}
export interface updateExecutionEnvironmentResponse {
}
export interface deploy {
}
export interface deployResponse {
}
export interface findExecutionEnvironmentById {
}
export interface findExecutionEnvironmentByIdResponse {
}
export interface updateExecutionEngine {
}
export interface updateExecutionEngineResponse {
}
export interface findExecutionEngineById {
}
export interface findExecutionEngineByIdResponse {
}
export interface PropertyDto {
	property: PropertyConfig;
	value: string;
}
export interface insertSystemProperty {
}
export interface insertSystemPropertyResponse {
}
export interface findUserProperty {
}
export interface findUserPropertyResponse {
}
export interface insertUserProperty {
}
export interface insertUserPropertyResponse {
}
export interface insertSystemProperties {
}
export interface insertSystemPropertiesResponse {
}
export interface insertViewGroupProperties {
}
export interface insertViewGroupPropertiesResponse {
}
export interface insertViewGroupProperty {
}
export interface insertViewGroupPropertyResponse {
}
export interface getPropertiesTemplate {
}
export interface getPropertiesTemplateResponse {
}
export interface findSystemProperties {
}
export interface findSystemPropertiesResponse {
}
export interface findSystemProperty {
}
export interface findSystemPropertyResponse {
}
export interface insertUserProperties {
}
export interface insertUserPropertiesResponse {
}
export interface createPropertyConfig {
}
export interface createPropertyConfigResponse {
}
export interface findUserProperties {
}
export interface findUserPropertiesResponse {
}
export interface findViewGroupProperties {
}
export interface findViewGroupPropertiesResponse {
}
export interface findViewGroupProperty {
}
export interface findViewGroupPropertyResponse {
}
export interface findConfigPropertyByPropertyIdentifier {
}
export interface findConfigPropertyByPropertyIdentifierResponse {
}
export interface assetValidationStatusInfo {
	assetId: number;
	assetIdSpecified: boolean;
	hasSuppressedWarnings: boolean;
	hasWarnings: boolean;
}
export interface findDecisionViewValidationStatusInfo {
}
export interface findDecisionViewValidationStatusInfoResponse {
}
export interface validateRuleRowBeforeSave {
}
export interface validateRuleRowBeforeSaveResponse {
}
export interface batchLogValidation {
}
export interface batchLogValidationResponse {
}
export interface validateDecisionViewAsync {
}
export interface validateDecisionViewAsyncResponse {
}
export interface updateValidationTypeForValidationMessageCode {
}
export interface updateValidationTypeForValidationMessageCodeResponse {
}
export interface clearDecisionViewValidationSign {
}
export interface clearDecisionViewValidationSignResponse {
}
export interface clearDecisionFlowValidationSign {
}
export interface clearDecisionFlowValidationSignResponse {
}
export interface findDecisionViewValidationResults {
}
export interface findDecisionViewValidationResultsResponse {
}
export interface validateRuleFamilyViewAsync {
}
export interface validateRuleFamilyViewAsyncResponse {
}
export interface ProgressInfo {
	maxCount: number;
	currentCount: number;
	jobStartTime: Date;
	jobStartTimeSpecified: boolean;
}
export interface findProgressInfo {
}
export interface findProgressInfoResponse {
}
export interface isDecisionViewValid {
}
export interface isDecisionViewValidResponse {
}
export interface validateDecisionView {
}
export interface validateDecisionViewResponse {
}
export interface validateRuleFamilyView {
}
export interface validateRuleFamilyViewResponse {
}
export interface toggleValidationInstanceSuppression {
}
export interface toggleValidationInstanceSuppressionResponse {
}
export interface validateRuleRow {
}
export interface validateRuleRowResponse {
}
export interface clearDVRFVValidationSign {
}
export interface clearDVRFVValidationSignResponse {
}
export interface findRuleFamilyViewValidationResults {
}
export interface findRuleFamilyViewValidationResultsResponse {
}
export interface validateRuleFlow {
}
export interface validateRuleFlowResponse {
}
export interface validateRuleFlowCascading {
}
export interface validateRuleFlowCascadingResponse {
}
export interface findAllValidationDefinitions {
}
export interface findAllValidationDefinitionsResponse {
}
export interface findAllDataTypesFormats {
}
export interface findAllDataTypesFormatsResponse {
}
export interface setFormatAsDefaultForDataType {
}
export interface setFormatAsDefaultForDataTypeResponse {
}
export interface updateFactTypeAutoText {
}
export interface updateFactTypeAutoTextResponse {
}
export interface findAllFactDomain {
}
export interface findAllFactDomainResponse {
}
export interface findFactDomain {
}
export interface findFactDomainResponse {
}
export interface FactTypeOwnerDetailDto {
	user: User;
	whiteboard: Whiteboard;
}
export interface getFactTypeOwnerDetailDto {
}
export interface getFactTypeOwnerDetailDtoResponse {
}
export interface updateFactType {
}
export interface updateFactTypeResponse {
}
export interface findFullGlossaryById {
}
export interface findFullGlossaryByIdResponse {
}
export interface ViolationMessage {
	validationType: ValidationType;
	validationTypeSpecified: boolean;
	violationMessage: string;
	template: string;
	property: string;
	bean: string;
}
export interface validateFactDomain {
}
export interface validateFactDomainResponse {
}
export interface findFactTypesInRuleFamilyViewByDecisionViewWithDefinitionAndFactDomain {
}
export interface findFactTypesInRuleFamilyViewByDecisionViewWithDefinitionAndFactDomainResponse {
}
export interface calculateFullFactTypeName {
}
export interface calculateFullFactTypeNameResponse {
}
export interface AssetDto {
	id: number;
	idSpecified: boolean;
	name: string;
	entityType: string;
	version: string;
	assetState: AssetState;
	assetStateSpecified: boolean;
	createdDate: Date;
	createdDateSpecified: boolean;
	approvedDate: Date;
	approvedDateSpecified: boolean;
	createdBy: IdName;
	approvedBy: IdName;
	isLatestVersion: boolean;
	isLatestVersionSpecified: boolean;
}
export interface IdName {
	id: number;
	idSpecified: boolean;
	name: string;
}
export interface findAllUnusedFactTypeByViewGroupId {
}
export interface findAllUnusedFactTypeByViewGroupIdResponse {
}
export interface addQualifierToGlossary {
}
export interface addQualifierToGlossaryResponse {
}
export interface findLatestFactTypeByBusinessFriendlyName {
}
export interface findLatestFactTypeByBusinessFriendlyNameResponse {
}
export interface findAllCustomMetadataElementByGlossaryId {
}
export interface findAllCustomMetadataElementByGlossaryIdResponse {
}
export interface FactTypeSearchDtoResults {
	factTypeSearchDtos: FactTypeSearchDto[];
	seqNum: number;
}
export interface FactTypeSearchDto {
	id: string;
	friendlyName: string;
	atomicFactType: string;
	fullFactTypeName: string;
	glossaryArtifactFriendlyName: string;
	glossaryname: string;
	glossaryid: string;
	autoText: string;
	viewGroupid: string;
	state: string;
}
export interface searchWithWhiteboardResults {
}
export interface searchWithWhiteboardResultsResponse {
}
export interface search {
}
export interface searchResponse {
}
export interface updateCustomMetadataElement {
}
export interface updateCustomMetadataElementResponse {
}
export interface TreeDto {
	properties: KeyValueDto[];
	children: TreeDto[];
}
export interface updateFactTypeWithAutoTextAndNotes {
}
export interface updateFactTypeWithAutoTextAndNotesResponse {
}
export interface addValidValueToFactDomain {
}
export interface addValidValueToFactDomainResponse {
}
export interface FactTypeWithContextNameAndRfvFlagsDto {
	factType: FactType;
	contexedBusinessFriendlyName: string;
	isDependent: boolean;
	isInFormula: boolean;
	isEditable: boolean;
}
export interface findFactTypeWithContextNameAndRfvFlags {
}
export interface findFactTypeWithContextNameAndRfvFlagsResponse {
}
export interface createQualifier {
}
export interface createQualifierResponse {
}
export interface findAllQualifiersWithValues {
}
export interface findAllQualifiersWithValuesResponse {
}
export interface findGlossaryWithQualifiersandCustomMetadataByViewGroupId {
}
export interface findGlossaryWithQualifiersandCustomMetadataByViewGroupIdResponse {
}
export interface findAllQualifiers {
}
export interface findAllQualifiersResponse {
}
export interface deleteCustomMetadata {
}
export interface deleteCustomMetadataResponse {
}
export interface RetireFactTypes {
}
export interface RetireFactTypesResponse {
}
export interface findViewGroupForFactType {
}
export interface findViewGroupForFactTypeResponse {
}
export interface findQualifierById {
}
export interface findQualifierByIdResponse {
}
export interface findOtherAvailableVersionsOfFactTypeWithContextNameDto {
}
export interface findOtherAvailableVersionsOfFactTypeWithContextNameDtoResponse {
}
export interface validateFactType {
}
export interface validateFactTypeResponse {
}
export interface findFactType {
}
export interface findFactTypeResponse {
}
export interface createCustomMetadataElement {
}
export interface createCustomMetadataElementResponse {
}
export interface findAllGlossaries {
}
export interface findAllGlossariesResponse {
}
export interface searchAllGroups {
}
export interface searchAllGroupsResponse {
}
export interface findGlossaryByViewGroupId {
}
export interface findGlossaryByViewGroupIdResponse {
}
export interface addCustomMetadataElementsToGlossary {
}
export interface addCustomMetadataElementsToGlossaryResponse {
}
export interface renameFactType {
}
export interface renameFactTypeResponse {
}
export interface findAllCustomMetadataElements {
}
export interface findAllCustomMetadataElementsResponse {
}
export interface findFactTypeWithDefinitionAndFactDomain {
}
export interface findFactTypeWithDefinitionAndFactDomainResponse {
}
export interface FactTypeInGlossariesHirarchyInfoDto {
	factType: FactType;
	currentGlossaryArtifactInfoDto: GlossaryArtifactInfoDto;
	allFactTypeGlossaryArtifactsInfoDto: GlossaryArtifactInfoDto[];
	editable: boolean;
	hasMoreVersions: boolean;
	movable: boolean;
	domainTemplateOutOfSync: boolean;
}
export interface GlossaryArtifactInfoDto {
	factTypeDefinitionId: number;
	factTypeDefinitionIdSpecified: boolean;
	viewGroup: KeyValueDto;
	glossary: KeyValueDto;
	glossaryArtifactType: GlossaryArtifactType;
	glossaryArtifactTypeSpecified: boolean;
	businessFriendlyName: string;
}
export interface findFactTypeInGlossariesHirarchyInfoDtoByFactTypeId {
}
export interface findFactTypeInGlossariesHirarchyInfoDtoByFactTypeIdResponse {
}
export interface isFactTypeLatestVersion {
}
export interface isFactTypeLatestVersionResponse {
}
export interface findAllFactTypes {
}
export interface findAllFactTypesResponse {
}
export interface createFactDomain {
}
export interface createFactDomainResponse {
}
export interface findGlossaryWithElementsById {
}
export interface findGlossaryWithElementsByIdResponse {
}
export interface TaskIdAndTransitionNamesDto {
	bcdTaskId: number;
	taskFlowActions: string[];
}
export interface findTaskIdAndAvailableWorkFlowActionForFactTypeAndUser {
}
export interface findTaskIdAndAvailableWorkFlowActionForFactTypeAndUserResponse {
}
export interface findAllQualifiertByGlossaryId {
}
export interface findAllQualifiertByGlossaryIdResponse {
}
export interface findFactTypeWithDefinition {
}
export interface findFactTypeWithDefinitionResponse {
}
export interface updateFactDomain {
}
export interface updateFactDomainResponse {
}
export interface updateFactTypeWithAutoText {
}
export interface updateFactTypeWithAutoTextResponse {
}
export interface createGlossary {
}
export interface createGlossaryResponse {
}
export interface FactTypeWithViewGroupDto {
	factType: FactType;
	viewGroup: ViewGroup;
}
export interface findLatestFactTypeWithContainerViewGroup {
}
export interface findLatestFactTypeWithContainerViewGroupResponse {
}
export interface validateFactDomainValue {
}
export interface validateFactDomainValueResponse {
}
export interface ReplaceRuleFamilyViewDto {
	id: number;
	name: string;
	versionLabel: string;
	connectedDvCount: number;
	connectedDvCountSpecified: boolean;
	isCurrent: boolean;
	state: AssetState;
	stateSpecified: boolean;
}
export interface findAvailableRfvsForSupportedFactType {
}
export interface findAvailableRfvsForSupportedFactTypeResponse {
}
export interface updateQualifier {
}
export interface updateQualifierResponse {
}
export interface deleteQualifier {
}
export interface deleteQualifierResponse {
}
export interface createFactType {
}
export interface createFactTypeResponse {
}
export interface findFactTypesWithDomainByWhiteboardId {
}
export interface findFactTypesWithDomainByWhiteboardIdResponse {
}
export interface findExportHistoryRecordIncrementalFile {
}
export interface findExportHistoryRecordIncrementalFileResponse {
}
export interface findPossibleExportRepositoryDefinitionForEnvironment {
}
export interface findPossibleExportRepositoryDefinitionForEnvironmentResponse {
}
export interface tagReleaseExportHistoryRecord {
}
export interface tagReleaseExportHistoryRecordResponse {
}
export interface findEnvironmentByViewGroupId {
}
export interface findEnvironmentByViewGroupIdResponse {
}
export interface factTypeLinksWithStrategyOwnersDto {
	approvalStrategyType: ApprovalStrategyType;
	approvalStrategyTypeSpecified: boolean;
	factTypeLinks: FactTypeLinksDto[];
	ownersNames: string[];
}
export interface FactTypeLinksDto {
	factTypeName: string;
	modelMappingStatus: string;
	factTypeMappedName: string;
	glossaryName: string;
	entityLinkParameters: KeyValueDto[];
}
export interface getRevisionFactTypeLinks {
}
export interface getRevisionFactTypeLinksResponse {
}
export interface unmarkExportDeployedByExportHistory {
}
export interface unmarkExportDeployedByExportHistoryResponse {
}
export interface findAllEnvironmentsAllowedToCurrentUser {
}
export interface findAllEnvironmentsAllowedToCurrentUserResponse {
}
export interface findAllExportRepositoryDefinition {
}
export interface findAllExportRepositoryDefinitionResponse {
}
export interface findExportHistoryRecordFullFile {
}
export interface findExportHistoryRecordFullFileResponse {
}
export interface EnvironmentAndValidationsDto {
	environment: Environment;
	violationMessageList: ViolationMessage[];
	userAuthorizedToExportEnvironemtYn: boolean;
	valid: boolean;
}
export interface findEnvironmentForDeploymentByViewGroupId {
}
export interface findEnvironmentForDeploymentByViewGroupIdResponse {
}
export interface PreviousExportedRevisionAndActiveExportToEnvDto {
	revisionName: string;
	areActiveExportsForEnvOnProject: boolean;
	isTagged: boolean;
}
export interface findPreviousExportDetails {
}
export interface findPreviousExportDetailsResponse {
}
export interface countLatestDeploymentByEnvTypeForEntity {
}
export interface countLatestDeploymentByEnvTypeForEntityResponse {
}
export interface getExportStream {
}
export interface getExportStreamResponse {
}
export interface ImpExpFileFormat {
	format: string;
	description: string;
}
export interface findAvailableExportToEnvironmentFormats {
}
export interface findAvailableExportToEnvironmentFormatsResponse {
}
export interface getExportHistoryRecordsPageSize {
}
export interface getExportHistoryRecordsPageSizeResponse {
}
export interface redeploy {
}
export interface redeployResponse {
}
export interface updateApprovalStrategy1 {
}
export interface updateApprovalStrategyResponse1 {
}
export interface findReleaseHistoryRecordsBetweenExports {
}
export interface findReleaseHistoryRecordsBetweenExportsResponse {
}
export interface updateExportDefinitionStatus {
}
export interface updateExportDefinitionStatusResponse {
}
export interface findPossibleExportFormatDefinitionForEnvironment {
}
export interface findPossibleExportFormatDefinitionForEnvironmentResponse {
}
export interface findEnvironmentForExportByViewGroupId {
}
export interface findEnvironmentForExportByViewGroupIdResponse {
}
export interface ExportHistoryRecordsPage {
	records: RevisionExportHistoryInfoDto[];
	pageNo: number;
	totalPages: number;
	totalEntriesNumber: number;
	incrementalSupported: boolean;
}
export interface findExportHistoryPage {
}
export interface findExportHistoryPageResponse {
}
export interface startExportForDeployment {
}
export interface startExportForDeploymentResponse {
}
export interface findEnvironmentsByTestingFlag {
}
export interface findEnvironmentsByTestingFlagResponse {
}
export interface findEnvironmentById {
}
export interface findEnvironmentByIdResponse {
}
export interface DeploymentAddInfoRefsDto {
	id: number;
	idSpecified: boolean;
	projectId: number;
	projectIdSpecified: boolean;
	projectName: string;
	branchId: number;
	branchIdSpecified: boolean;
	branchName: string;
	revisionId: number;
	revisionIdSpecified: boolean;
	revisionTag: string;
	environmentName: string;
	environmentType: string;
	environmentFormat: string;
	environmentModel: string;
	environmentModelVersion: string;
	deploymentDate: Date;
	deploymentDateSpecified: boolean;
	requestFordeploymentDate: Date;
	requestFordeploymentDateSpecified: boolean;
	deploymentCreator: string;
	isIncremental: boolean;
	deploymentApprovalDate: Date;
	deploymentApprovalDateSpecified: boolean;
	deploymentApprovedBy: string;
	projectViewGroupId: number;
	projectViewGroupIdSpecified: boolean;
	projectViewGroupName: string;
}
export interface findLatestDeploymentAddInfoRefsForEnvTypeAndEntity {
}
export interface findLatestDeploymentAddInfoRefsForEnvTypeAndEntityResponse {
}
export interface findExportedElementsByExportTag {
}
export interface findExportedElementsByExportTagResponse {
}
export interface validateExportRequestCanBeApproved {
}
export interface validateExportRequestCanBeApprovedResponse {
}
export interface findApprovalStrategy1 {
}
export interface findApprovalStrategyResponse1 {
}
export interface getEnvironmentTypes {
}
export interface getEnvironmentTypesResponse {
}
export interface createEnvironment {
}
export interface createEnvironmentResponse {
}
export interface RevisionComparisonDto {
	communityName: string;
	communityId: number;
	projectName: string;
	projectId: number;
	branchName: string;
	branchId: number;
	earlierTagName: string;
	laterTagName: string;
	earlierRevisionId: number;
	laterRevisionId: number;
	isFirstDeployment: boolean;
	isOutOfSeqExport: boolean;
}
export interface findComparisonWithLastDeployedRevisionInEnvironment {
}
export interface findComparisonWithLastDeployedRevisionInEnvironmentResponse {
}
export interface findExportFormatDefinition {
}
export interface findExportFormatDefinitionResponse {
}
export interface updateEnvironment {
}
export interface updateEnvironmentResponse {
}
export interface validateRevisionForEnvironment {
}
export interface validateRevisionForEnvironmentResponse {
}
export interface findRevisionExportHistoryRecordPagesByEnvironmentIdAndStatusesWithPaging {
}
export interface findRevisionExportHistoryRecordPagesByEnvironmentIdAndStatusesWithPagingResponse {
}
export interface markExportAsDeployedByExportHistory {
}
export interface markExportAsDeployedByExportHistoryResponse {
}
export interface findDecisionViewsOfExport {
}
export interface findDecisionViewsOfExportResponse {
}
export interface GeneralResponseDto {
	infoMessages: string[];
	errorMessages: string[];
	warningMessages: string[];
}
export interface getRevisionMessagesForExport {
}
export interface getRevisionMessagesForExportResponse {
}
export interface dryRunBeforeCRFImport {
}
export interface dryRunBeforeCRFImportResponse {
}
export interface ImportRuleFamilyViewDto {
	ruleFamilyViewId: number;
	ruleFamilyViewIdSpecified: boolean;
	importErrorDtos: importErrorDto[];
}
export interface importErrorDto {
	errorType: ErrorTypeDto;
	errorTypeSpecified: boolean;
	properties: string[];
	additionalInfo: string;
}
export interface bulkRfvImport {
}
export interface bulkRfvImportResponse {
}
export interface AnalyzedFactTypeDto {
	importedFactType: ImportedFactType;
	importedFactTypeDto: ImportFactTypeDto;
}
export interface ImportFactTypeDto {
	factType: FactType;
	importValueMappingDtos: importValueMappingDto[];
	glossaryId: number;
	glossaryIdSpecified: boolean;
	glossaryName: string;
	viewGroupId: number;
	viewGroupIdSpecified: boolean;
	isUpdateFactTypeDefinition: boolean;
	existsFactTypeId: number;
	existsFactTypeIdSpecified: boolean;
	importErrorDtos: importErrorDto[];
	factTypeArtifactAutoTextItems: GlossaryArtifactAutoTextItem[];
}
export interface importValueMappingDto {
}
export interface findImportedFactTypesByJobExecId {
}
export interface findImportedFactTypesByJobExecIdResponse {
}
export interface importCsvFromFolder {
}
export interface importCsvFromFolderResponse {
}
export interface importValidValues {
}
export interface importValidValuesResponse {
}
export interface importToGlossary {
}
export interface importToGlossaryResponse {
}
export interface dryRunBeforeGlossaryImport {
}
export interface dryRunBeforeGlossaryImportResponse {
}
export interface saveImportGlossaryByExecIdAndImportedFactTypeIds {
}
export interface saveImportGlossaryByExecIdAndImportedFactTypeIdsResponse {
}
export interface deleteImportedFactTypeByJobExecId {
}
export interface deleteImportedFactTypeByJobExecIdResponse {
}
export interface importCsvFromFolderWithIndexParam {
}
export interface importCsvFromFolderWithIndexParamResponse {
}
export interface getAvailableFileFormatsForRuleFamilyViewImport {
}
export interface getAvailableFileFormatsForRuleFamilyViewImportResponse {
}
export interface importRolesAndPermissionGroups {
}
export interface importRolesAndPermissionGroupsResponse {
}
export interface createDecisionViewWithImportedRfvs {
}
export interface createDecisionViewWithImportedRfvsResponse {
}
export interface deleteImportFactTypeAndBatchJobDataImportByExecId {
}
export interface deleteImportFactTypeAndBatchJobDataImportByExecIdResponse {
}
export interface getAvailableFileFormats {
}
export interface getAvailableFileFormatsResponse {
}
export interface importCrfFileToRuleFamilyView {
}
export interface importCrfFileToRuleFamilyViewResponse {
}
export interface uploadFiles {
}
export interface uploadFilesResponse {
}
export interface importGlossary {
}
export interface importGlossaryResponse {
}
export interface importModelMapping {
}
export interface importModelMappingResponse {
}
export interface importToModel {
}
export interface importToModelResponse {
}
export interface SetDominToFactTypes {
}
export interface SetDominToFactTypesResponse {
}
export interface importDecisionView {
}
export interface importDecisionViewResponse {
}
export interface exportMultipleRFVs {
}
export interface exportMultipleRFVsResponse {
}
export interface exportRuleFamilyView {
}
export interface exportRuleFamilyViewResponse {
}
export interface exportDecisionView {
}
export interface exportDecisionViewResponse {
}
export interface getAvailableFileFormats1 {
}
export interface getAvailableFileFormatsResponse1 {
}
export interface exportGlossary {
}
export interface exportGlossaryResponse {
}
export interface deleteDomainTemplate {
}
export interface deleteDomainTemplateResponse {
}
export interface DomainDto {
	dataType: DataType;
	dataTypeSpecified: boolean;
	depricated: boolean;
	domainType: DomainType;
	domainTypeSpecified: boolean;
	domainValues: DomainValue[];
	externalSetInstanceId: number;
	format: string;
	glossaryId: number;
	id: number;
	length: number;
	lengthSpecified: boolean;
	local: boolean;
	name: string;
	ranges: Range[];
	regex: string;
	regexMsg: string;
	required: boolean;
}
export interface findDomainById {
}
export interface findDomainByIdResponse {
}
export interface removeDomainFromGlossary {
}
export interface removeDomainFromGlossaryResponse {
}
export interface addDomainToGlossary {
}
export interface addDomainToGlossaryResponse {
}
export interface findAllActiveTemplateDomains {
}
export interface findAllActiveTemplateDomainsResponse {
}
export interface activateDomain {
}
export interface activateDomainResponse {
}
export interface createDomain {
}
export interface createDomainResponse {
}
export interface findAllTemplateDomains {
}
export interface findAllTemplateDomainsResponse {
}
export interface updateDomain {
}
export interface updateDomainResponse {
}
export interface deprecateDomain {
}
export interface deprecateDomainResponse {
}
export interface JobExecutionInfo {
	id: number;
	idSpecified: boolean;
	stepExecutionCount: number;
	jobId: number;
	jobIdSpecified: boolean;
	jobName: string;
	startDate: string;
	startTime: string;
	duration: string;
	jobParameters: string;
	restartable: boolean;
	abandonable: boolean;
	stoppable: boolean;
	timeZone: timeZone;
}
export interface timeZone {
	ID: string;
	rawOffset: number;
}
export interface list {
}
export interface listResponse {
}
export interface findDisplayFormulaString {
}
export interface findDisplayFormulaStringBody {
}
export interface findDisplayFormulaStringResponse {
}
export interface findDisplayFormulaStringResponseBody {
}
export interface StopJob {
}
export interface StopJobResponse {
}
export interface RestartJob {
}
export interface RestartJobResponse {
}
export interface BatchJobProgressStatus {
	currentProgress: number;
	currentProgressSpecified: boolean;
	totalProgressAmount: number;
	totalProgressAmountSpecified: boolean;
	statusDesc: string;
	errMessage: string;
	isFinished: boolean;
	isFinishedSpecified: boolean;
}
export interface findJobProgressStatusByExecutionId {
}
export interface findJobProgressStatusByExecutionIdResponse {
}
export interface findSuccessfullyFinishedJobsByName {
}
export interface findSuccessfullyFinishedJobsByNameResponse {
}
export interface findBatchJobDataImportByJobExecId {
}
export interface findBatchJobDataImportByJobExecIdResponse {
}
export interface loadAndExecuteJobByNameAndParameters {
}
export interface loadAndExecuteJobByNameAndParametersResponse {
}
export interface BatchJobStatusDto {
	jobName: string;
	batchJobExecutionInfoDtos: BatchJobExecutionInfoDto[];
}
export interface BatchJobExecutionInfoDto {
	executionId: number;
	executionIdSpecified: boolean;
	lastUpdated: Date;
	lastUpdatedSpecified: boolean;
	startTime: Date;
	startTimeSpecified: boolean;
	status: batchStatus;
	statusSpecified: boolean;
	parameters: KeyValueDto[];
	progressInfo: ProgressInfo;
}
export interface findBatchJobsStatus {
}
export interface findBatchJobsStatusResponse {
}
export interface findBathJobExecutions {
}
export interface findBathJobExecutionsResponse {
}
export interface AbandonJob {
}
export interface AbandonJobResponse {
}
export interface findByName {
}
export interface findByNameResponse {
}
export interface findEntityTypeById {
}
export interface findEntityTypeByIdResponse {
}
export interface createEntityType {
}
export interface createEntityTypeResponse {
}
export interface findAllEntityTypes {
}
export interface findAllEntityTypesResponse {
}
export interface createBusinessConceptInParent {
}
export interface createBusinessConceptInParentResponse {
}
export interface changeGlossaryName {
}
export interface changeGlossaryNameResponse {
}
export interface findGlossaryWithElementsById1 {
}
export interface findGlossaryWithElementsByIdResponse1 {
}
export interface findCustomMetadataByGlossaryId {
}
export interface findCustomMetadataByGlossaryIdResponse {
}
export interface findFullGlossaryById1 {
}
export interface findFullGlossaryByIdResponse1 {
}
export interface alterGlossaryElements {
}
export interface alterGlossaryElementsResponse {
}
export interface createFactTypesDefinitionLinkIfNotInGlossary {
}
export interface createFactTypesDefinitionLinkIfNotInGlossaryResponse {
}
export interface createFactTypeLink {
}
export interface createFactTypeLinkResponse {
}
export interface findGlossaryByViewgroupId1 {
}
export interface findGlossaryByViewgroupIdResponse1 {
}
export interface findGlossaryArtifactInGlossary {
}
export interface findGlossaryArtifactInGlossaryResponse {
}
export interface deleteGlossary {
}
export interface deleteGlossaryResponse {
}
export interface findGlossaryArtifactsByFactTypeDefinitionId {
}
export interface findGlossaryArtifactsByFactTypeDefinitionIdResponse {
}
export interface findGlossaryByViewGroupId2 {
}
export interface findGlossaryByViewGroupIdResponse2 {
}
export interface createBusinessConceptAsRoot {
}
export interface createBusinessConceptAsRootResponse {
}
export interface findQualifiersByGlossaryId {
}
export interface findQualifiersByGlossaryIdResponse {
}
export interface findAllGlossaries1 {
}
export interface findAllGlossariesResponse1 {
}
export interface findGlossariesByFactTypeDefinitionId {
}
export interface findGlossariesByFactTypeDefinitionIdResponse {
}
export interface moveFactTypeDefinitionToGlossary {
}
export interface moveFactTypeDefinitionToGlossaryResponse {
}
export interface findGlossaryById {
}
export interface findGlossaryByIdResponse {
}
export interface findGlossariesByCustomMetadataElementId {
}
export interface findGlossariesByCustomMetadataElementIdResponse {
}
export interface promoteFactType {
}
export interface promoteFactTypeResponse {
}
export interface createOrUpdateFactTypeAliasInWhiteBoardByGlossaryId {
}
export interface createOrUpdateFactTypeAliasInWhiteBoardByGlossaryIdResponse {
}
export interface findAllowedGlossariesByCurrentUser {
}
export interface findAllowedGlossariesByCurrentUserResponse {
}
export interface findDefaultGlossary {
}
export interface findDefaultGlossaryResponse {
}
export interface findGlossaryArtifactInGlossaryHierarchy {
}
export interface findGlossaryArtifactInGlossaryHierarchyResponse {
}
export interface findGlossaryWithQualifiersandCustomMetadataByViewGroupId1 {
}
export interface findGlossaryWithQualifiersandCustomMetadataByViewGroupIdResponse1 {
}
export interface EntityUsageDto {
	entityId: number;
	entityIdSpecified: boolean;
	entityType: EntityType;
	name: string;
	usageCount: number;
	usageCountSpecified: boolean;
}
export interface findCountOfUsedFactTypesInRfv {
}
export interface findCountOfUsedFactTypesInRfvResponse {
}
export interface findGlossaryFactTypeContainerByFactTypeDefintition {
}
export interface findGlossaryFactTypeContainerByFactTypeDefintitionResponse {
}
export interface findModelMappingsByGlossaryId {
}
export interface findModelMappingsByGlossaryIdResponse {
}
export interface changeAliasName {
}
export interface changeAliasNameResponse {
}
export interface GlossaryArtifactDto {
	glossaryArtifactType: GlossaryArtifactType;
	glossaryArtifactTypeSpecified: boolean;
	artifactName: string;
	factTypeId: number;
	dataType: DataType;
	dataTypeSpecified: boolean;
}
export interface findAllFactTypesAndAliasesInGlossary {
}
export interface findAllFactTypesAndAliasesInGlossaryResponse {
}
export interface findGlossaryArtifactInViewGroupHierarchy {
}
export interface findGlossaryArtifactInViewGroupHierarchyResponse {
}
export interface createFactTypeDefinitionLink {
}
export interface createFactTypeDefinitionLinkResponse {
}
export interface createGlossary1 {
}
export interface createGlossaryResponse1 {
}
export interface createOrUpdateFactTypeAliasInWhiteBoard {
}
export interface createOrUpdateFactTypeAliasInWhiteBoardResponse {
}
export interface findGlossaryWithQualifiersandCustomMetadataById {
}
export interface findGlossaryWithQualifiersandCustomMetadataByIdResponse {
}
export interface JobInfo {
	name: string;
	executionCount: number;
	launchable: boolean;
	incrementable: boolean;
	jobInstanceId: number;
	jobInstanceIdSpecified: boolean;
	instances: JobInstanceInfo[];
}
export interface JobInstanceInfo {
	id: number;
	idSpecified: boolean;
}
export interface details {
}
export interface detailsResponse {
}
export interface launch {
}
export interface launchResponse {
}
export interface findJobNames {
}
export interface findJobNamesResponse {
}
export interface findAllFileExtensions {
}
export interface findAllFileExtensionsResponse {
}
export interface download {
}
export interface downloadResponse {
}
export interface createOrUpdateFileType {
}
export interface createOrUpdateFileTypeResponse {
}
export interface deleteFileExtension {
}
export interface deleteFileExtensionResponse {
}
export interface downloadByAttachmentId {
}
export interface downloadByAttachmentIdResponse {
}
export interface findResourceBundle {
}
export interface findResourceBundleResponse {
}
export interface findValue {
}
export interface findValueResponse {
}
export interface CreatePullRequestDto {
	targetBranchId: number;
	bcdTaskId: number;
	effectiveDate: Date;
	effectiveDateSpecified: boolean;
}
export interface createPullRequestWithChangesForBcdTaskAssets {
}
export interface createPullRequestWithChangesForBcdTaskAssetsResponse {
}
export interface findByAssetDefinitionExistsInBranchWithPullRequestChanges {
}
export interface findByAssetDefinitionExistsInBranchWithPullRequestChangesResponse {
}
export interface findEffectiveDatesRangeByAssetAndRevisionId {
}
export interface findEffectiveDatesRangeByAssetAndRevisionIdResponse {
}
export interface BcdAndBcdTaskIdAndNameDto {
	bcdIdName: IdName;
	bcdTasksIdNames: IdName[];
}
export interface findBcdAndBcdTasksIdAndNameAvailableForPullRequest {
}
export interface findBcdAndBcdTasksIdAndNameAvailableForPullRequestResponse {
}
export interface updateProjectDetails {
}
export interface updateProjectDetailsResponse {
}
export interface nullableDateDto {
	date: Date;
	dateSpecified: boolean;
}
export interface PullRequestChangeElementDto {
	revisionElementDto: RevisionElementDto;
	pullRequestChangeId: number;
	pullRequestChangeIdSpecified: boolean;
	pullRequestChangeType: PullRequestChangeType;
	pullRequestChangeTypeSpecified: boolean;
	conflict: string;
}
export interface RevisionElementDto {
	entityId: number;
	entityIdSpecified: boolean;
	name: string;
	version: string;
	assetState: AssetState;
	assetStateSpecified: boolean;
	entityType: string;
	isLatestVersion: boolean;
	assetViewGroupId: number;
	assetDefinitionId: number;
	assetDefinitionIdSpecified: boolean;
	hasDeploymentDynamicProperties: boolean;
}
export interface addToPullRequest {
}
export interface addToPullRequestResponse {
}
export interface createBranchForRevision {
}
export interface createBranchForRevisionResponse {
}
export interface PullRequestElementValidationDto {
	entityType: string;
	entityId: number;
	entityIdSpecified: boolean;
	pullRequestChangeId: number;
	pullRequestChangeIdSpecified: boolean;
	newDeploymentDescriptorId: number;
	newDeploymentDescriptorIdSpecified: boolean;
	oldDeploymentDescriptorId: number;
	oldDeploymentDescriptorIdSpecified: boolean;
	canResolveOnlyOnPullRequestDraftStatus: boolean;
	violationMessages: ViolationMessage[];
}
export interface validatePullRequest {
}
export interface validatePullRequestResponse {
}
export interface validateAndRetireProject {
}
export interface validateAndRetireProjectResponse {
}
export interface ProjectTreeDto {
	branches: BranchTreeDto[];
	nodeDirections: NodeDirectionDto[];
}
export interface BranchTreeDto {
	branchId: number;
	branchName: string;
	creatorName: string;
	creationDate: Date;
	creationDateSpecified: boolean;
	revisionTreeNodeDtos: RevisionTreeNodeDto[];
	isRetired: boolean;
}
export interface RevisionTreeNodeDto {
	nodeId: number;
	revisionId: number;
	branchId: number;
	tag: string;
	creationDate: Date;
	creationDateSpecified: boolean;
	branchedOnDate: Date;
	branchedOnDateSpecified: boolean;
	isBranchedRevision: boolean;
	isRetired: boolean;
	isTagged: boolean;
}
export interface NodeDirectionDto {
	fromId: number;
	toId: number;
	type: NodeDirectionType;
	typeSpecified: boolean;
}
export interface findProjectTreePage {
}
export interface findProjectTreePageResponse {
}
export interface updateProjectStrategy {
}
export interface updateProjectStrategyResponse {
}
export interface SimpleRevisionComparisonDto {
	changes: PullRequestChangeElementDto[];
	impactedAssets: PullRequestChangeElementDto[];
}
export interface findComparisonBetweenTwoRevisionsOnDifferentBranches {
}
export interface findComparisonBetweenTwoRevisionsOnDifferentBranchesResponse {
}
export interface approvePullRequest {
}
export interface approvePullRequestResponse {
}
export interface createPullRequest {
}
export interface createPullRequestResponse {
}
export interface rejectPullRequest {
}
export interface rejectPullRequestResponse {
}
export interface PullRequestWithProjectDto {
	pullRequest: PullRequest;
	project: Project;
	allowedToApproveAndRejectPullRequest: boolean;
}
export interface findPullRequestsDetailsById {
}
export interface findPullRequestsDetailsByIdResponse {
}
export interface findPullRequestById {
}
export interface findPullRequestByIdResponse {
}
export interface untag {
}
export interface untagResponse {
}
export interface updateTag {
}
export interface updateTagResponse {
}
export interface submitPullRequest {
}
export interface submitPullRequestResponse {
}
export interface findViewGroupDescendantsWithRevisionElementsFlag {
}
export interface findViewGroupDescendantsWithRevisionElementsFlagResponse {
}
export interface findRevisionElementsToAddToPullRequestByViewGroupId {
}
export interface findRevisionElementsToAddToPullRequestByViewGroupIdResponse {
}
export interface findPullRequestChangeElements {
}
export interface findPullRequestChangeElementsResponse {
}
export interface createTag {
}
export interface createTagResponse {
}
export interface findProjectApprovalStrategy {
}
export interface findProjectApprovalStrategyResponse {
}
export interface findNumberOfPullRequestsForApprovalByBranchId {
}
export interface findNumberOfPullRequestsForApprovalByBranchIdResponse {
}
export interface isRevertPullRequestChangeAllowed {
}
export interface isRevertPullRequestChangeAllowedResponse {
}
export interface updateBcdTaskOnPullRequest {
}
export interface updateBcdTaskOnPullRequestResponse {
}
export interface findTagsByProjectId {
}
export interface findTagsByProjectIdResponse {
}
export interface findSimpleComparison {
}
export interface findSimpleComparisonResponse {
}
export interface updateBcdOnPullRequest {
}
export interface updateBcdOnPullRequestResponse {
}
export interface findProjectTree {
}
export interface findProjectTreeResponse {
}
export interface findRevisionsByBranchId {
}
export interface findRevisionsByBranchIdResponse {
}
export interface DeploymentDescriptorGridDto {
	columns: DeploymentDescriptorColumnDto[];
	rows: DeploymentDescriptorRowDto[];
	timestamp: number;
	timestampSpecified: boolean;
	defaultRelease: IdName;
	readOnly: boolean;
	messages: string[];
	hasDraftRecords: boolean;
}
export interface DeploymentDescriptorColumnDto {
	id: number;
	idSpecified: boolean;
	name: string;
	dataType: DataType;
	dataTypeSpecified: boolean;
	readOnly: boolean;
	columnType: ColumnTypeDto;
	columnTypeSpecified: boolean;
}
export interface DeploymentDescriptorRowDto {
	deploymentDescriptorId: number;
	deploymentDescriptorIdSpecified: boolean;
	updated: boolean;
	timestamp: number;
	timestampSpecified: boolean;
	readOnly: boolean;
	isFrozen: boolean;
	isLocked: boolean;
	isPendingToDelete: boolean;
	isDraft: boolean;
	deploymentDescriptorChangeType: deploymentDescriptorChangeType;
	deploymentDescriptorChangeTypeSpecified: boolean;
	isConflicted: boolean;
	messages: string[];
	cells: DeploymentDescriptorCellDto[];
	violationMessages: ViolationMessage[];
}
export interface DeploymentDescriptorCellDto {
	columnId: number;
	columnIdSpecified: boolean;
	columnType: ColumnTypeDto;
	columnTypeSpecified: boolean;
	stringValue: string;
	dateValue: Date;
	dateValueSpecified: boolean;
	booleanValue: boolean;
	id: number;
	idSpecified: boolean;
}
export interface addToPullRequestAndSavePreviousChanges {
}
export interface addToPullRequestAndSavePreviousChangesResponse {
}
export interface findTargetReleaseDateByPullRequestId {
}
export interface findTargetReleaseDateByPullRequestIdResponse {
}
export interface findHeadRevisionByBranchId {
}
export interface findHeadRevisionByBranchIdResponse {
}
export interface findBranchesByProjectId {
}
export interface findBranchesByProjectIdResponse {
}
export interface updateDeploymentDescriptor {
}
export interface updateDeploymentDescriptorResponse {
}
export interface findAssetsByBranchId {
}
export interface findAssetsByBranchIdResponse {
}
export interface validateAndRetireBranch {
}
export interface validateAndRetireBranchResponse {
}
export interface findLastSnapshotTagName {
}
export interface findLastSnapshotTagNameResponse {
}
export interface checkIfNewAssetExists {
}
export interface checkIfNewAssetExistsResponse {
}
export interface discardPullRequest {
}
export interface discardPullRequestResponse {
}
export interface findProjectsInViewGroupHierarchy {
}
export interface findProjectsInViewGroupHierarchyResponse {
}
export interface findComparisonBetweenTwoRevisionsInSameBranch {
}
export interface findComparisonBetweenTwoRevisionsInSameBranchResponse {
}
export interface updatePullRequestDescription {
}
export interface updatePullRequestDescriptionResponse {
}
export interface findProjectsByViewGroupId {
}
export interface findProjectsByViewGroupIdResponse {
}
export interface findAssetsByRevisionId {
}
export interface findAssetsByRevisionIdResponse {
}
export interface CreateProjectDto {
	viewGroupId: number;
	projectId: number;
	projectName: string;
	projectDescription: string;
	ownersFlowApprovalStrategy: OwnersFlowApprovalStrategy;
}
export interface createProject {
}
export interface createProjectResponse {
}
export interface updateProjectOwners {
}
export interface updateProjectOwnersResponse {
}
export interface findProjectWithOwnersFlowApprovalStrategyOwnersAndViewGroupByProjectId {
}
export interface findProjectWithOwnersFlowApprovalStrategyOwnersAndViewGroupByProjectIdResponse {
}
export interface BranchDto {
	id: number;
	branchName: string;
	branchDescription: string;
	releaseTargetEffectiveDate: Date;
	releaseTargetEffectiveDateSpecified: boolean;
}
export interface updateBranch {
}
export interface updateBranchResponse {
}
export interface findAssetsWithAppliedChangesByBranchId {
}
export interface findAssetsWithAppliedChangesByBranchIdResponse {
}
export interface createMergePullRequest {
}
export interface createMergePullRequestResponse {
}
export interface RevisionElementAdditionalInfoDto {
	revision: Revision;
	pullRequest: PullRequest;
	approwers: OwnerVote[];
	isFromMigration: boolean;
}
export interface findRevisionElementAdditionalInfoDtoByRevisionAndAssetId {
}
export interface findRevisionElementAdditionalInfoDtoByRevisionAndAssetIdResponse {
}
export interface findBranchDtoByBranchId {
}
export interface findBranchDtoByBranchIdResponse {
}
export interface UserPullRequestsDto {
	defaultProjectOwnersFlowApprovalStrategy: OwnersFlowApprovalStrategy;
	pendingVoteCandidates: PullRequest[];
	pendingSubmissionDraft: PullRequest[];
	candidatesAlreadyVoted: PullRequest[];
	candidatesAlreadySubmitted: PullRequest[];
}
export interface findPullRequestsForCurrentUserByBranchId {
}
export interface findPullRequestsForCurrentUserByBranchIdResponse {
}
export interface removeFromPullRequest {
}
export interface removeFromPullRequestResponse {
}
export interface revertPullRequestChangesForAsset {
}
export interface revertPullRequestChangesForAssetResponse {
}
export interface AssetAdditionalInfoRefsDto {
	otherVersions: RepoNavigatorSetWithCommonEntityTypeDto;
	whiteboardsUsedIn: RepoNavigatorSetWithCommonEntityTypeDto;
}
export interface RepoNavigatorSetWithCommonEntityTypeDto {
	entityType: EntityType;
	repoNavigatorDtos: RepositoryNevigatorDto[];
	resultsNotIncluded: number;
}
export interface RepositoryNevigatorDto {
	id: number;
	idSpecified: boolean;
	name: string;
	entityType: EntityType;
	assetState: AssetState;
	assetStateSpecified: boolean;
	bcdName: string;
	ruleRowFullDescription: string;
	createdBy: string;
	approvedBy: string;
	versionInc: VersionInc;
	versionIncSpecified: boolean;
	versionLabel: string;
	editNumber: number;
	isVgGlossary: boolean;
	isVgHasChildren: boolean;
	singleParentViewGroup: IdName;
	viewGroupId: number;
	viewGroupIdSpecified: boolean;
	hasSingleOrNoContext: boolean;
	isLatesVersionInQueryContext: boolean;
	assignedDate: Date;
	assignedDateSpecified: boolean;
	creationDate: Date;
	creationDateSpecified: boolean;
	contextId: number;
	contextIdSpecified: boolean;
	contextName: string;
	parentId: number;
	parentIdSpecified: boolean;
	parentName: string;
	assetDefinitionId: number;
	assetDefinitionIdSpecified: boolean;
	factTypeRepoNaviDto: FactTypeRepoNaviDto;
}
export interface FactTypeRepoNaviDto {
	glossaryName: string;
	businessConceptName: string;
	glossaryArtifactType: GlossaryArtifactType;
	glossaryArtifactTypeSpecified: boolean;
	isFormula: boolean;
	isFormulaSpecified: boolean;
	isList: boolean;
	isListSpecified: boolean;
	alias: string;
}
export interface RuleFamilyViewAddInfoRefsDto extends AssetAdditionalInfoRefsDto {
	factTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	rfvsWithSameConclusion: RepoNavigatorSetWithCommonEntityTypeDto;
	conditionFactTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	conditionCellFactTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	conclusionCellFactTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	messageFactTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	decisionViews: RepoNavigatorSetWithCommonEntityTypeDto;
}
export interface FactTypeAddInfoResultsRefsDto extends AssetAdditionalInfoRefsDto {
	ruleFamilyViews: RepoNavigatorSetWithCommonEntityTypeDto;
	decisionViews: RepoNavigatorSetWithCommonEntityTypeDto;
	conclusionOfRuleFamilyViews: RepoNavigatorSetWithCommonEntityTypeDto;
	conclusionOfDecisionViews: RepoNavigatorSetWithCommonEntityTypeDto;
	rfvMessagesRuleFamilyViews: RepoNavigatorSetWithCommonEntityTypeDto;
}
export interface DecisionViewAddInfoDtoRefs extends AssetAdditionalInfoRefsDto {
	factTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	ruleFamilyViews: RepoNavigatorSetWithCommonEntityTypeDto;
	viewGroups: RepoNavigatorSetWithCommonEntityTypeDto;
	decisionViewsWithSameConc: RepoNavigatorSetWithCommonEntityTypeDto;
	releases: RepoNavigatorSetWithCommonEntityTypeDto;
	branches: RepoNavigatorSetWithCommonEntityTypeDto;
	ruleFlows: RepoNavigatorSetWithCommonEntityTypeDto;
}
export interface RuleFlowAddInfoRefsDto extends AssetAdditionalInfoRefsDto {
	factTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	viewGroups: RepoNavigatorSetWithCommonEntityTypeDto;
	decisionViewCount: RepoNavigatorSetWithCommonEntityTypeDto;
	releases: RepoNavigatorSetWithCommonEntityTypeDto;
	branches: RepoNavigatorSetWithCommonEntityTypeDto;
}
export interface getRuleFamilyViewAdditionalInfoRefs {
}
export interface getRuleFamilyViewAdditionalInfoRefsResponse {
}
export interface AssetAdditionalInfo {
	properties: AdditionalInfoPropertiesDto;
	bcdId: number;
	bcdName: string;
	versionCount: number;
	whiteboardCount: number;
}
export interface AdditionalInfoPropertiesDto {
	createdBy: IdName;
	approvedBy: IdName;
	createdOn: Date;
	createdOnSpecified: boolean;
	approvedOn: Date;
	approvedOnSpecified: boolean;
	versionLabel: string;
	assetState: AssetState;
	assetStateSpecified: boolean;
}
export interface RuleFamilyViewAddInfoDto extends AssetAdditionalInfo {
	factTypesCount: number;
	rfvsWithSameConclusionCount: number;
	conditionFactTypesCount: number;
	conditionCellFactTypesCount: number;
	conclusionCellFactTypesCount: number;
	messageFactTypesCount: number;
	decisionViewsCount: number;
}
export interface RuleFlowAddInfoDto extends AssetAdditionalInfo {
	factTypesCount: number;
	decisionViewCount: number;
	viewGroupsCount: number;
	releasesCount: number;
	branchesCount: number;
}
export interface FactTypeAddInfoDto extends AssetAdditionalInfo {
	ruleFamilyViewsCount: number;
	decisionViewsCount: number;
	rfvConclusionCount: number;
	dvConclusionCount: number;
	ruleFlowsCount: number;
	rfvMessagesCount: number;
}
export interface DecisionViewAddInfoDto extends AssetAdditionalInfo {
	factTypesCount: number;
	ruleFamilyViewCount: number;
	viewGroupsCount: number;
	decisionViewsWithSameConclusionCount: number;
	releasesCount: number;
	branchesCount: number;
	ruleFlowsCount: number;
}
export interface getRuleFamilyViewAdditionalInfo {
}
export interface getRuleFamilyViewAdditionalInfoResponse {
}
export interface getDecisionViewAdditionalInfo {
}
export interface getDecisionViewAdditionalInfoResponse {
}
export interface getRuleFlowAdditionalInfoRefs {
}
export interface getRuleFlowAdditionalInfoRefsResponse {
}
export interface getOtherVersionsRefs {
}
export interface getOtherVersionsRefsResponse {
}
export interface ViewGroupAddInfoDto {
	viewGroupsRecursiveCount: number;
	decisionViewsRecursiveCount: number;
	ruleFamilyViewsRecursiveCount: number;
	factTypesUsedRecursiveCount: number;
}
export interface getViewGroupAdditionalInfo {
}
export interface getViewGroupAdditionalInfoResponse {
}
export interface getFactTypeAdditionalInfo {
}
export interface getFactTypeAdditionalInfoResponse {
}
export interface getDecisionViewAdditionalInfoRefs {
}
export interface getDecisionViewAdditionalInfoRefsResponse {
}
export interface getFactTypeAdditionalInfoRefs {
}
export interface getFactTypeAdditionalInfoRefsResponse {
}
export interface appInfo {
}
export interface appInfoResponse {
}
export interface getRuleFlowAdditionalInfo {
}
export interface getRuleFlowAdditionalInfoResponse {
}
export interface createDescriptorToReleaseElements {
}
export interface createDescriptorToReleaseElementsResponse {
}
export interface findDeploymentDescriptorDifference {
}
export interface findDeploymentDescriptorDifferenceResponse {
}
export interface revertAuthorizedUserDeploymentDescriptorsInGrid {
}
export interface revertAuthorizedUserDeploymentDescriptorsInGridResponse {
}
export interface findViewGroupsTreeForNewDeploymentDescriptorEntry {
}
export interface findViewGroupsTreeForNewDeploymentDescriptorEntryResponse {
}
export interface deleteDescriptorMetadataTemplate {
}
export interface deleteDescriptorMetadataTemplateResponse {
}
export interface findNoneDescriptorReleaseElements {
}
export interface findNoneDescriptorReleaseElementsResponse {
}
export interface ReleaseElementDto {
	entityId: number;
	entityIdSpecified: boolean;
	name: string;
	version: string;
	assetState: AssetState;
	assetStateSpecified: boolean;
	approvedBy: string;
	approvedDate: Date;
	approvedDateSpecified: boolean;
	entityType: string;
	isLatestVersion: boolean;
}
export interface ReleaseElementExtendedDto extends ReleaseElementDto {
	bcdName: string;
	bcdTaskName: string;
	viewGroupName: string;
}
export interface findReleaseMissingElementsHaveDescriptorsInRelease {
}
export interface findReleaseMissingElementsHaveDescriptorsInReleaseResponse {
}
export interface commitDeploymentDescriptorsGrid {
}
export interface commitDeploymentDescriptorsGridResponse {
}
export interface findLastApprovedDescriptor {
}
export interface findLastApprovedDescriptorResponse {
}
export interface findDeploymentDescriptorComparison {
}
export interface findDeploymentDescriptorComparisonResponse {
}
export interface findDescriptorMetadataTemplatesInHierarchy {
}
export interface findDescriptorMetadataTemplatesInHierarchyResponse {
}
export interface getDeploymentDescriptorsGridByIdAndType {
}
export interface getDeploymentDescriptorsGridByIdAndTypeResponse {
}
export interface findDeploymentDescriptorDifferenceForMerge {
}
export interface findDeploymentDescriptorDifferenceForMergeResponse {
}
export interface getDeploymentDescriptorsGridWithValidationsByIdAndType {
}
export interface getDeploymentDescriptorsGridWithValidationsByIdAndTypeResponse {
}
export interface saveDeploymentDescriptorsGrid {
}
export interface saveDeploymentDescriptorsGridResponse {
}
export interface saveMetaDataTemplatesInDescriptorViewGroup {
}
export interface saveMetaDataTemplatesInDescriptorViewGroupResponse {
}
export interface findDescriptorMetadataTemplatesInViewGroupSubAndParentHierarchyByIdAndType {
}
export interface findDescriptorMetadataTemplatesInViewGroupSubAndParentHierarchyByIdAndTypeResponse {
}
export interface findAvailableReleaseElementsUnderViewGroupForNewDeploymentDescriptorEntry {
}
export interface findAvailableReleaseElementsUnderViewGroupForNewDeploymentDescriptorEntryResponse {
}
export interface ExternalSetInstanceDto {
	id: number;
	name: string;
	description: string;
	providerProperties: PropertyDataDto[];
	providerIdentifier: string;
	providerExist: boolean;
	viewGroupId: number;
	lastModified: Date;
	lastModifiedSpecified: boolean;
	isActive: boolean;
	dataType: DataType;
	dataTypeSpecified: boolean;
	structureType: ExternalSetStructureType;
	structureTypeSpecified: boolean;
}
export interface PropertyDataDto {
	propertyName: string;
	value: string;
	optional: boolean;
}
export interface findFullExternalSetInstanceByDomainId {
}
export interface findFullExternalSetInstanceByDomainIdResponse {
}
export interface findExternalSetProviderProperties {
}
export interface findExternalSetProviderPropertiesResponse {
}
export interface getActiveExternalSetInstancesByViewGroupId {
}
export interface getActiveExternalSetInstancesByViewGroupIdResponse {
}
export interface findAllExternalSetInstances {
}
export interface findAllExternalSetInstancesResponse {
}
export interface getValueAdditionalInfo {
}
export interface getValueAdditionalInfoResponse {
}
export interface QueryRequestDto {
	maxResult: number;
	pageNumber: number;
	usePagination: boolean;
	populateBranches: boolean;
	operands: QueryOperandDataDto[];
	externalSetFindLevels: ExternalSetFindLevel[];
	selectedNodeId: string;
}
export interface QueryOperandDataDto {
	name: string;
	value: string;
}
export interface QueryResultDto {
	columnIdentifier: string;
	totalRowResult: number;
	headerTitles: string[];
	rows: RowResultDto[];
}
export interface RowResultDto {
	rowIdentifier: string;
	queryBranch: KeyValueDto[];
	cells: KeyValueDto[];
}
export interface getValidValues {
}
export interface getValidValuesResponse {
}
export interface ExternalSetDefinitionDto {
	identifier: string;
	name: string;
	structureType: ExternalSetStructureType;
	structureTypeSpecified: boolean;
}
export interface findAllExternalSetProviders {
}
export interface findAllExternalSetProvidersResponse {
}
export interface findFullExternalSetInstanceById {
}
export interface findFullExternalSetInstanceByIdResponse {
}
export interface getExternalSetInstancesByViewGroupId {
}
export interface getExternalSetInstancesByViewGroupIdResponse {
}
export interface updateExternalSetInstance {
}
export interface updateExternalSetInstanceResponse {
}
export interface createExternalSetInstance {
}
export interface createExternalSetInstanceResponse {
}
export interface deleteExternalSetInstance {
}
export interface deleteExternalSetInstanceResponse {
}
export interface getPageSize {
}
export interface getPageSizeResponse {
}
export interface getQueryStructure {
}
export interface getQueryStructureResponse {
}
export interface deleteRole {
}
export interface deleteRoleResponse {
}
export interface validateUserRole {
}
export interface validateUserRoleResponse {
}
export interface findRolesByUserId {
}
export interface findRolesByUserIdResponse {
}
export interface updateUser {
}
export interface updateUserResponse {
}
export interface synchronizeUserSecurityFromExternalByName {
}
export interface synchronizeUserSecurityFromExternalByNameResponse {
}
export interface findUser {
}
export interface findUserResponse {
}
export interface deletePermissionGroup {
}
export interface deletePermissionGroupResponse {
}
export interface removePermissionFromGroup {
}
export interface removePermissionFromGroupResponse {
}
export interface findPermissionGroup {
}
export interface findPermissionGroupResponse {
}
export interface addRole {
}
export interface addRoleResponse {
}
export interface findCurrentUser {
}
export interface findCurrentUserResponse {
}
export interface registerUser {
}
export interface registerUserResponse {
}
export interface addPermissionGroup {
}
export interface addPermissionGroupResponse {
}
export interface isSystemInMaintenanceMode {
}
export interface isSystemInMaintenanceModeResponse {
}
export interface SecurityInitDataDto {
	allRoles: Role[];
	viewGroupIdsToRolesEntries: ViewGroupIdsToRolesEntry[];
}
export interface ViewGroupIdsToRolesEntry {
	viewGroupIds: number[];
	roles: Role[];
}
export interface findSecurityInitializationParameters {
}
export interface findSecurityInitializationParametersResponse {
}
export interface SecurityDto {
	id: number;
	idSpecified: boolean;
	name: string;
	description: string;
	associatedIds: number[];
}
export interface findAllPermissionGroupsWithRoles {
}
export interface findAllPermissionGroupsWithRolesResponse {
}
export interface findDvToVgAssociationApprovers {
}
export interface findDvToVgAssociationApproversResponse {
}
export interface findRole {
}
export interface findRoleResponse {
}
export interface findRolesByPermissionGroup {
}
export interface findRolesByPermissionGroupResponse {
}
export interface updatePermissionGroup {
}
export interface updatePermissionGroupResponse {
}
export interface removePremissionGroupFromRole {
}
export interface removePremissionGroupFromRoleResponse {
}
export interface findAllPermissions {
}
export interface findAllPermissionsResponse {
}
export interface updateRole {
}
export interface updateRoleResponse {
}
export interface addUser {
}
export interface addUserResponse {
}
export interface findUsersByPermissionType {
}
export interface findUsersByPermissionTypeResponse {
}
export interface findAllPermissionWithGroups {
}
export interface findAllPermissionWithGroupsResponse {
}
export interface findUsersWithPermissionsInViewGroup {
}
export interface findUsersWithPermissionsInViewGroupResponse {
}
export interface SecuritySettingsManagedEternallyDto {
	userDetailsManagement: boolean;
	userDetailsManagementSpecified: boolean;
	permissionManagement: boolean;
	permissionManagementSpecified: boolean;
	roleManagement: boolean;
	roleManagementSpecified: boolean;
	userRoleManagement: boolean;
	userRoleManagementSpecified: boolean;
	userRoleViewGroupManagement: boolean;
	userRoleViewGroupManagementSpecified: boolean;
}
export interface findSecuritySettingsManagedByExternalSystem {
}
export interface findSecuritySettingsManagedByExternalSystemResponse {
}
export interface addPermissionGroupToRole {
}
export interface addPermissionGroupToRoleResponse {
}
export interface validateRole {
}
export interface validateRoleResponse {
}
export interface createPermission {
}
export interface createPermissionResponse {
}
export interface addPermissionToGroup {
}
export interface addPermissionToGroupResponse {
}
export interface findAllPermissionGroups {
}
export interface findAllPermissionGroupsResponse {
}
export interface validatePermission {
}
export interface validatePermissionResponse {
}
export interface findAllRoles {
}
export interface findAllRolesResponse {
}
export interface findAllUsers {
}
export interface findAllUsersResponse {
}
export interface removePermissionGroupFromRole {
}
export interface removePermissionGroupFromRoleResponse {
}
export interface findViewGroupAuthorizedUsersWithExperationCheck {
}
export interface findViewGroupAuthorizedUsersWithExperationCheckResponse {
}
export interface findOrCreateTransientModelMappingByVersionAndRowMessageCategory {
}
export interface findOrCreateTransientModelMappingByVersionAndRowMessageCategoryResponse {
}
export interface revertModelMapping {
}
export interface revertModelMappingResponse {
}
export interface unmarkModelMapping {
}
export interface unmarkModelMappingResponse {
}
export interface findOrCreateTransientModelMappingByVersionAndFactTypeDefinition {
}
export interface findOrCreateTransientModelMappingByVersionAndFactTypeDefinitionResponse {
}
export interface isModelDefinitionInUse {
}
export interface isModelDefinitionInUseResponse {
}
export interface findAllModelMappingsByGlossaryId {
}
export interface findAllModelMappingsByGlossaryIdResponse {
}
export interface updateModelDefinitionCustomPropertyTemplate {
}
export interface updateModelDefinitionCustomPropertyTemplateResponse {
}
export interface createModelVersion {
}
export interface createModelVersionResponse {
}
export interface deleteModelDefinition {
}
export interface deleteModelDefinitionResponse {
}
export interface ModelDefinitionDescriptionDto {
	modelDefinitionName: string;
	modelDefinitionId: number;
	modelDefinitionIdSpecified: boolean;
	versions: ModelDefinitionVersionDescriptionDto[];
}
export interface ModelDefinitionVersionDescriptionDto {
	versionName: string;
	versionId: number;
	versionIdSpecified: boolean;
	inUse: boolean;
	inUseSpecified: boolean;
	modelMappingStatus: ModelMappingStatus;
	modelMappingStatusSpecified: boolean;
	changedStatus: ChangedStatus;
	changedStatusSpecified: boolean;
	frozen: boolean;
}
export interface findModelDefinitionDescriptionTreeDto {
}
export interface findModelDefinitionDescriptionTreeDtoResponse {
}
export interface findFullModelDefinitionById {
}
export interface findFullModelDefinitionByIdResponse {
}
export interface updateOrCreateModelMappingByRowMessageCategoryId {
}
export interface updateOrCreateModelMappingByRowMessageCategoryIdResponse {
}
export interface markModelMappingAsDeleted {
}
export interface markModelMappingAsDeletedResponse {
}
export interface unfreezeModelVersion {
}
export interface unfreezeModelVersionResponse {
}
export interface createModelMapping {
}
export interface createModelMappingResponse {
}
export interface isModelVersionInUse {
}
export interface isModelVersionInUseResponse {
}
export interface freezeModelVersion {
}
export interface freezeModelVersionResponse {
}
export interface findFullModelDefinitionByName {
}
export interface findFullModelDefinitionByNameResponse {
}
export interface validateFactTypeModelMapping {
}
export interface validateFactTypeModelMappingResponse {
}
export interface getFactTypesForModelVersion {
}
export interface getFactTypesForModelVersionResponse {
}
export interface findAllModelDefinitions {
}
export interface findAllModelDefinitionsResponse {
}
export interface findModelDefinitionDescriptionTreeDtoByRowMessageCategory {
}
export interface findModelDefinitionDescriptionTreeDtoByRowMessageCategoryResponse {
}
export interface createModelDefinition {
}
export interface createModelDefinitionResponse {
}
export interface updateOrCreateModelMappingByFactTypeDefinitionId {
}
export interface updateOrCreateModelMappingByFactTypeDefinitionIdResponse {
}
export interface findAllModelDefinitionsFull {
}
export interface findAllModelDefinitionsFullResponse {
}
export interface findAllModelMappings {
}
export interface findAllModelMappingsResponse {
}
export interface updateModelDefinition {
}
export interface updateModelDefinitionResponse {
}
export interface generateReportAsynchronously {
}
export interface generateReportAsynchronouslyResponse {
}
export interface ReportDto {
	id: string;
	name: string;
	description: string;
	parameters: ReportParamDto[];
	hasTemplate: boolean;
}
export interface ReportParamDto {
	paramId: string;
	name: string;
	description: string;
	optional: boolean;
	hasValidValues: boolean;
	dataType: string;
	order: number;
	defaultValue: string;
	dependsOn: string[];
}
export interface findAllReports {
}
export interface findAllReportsResponse {
}
export interface validateReport {
}
export interface validateReportResponse {
}
export interface generateReport {
}
export interface generateReportResponse {
}
export interface getPageTypes {
}
export interface getPageTypesResponse {
}
export interface ReportOutputTypeDto {
	extention: string;
	outputTypeKey: string;
	outputTypeValue: string;
	reportExportHandler: ReportExportHandlerEnum;
	reportExportHandlerSpecified: boolean;
}
export interface getOutputTypes {
}
export interface getOutputTypesResponse {
}
export interface generateReportToQueue {
}
export interface generateReportToQueueResponse {
}
export interface findReportParameterValidValues {
}
export interface findReportParameterValidValuesResponse {
}
export interface findWorkFlowAnalyzerReports {
}
export interface findWorkFlowAnalyzerReportsResponse {
}
export interface findCandidateReleaseElementDtoByViewGroup {
}
export interface findCandidateReleaseElementDtoByViewGroupResponse {
}
export interface updateReleaseWithDynamicProperties {
}
export interface updateReleaseWithDynamicPropertiesResponse {
}
export interface updateFromReleaseContent {
}
export interface updateFromReleaseContentResponse {
}
export interface addElementToRelease {
}
export interface addElementToReleaseResponse {
}
export interface unfreezeRelease {
}
export interface unfreezeReleaseResponse {
}
export interface findReleaseElements {
}
export interface findReleaseElementsResponse {
}
export interface findReleaseByDecisionViewId {
}
export interface findReleaseByDecisionViewIdResponse {
}
export interface findApprovalStrategy2 {
}
export interface findApprovalStrategyResponse2 {
}
export interface getApprovedReleaseElementDtoByViewGroupId {
}
export interface getApprovedReleaseElementDtoByViewGroupIdResponse {
}
export interface demoteTagToSnapshot {
}
export interface demoteTagToSnapshotResponse {
}
export interface untargetAllOpenBcdTasksForRelease {
}
export interface untargetAllOpenBcdTasksForReleaseResponse {
}
export interface updateEffectiveDates {
}
export interface updateEffectiveDatesResponse {
}
export interface isTagSynchronizedWithRelease {
}
export interface isTagSynchronizedWithReleaseResponse {
}
export interface updateRelease {
}
export interface updateReleaseResponse {
}
export interface compareTagToRelease {
}
export interface compareTagToReleaseResponse {
}
export interface ReleaseWithOriginViewGroupDto {
	release: Release;
	viewGroup: ViewGroup;
}
export interface createReleaseInViewGroup {
}
export interface createReleaseInViewGroupResponse {
}
export interface releaseDto {
	creationDate: Date;
	creationDateSpecified: boolean;
	creator: IdName;
	description: string;
	displayName: string;
	elements: ReleaseElementDto[];
	id: number;
	idSpecified: boolean;
	modified: boolean;
	name: string;
	releaseType: ReleaseType;
	releaseTypeSpecified: boolean;
	synchronized: boolean;
}
export interface findDetailedTagsByRelease {
}
export interface findDetailedTagsByReleaseResponse {
}
export interface findReleaseWithDecisionViewsByBcdTask {
}
export interface findReleaseWithDecisionViewsByBcdTaskResponse {
}
export interface ReleaseHistoryRecordDto {
	type: RecordType;
	typeSpecified: boolean;
	changeDate: Date;
	changeDateSpecified: boolean;
	asset: AssetDto;
	viewGroup: IdName;
	originTask: IdName;
	user: IdName;
}
export interface findReleaseHistoryRecordsBetweenDates {
}
export interface findReleaseHistoryRecordsBetweenDatesResponse {
}
export interface RetiredReleaseDto {
	release: Release;
	viewGroup: ViewGroup;
	retiredDate: Date;
	retiredDateSpecified: boolean;
	retiredBy: User;
}
export interface findRetiredReleases {
}
export interface findRetiredReleasesResponse {
}
export interface promoteFromSnapshotTag {
}
export interface promoteFromSnapshotTagResponse {
}
export interface branchRelease {
}
export interface branchReleaseResponse {
}
export interface findWbAssetMissingFromRelease {
}
export interface findWbAssetMissingFromReleaseResponse {
}
export interface moveReleaseToViewGroup {
}
export interface moveReleaseToViewGroupResponse {
}
export interface removeElementFromRelease {
}
export interface removeElementFromReleaseResponse {
}
export interface restoreRelease {
}
export interface restoreReleaseResponse {
}
export interface updateApprovalStrategy2 {
}
export interface updateApprovalStrategyResponse2 {
}
export interface findTagsByRelease {
}
export interface findTagsByReleaseResponse {
}
export interface retireRelease {
}
export interface retireReleaseResponse {
}
export interface addElementsToRelease {
}
export interface addElementsToReleaseResponse {
}
export interface findReleaseWithAssets {
}
export interface findReleaseWithAssetsResponse {
}
export interface getDefaultTagName {
}
export interface getDefaultTagNameResponse {
}
export interface findReleasesWithOriginViewGroup {
}
export interface findReleasesWithOriginViewGroupResponse {
}
export interface freezeRelease {
}
export interface freezeReleaseResponse {
}
export interface findReleaseWithDecisionViews {
}
export interface findReleaseWithDecisionViewsResponse {
}
export interface NotesDto {
	notes: Note[];
	notesEditible: boolean;
	notesEditibleSpecified: boolean;
}
export interface findNotesByEntity {
}
export interface findNotesByEntityResponse {
}
export interface updateNotesByEntity {
}
export interface updateNotesByEntityResponse {
}
export interface updateAndReloadNotesByEntity {
}
export interface updateAndReloadNotesByEntityResponse {
}
export interface registerUser1 {
}
export interface registerUserResponse1 {
}
export interface removeUserFromViewGroup {
}
export interface removeUserFromViewGroupResponse {
}
export interface recalculateAllLogicalSigns {
}
export interface recalculateAllLogicalSignsResponse {
}
export interface getFullRuleRowDescriptionByRuleRowAndDecisionView {
}
export interface getFullRuleRowDescriptionByRuleRowAndDecisionViewResponse {
}
export interface replaceRfvInDv {
}
export interface replaceRfvInDvResponse {
}
export interface removeUserRoleFromViewGroup {
}
export interface removeUserRoleFromViewGroupResponse {
}
export interface retireFileAssets {
}
export interface retireFileAssetsResponse {
}
export interface convertRepoQueryReplaceConditionReleaseWithBranch {
}
export interface convertRepoQueryReplaceConditionReleaseWithBranchResponse {
}
export interface fixFactTypeWithDataType {
}
export interface fixFactTypeWithDataTypeResponse {
}
export interface findFormulaFunction {
}
export interface findFormulaFunctionResponse {
}
export interface ViewGroupUserRolesDto {
	user: User;
	directRoles: Role[];
	inheritedRoles: InheritedRoleDto[];
}
export interface InheritedRoleDto {
	role: Role;
	originViewGroup: ViewGroup;
}
export interface findUserRoles {
}
export interface findUserRolesResponse {
}
export interface trimCellContent {
}
export interface trimCellContentResponse {
}
export interface updateCategory {
}
export interface updateCategoryResponse {
}
export interface calculateDeploymentDescriptorIdentifierHashIdByViewGroup {
}
export interface calculateDeploymentDescriptorIdentifierHashIdByViewGroupResponse {
}
export interface transformFormulaForImportById {
}
export interface transformFormulaForImportByIdResponse {
}
export interface setDefaultBcdManager {
}
export interface setDefaultBcdManagerResponse {
}
export interface addSystemProperty {
}
export interface addSystemPropertyResponse {
}
export interface recalculateAllSignsBySignType {
}
export interface recalculateAllSignsBySignTypeResponse {
}
export interface findAllFormulaFunctions {
}
export interface findAllFormulaFunctionsResponse {
}
export interface findApprovedDvWithRejectedRfv {
}
export interface findApprovedDvWithRejectedRfvResponse {
}
export interface findDefaultBcdManager {
}
export interface findDefaultBcdManagerResponse {
}
export interface networkSpeedTest {
}
export interface networkSpeedTestResponse {
}
export interface replaceRuleRowExternalSign {
}
export interface replaceRuleRowExternalSignResponse {
}
export interface addFormulaFunction {
}
export interface addFormulaFunctionResponse {
}
export interface findAllCategories {
}
export interface findAllCategoriesResponse {
}
export interface updateView {
}
export interface updateViewResponse {
}
export interface findCatrgoriesInHierarchyByViewGroupIdWithReuseFlag {
}
export interface findCatrgoriesInHierarchyByViewGroupIdWithReuseFlagResponse {
}
export interface generateModelMappingLogicalValue {
}
export interface generateModelMappingLogicalValueResponse {
}
export interface exportPartialDbToXml {
}
export interface exportPartialDbToXmlResponse {
}
export interface findAllViews {
}
export interface findAllViewsResponse {
}
export interface removeDynamicPropertiesWithSameTemplateInAsset {
}
export interface removeDynamicPropertiesWithSameTemplateInAssetResponse {
}
export interface deleteVerb {
}
export interface deleteVerbResponse {
}
export interface resetUserPassword {
}
export interface resetUserPasswordResponse {
}
export interface recalculateExternalSignForRow {
}
export interface recalculateExternalSignForRowResponse {
}
export interface findView {
}
export interface findViewResponse {
}
export interface swapRejectedFactTypeNames_FIX_FOR_JPMC {
}
export interface swapRejectedFactTypeNames_FIX_FOR_JPMCResponse {
}
export interface deleteFormulaFunction {
}
export interface deleteFormulaFunctionResponse {
}
export interface transformFormulaForImport {
}
export interface transformFormulaForImportResponse {
}
export interface findCatrgoriesInHierarchyByViewGroupId {
}
export interface findCatrgoriesInHierarchyByViewGroupIdResponse {
}
export interface recalculateRuleRowsExternalSignExcludeBcd {
}
export interface recalculateRuleRowsExternalSignExcludeBcdResponse {
}
export interface findWithThrowsBdmsExpSimulateErrorForClientRetry {
}
export interface findWithThrowsBdmsExpSimulateErrorForClientRetryResponse {
}
export interface createSimulateErrorForClientRetry {
}
export interface createSimulateErrorForClientRetryResponse {
}
export interface createRepoQueryAttribute {
}
export interface createRepoQueryAttributeResponse {
}
export interface indexStatus {
}
export interface indexStatusResponse {
}
export interface deleteRejectedOrDraftOrphanRuleFamilyViewById {
}
export interface deleteRejectedOrDraftOrphanRuleFamilyViewByIdResponse {
}
export interface addView {
}
export interface addViewResponse {
}
export interface fixFactType {
}
export interface fixFactTypeResponse {
}
export interface rebuildIndex {
}
export interface rebuildIndexResponse {
}
export interface recalculateInternalSignForRow {
}
export interface recalculateInternalSignForRowResponse {
}
export interface deleteInactiveUserAllAnalysisWhiteboards {
}
export interface deleteInactiveUserAllAnalysisWhiteboardsResponse {
}
export interface updateFormulaFunction {
}
export interface updateFormulaFunctionResponse {
}
export interface reportFactTypeWithDataTypeIndicator {
}
export interface reportFactTypeWithDataTypeIndicatorResponse {
}
export interface isSimulateErrorForClientRetry {
}
export interface isSimulateErrorForClientRetryResponse {
}
export interface setWorkflowToAllowAnyUserByName {
}
export interface setWorkflowToAllowAnyUserByNameResponse {
}
export interface reportMultipleFactTypesWithSameDefinitionInDvError {
}
export interface reportMultipleFactTypesWithSameDefinitionInDvErrorResponse {
}
export interface addCurlyBrackets {
}
export interface addCurlyBracketsResponse {
}
export interface unlockBcdTask {
}
export interface unlockBcdTaskResponse {
}
export interface trimValues {
}
export interface trimValuesResponse {
}
export interface renameMessageCategory {
}
export interface renameMessageCategoryResponse {
}
export interface recalculateLogicalSignForRow {
}
export interface recalculateLogicalSignForRowResponse {
}
export interface findAllVerbs {
}
export interface findAllVerbsResponse {
}
export interface removeMessageCategoryFromViewGroup {
}
export interface removeMessageCategoryFromViewGroupResponse {
}
export interface clearRFVDVvalidationSign {
}
export interface clearRFVDVvalidationSignResponse {
}
export interface recalculateAllInternalSigns {
}
export interface recalculateAllInternalSignsResponse {
}
export interface response {
}
export interface getImageResource {
}
export interface getImageResourceResponse {
}
export interface removeUnUsedFtFromRg {
}
export interface removeUnUsedFtFromRgResponse {
}
export interface recalculateAllFactTypeInternalSign {
}
export interface recalculateAllFactTypeInternalSignResponse {
}
export interface findSimulateErrorForClientRetry {
}
export interface findSimulateErrorForClientRetryResponse {
}
export interface addUserRolesToViewGroup {
}
export interface addUserRolesToViewGroupResponse {
}
export interface removeAllOtherFactTypesWithSameDefinitionFromDecisionView {
}
export interface removeAllOtherFactTypesWithSameDefinitionFromDecisionViewResponse {
}
export interface convertFormulasToValuesAndFactTypes {
}
export interface convertFormulasToValuesAndFactTypesResponse {
}
export interface reportFactTypeWithDataTypeList {
}
export interface reportFactTypeWithDataTypeListResponse {
}
export interface copyCustomMetadataFieldsToDynamicProperties {
}
export interface copyCustomMetadataFieldsToDynamicPropertiesResponse {
}
export interface ValidationPrincipleDto {
	number: number;
	principleName: string;
	purpose: string;
	principle: string;
}
export interface findAllValidationPrinciples {
}
export interface findAllValidationPrinciplesResponse {
}
export interface findAllValidationDefinitions1 {
}
export interface findAllValidationDefinitionsResponse1 {
}
export interface deleteView {
}
export interface deleteViewResponse {
}
export interface deleteRejectedOrDraftDecisionViewById {
}
export interface deleteRejectedOrDraftDecisionViewByIdResponse {
}
export interface exportEntireDbToXml {
}
export interface exportEntireDbToXmlResponse {
}
export interface repoQueryRenameAttributeEnvironmentAndDynamicDescriptorProperty {
}
export interface repoQueryRenameAttributeEnvironmentAndDynamicDescriptorPropertyResponse {
}
export interface updateVerb {
}
export interface updateVerbResponse {
}
export interface addUserToViewGroup {
}
export interface addUserToViewGroupResponse {
}
export interface removeCategoriesByViewGroupId {
}
export interface removeCategoriesByViewGroupIdResponse {
}
export interface deleteDescriptorMetadataTemplateByViewGroupId {
}
export interface deleteDescriptorMetadataTemplateByViewGroupIdResponse {
}
export interface forceDeleteFt {
}
export interface forceDeleteFtResponse {
}
export interface deleteRepoQueryAttribute {
}
export interface deleteRepoQueryAttributeResponse {
}
export interface findWithOnlyDeclareThrowsBdmsExpSimulateErrorForClientRetry {
}
export interface findWithOnlyDeclareThrowsBdmsExpSimulateErrorForClientRetryResponse {
}
export interface calculateDeploymentDescriptorIdentifierHashId {
}
export interface calculateDeploymentDescriptorIdentifierHashIdResponse {
}
export interface findVerb {
}
export interface findVerbResponse {
}
export interface findInvalidDecisionViewRuleFamilyView {
}
export interface findInvalidDecisionViewRuleFamilyViewResponse {
}
export interface createMessageCategory {
}
export interface createMessageCategoryResponse {
}
export interface PasswordPolicyDto {
	policyRegex: string;
	policyDescription: string;
}
export interface getPasswordStrengthPolicy {
}
export interface getPasswordStrengthPolicyResponse {
}
export interface revalidateFlow {
}
export interface revalidateFlowResponse {
}
export interface addVerb {
}
export interface addVerbResponse {
}
export interface changePassword {
}
export interface changePasswordResponse {
}
export interface ViewGroupsUsersDto {
	directUsers: User[];
	inheritedUsers: InheritedUserDto[];
}
export interface InheritedUserDto {
	user: User;
	originViewGroup: ViewGroup;
}
export interface findViewGroupUsers {
}
export interface findViewGroupUsersResponse {
}
export interface isFormAuthentication {
}
export interface isFormAuthenticationResponse {
}
export interface updateValidationDefinition {
}
export interface updateValidationDefinitionResponse {
}
export interface RuleFlowDto {
	id: number;
	idSpecified: boolean;
	bpmnDefinitions: BPMNDefinitions;
	decisionViews: DecisionViewInfoDto[];
	factTypes: FactType[];
	state: AssetState;
	stateSpecified: boolean;
	version: Version;
	viewGroupId: number;
	editable: boolean;
	editableSpecified: boolean;
	isValid: boolean;
	isValidSpecified: boolean;
	hasWarnings: boolean;
	hasWarningsSpecified: boolean;
	internalSign: string;
}
export interface BPMNDefinitions {
	process: Process;
	BPMNDiagram: BPMNDiagram;
	typeLanguage: string;
	expressionLanguage: string;
	targetNamespace: string;
}
export interface Process {
	startEvent: StartEvent;
	endEvent: EndEvent[];
	serviceTask: ServiceTask[];
	exclusiveGateway: ExclusiveGateway[];
	sequenceFlow: SequenceFlow[];
	subProcess: Process[];
	extensionElements: extentionElements;
	id: string;
	name: string;
	executable: boolean;
	executableSpecified: boolean;
}
export interface StartEvent {
	id: string;
	name: string;
}
export interface EndEvent {
	id: string;
	name: string;
}
export interface ServiceTask {
	extensionElements: extentionElements;
	id: string;
	name: string;
	decisionViewId: number;
	decisionViewIdSpecified: boolean;
	class: string;
}
export interface extentionElements {
	customProperty: CustomProperty[];
	field: ExtentionField[];
}
export interface CustomProperty {
	templateId: number;
	name: string;
	value: string;
}
export interface ExtentionField {
	string: string;
	name: string;
}
export interface ExclusiveGateway {
	id: string;
	name: string;
	factTypeDefinitionId: number;
	factTypeDefinitionIdSpecified: boolean;
}
export interface SequenceFlow {
	conditionExpression: string;
	id: string;
	name: string;
	sourceRef: string;
	targetRef: string;
	cellOperatorId: number;
	cellOperatorIdSpecified: boolean;
	cellOperatorKey: string;
	rightExpression: string;
}
export interface BPMNDiagram {
	BPMNPlane: BPMNPlane;
	id: string;
}
export interface BPMNPlane {
	BPMNShape: BPMNShape[];
	BPMNEdge: BPMNEdge[];
	id: string;
	bpmnElement: string;
}
export interface BPMNShape {
	Bounds: Bounds;
	id: string;
	bpmnElement: string;
}
export interface Bounds {
	height: number;
	heightSpecified: boolean;
	width: number;
	widthSpecified: boolean;
	x: number;
	xSpecified: boolean;
	y: number;
	ySpecified: boolean;
}
export interface BPMNEdge {
	waypoint: Waypoint[];
	id: string;
	bpmnElement: string;
	fromPort: string;
	toPort: string;
	xConditionOffset: number;
	xConditionOffsetSpecified: boolean;
	yConditionOffset: number;
	yConditionOffsetSpecified: boolean;
}
export interface Waypoint {
	x: number;
	y: number;
}
export interface DecisionViewInfoDto {
	verb: string;
	view: string;
	conclusionFactTypeName: string;
	id: number;
	label: string;
	state: AssetState;
	stateSpecified: boolean;
	whiteboard: Whiteboard;
	isValid: boolean;
	isValidSpecified: boolean;
	version: Version;
	editable: boolean;
	hasWarnings: boolean;
	hasWarningsSpecified: boolean;
	hasSuppressedWarnings: boolean;
	viewGroupContext: IdName;
	isLatestVersion: boolean;
	isLatestVersionSpecified: boolean;
}
export interface updateRuleFlow {
}
export interface updateRuleFlowResponse {
}
export interface changeFactTypeVersionInRuleFlow {
}
export interface changeFactTypeVersionInRuleFlowResponse {
}
export interface getRuleFlow {
}
export interface getRuleFlowResponse {
}
export interface validateActivitiExtentionElementsForEntity {
}
export interface validateActivitiExtentionElementsForEntityResponse {
}
export interface createRuleFlow {
}
export interface createRuleFlowResponse {
}
export interface findLogHistoryByEntityId {
}
export interface findLogHistoryByEntityIdResponse {
}
export interface BcdDto {
	name: string;
	bcdId: number;
	description: string;
	bcdTasks: BcdTask[];
	owner: User;
	done: boolean;
	viewGroupId: number;
	onHold: boolean;
	status: string;
	viewGroupName: string;
	analysis: boolean;
}
export interface findBcdWithOpenTasksRevision {
}
export interface findBcdWithOpenTasksRevisionResponse {
}
export interface findDecisionViewRevision {
}
export interface findDecisionViewRevisionResponse {
}
export interface findAllByType {
}
export interface findAllByTypeResponse {
}
export interface AuditDetailsDto {
	revisionType: revisionType;
	revisionTypeSpecified: boolean;
	isStateLess: boolean;
	state: AssetState;
	stateSpecified: boolean;
	entityId: number;
	entityIdSpecified: boolean;
	revisionNumber: number;
	revisionTimestamp: Date;
	revisionTimestampSpecified: boolean;
	roleName: string;
	userId: number;
	userIdSpecified: boolean;
	userName: string;
}
export interface findAudit {
}
export interface findAuditResponse {
}
export interface findFactTypeRevision {
}
export interface findFactTypeRevisionResponse {
}
export interface AssetPathDto {
	assetId: number;
	assetIdSpecified: boolean;
	assetEntity: EntityType;
	contextId: number;
	contextIdSpecified: boolean;
	contextType: EntityType;
}
export interface copyDvAsToWhiteboard {
}
export interface copyDvAsToWhiteboardResponse {
}
export interface findBcdTaskHasNoAssetsOrAssetsNotInStates {
}
export interface findBcdTaskHasNoAssetsOrAssetsNotInStatesResponse {
}
export interface updateBusinessChangeDocument {
}
export interface updateBusinessChangeDocumentResponse {
}
export interface deleteAssetFromWhiteboard {
}
export interface deleteAssetFromWhiteboardResponse {
}
export interface setWorkflowActive {
}
export interface setWorkflowActiveResponse {
}
export interface dismissInfoTasks {
}
export interface dismissInfoTasksResponse {
}
export interface moveEntireWhiteboard {
}
export interface moveEntireWhiteboardResponse {
}
export interface findBcdById {
}
export interface findBcdByIdResponse {
}
export interface completeTaskList {
}
export interface completeTaskListResponse {
}
export interface WhiteboardContentDto {
	bcd: IdName;
	searches: IdName[];
	whiteboard: IdName;
	wbOwner: IdName;
	assets: WhiteboardAssetDto[];
	decisionViews: WhiteboardAssetDto[];
	isWbAnalyst: boolean;
	isShared: boolean;
	viewGroupId: number;
	glossaryId: number;
	hasBcdTask: boolean;
	taskId: number;
	canInsertNew: boolean;
	viewGroupName: string;
}
export interface WhiteboardAssetDto {
	asset: RepositoryNevigatorDto;
	taskOwner: IdName;
	flowState: string;
	children: WhiteboardAssetDto[];
	isEditable: boolean;
	isDeletable: boolean;
	viewGroupId: number;
	contextId: number;
	bcdTaskId: number;
	contextType: EntityType;
	factTypeFlowActions: string[];
}
export interface findWhiteboardContentListWithAssetsTree {
}
export interface findWhiteboardContentListWithAssetsTreeResponse {
}
export interface assignTasks {
}
export interface assignTasksResponse {
}
export interface SubmitViolationDto {
	validationErr: number;
	conflicts: number;
	unApproveFactType: number;
	notDeplyableFt: number;
	unChangedAssets: number;
	openSubTasks: number;
	unResolvedWarnings: number;
	unApproveAlias: number;
	duplicateAsset: number;
	dvToBeRetiredAndInFlowUse: number;
	suppressedWarnings: number;
}
export interface findSubmitViolations {
}
export interface findSubmitViolationsResponse {
}
export interface createNewAnalystWhiteboardForCurrentUser {
}
export interface createNewAnalystWhiteboardForCurrentUserResponse {
}
export interface assignTask {
}
export interface assignTaskResponse {
}
export interface TaskTransitionsAndViolations {
	submitViolationDto: SubmitViolationDto;
	transitionDtos: TransitionDto[];
	taskLinks: TaskLink[];
}
export interface TransitionDto {
	transition: Transition;
	enable: boolean;
	actionName: string;
}
export interface findTaskTransitionAndViolationsByIdList {
}
export interface findTaskTransitionAndViolationsByIdListResponse {
}
export interface cancelBcd {
}
export interface cancelBcdResponse {
}
export interface WhiteboardDto {
	whiteboard: IdName;
	owner: IdName;
	viewGroup: IdName;
	sharedByMe: boolean;
	bcdTask: IdName;
	isAnalysis: boolean;
	isSubmissionList: boolean;
	isInEditMode: boolean;
	sharedWIthMe: boolean;
}
export interface findWhiteboardDtoById {
}
export interface findWhiteboardDtoByIdResponse {
}
export interface createTaskWorkflowWithTask {
}
export interface createTaskWorkflowWithTaskResponse {
}
export interface findNumberOfInvalidAssets {
}
export interface findNumberOfInvalidAssetsResponse {
}
export interface UserWithRolesDto {
	user: User;
	roles: IdName[];
	readOnlyPrivateUser: boolean;
}
export interface findAvailableUsersForTaskForWorkflow {
}
export interface findAvailableUsersForTaskForWorkflowResponse {
}
export interface findWhiteboardByBcdTask {
}
export interface findWhiteboardByBcdTaskResponse {
}
export interface addTransitionToWorkflow {
}
export interface addTransitionToWorkflowResponse {
}
export interface cancelBcdTask {
}
export interface cancelBcdTaskResponse {
}
export interface TaskAssetDto {
	asset: AssetPathDto;
	assetName: string;
	versionInc: VersionInc;
	versionIncSpecified: boolean;
	valid: boolean;
	flowState: State;
	taskOwner: User;
	editNo: number;
	compAssetDtos: CompareAssetDto[];
	isInSubTask: boolean;
	unChanged: boolean;
	changeWithoutVersion: boolean;
	isWarning: boolean;
	isSuppressedWarning: boolean;
	assetState: AssetState;
	assetStateSpecified: boolean;
	isInUseCannotRetire: boolean;
	viewGroup: IdName;
}
export interface CompareAssetDto {
	assetPath: AssetPathDto;
	assetName: string;
	timeStamp: Date;
	timeStampSpecified: boolean;
	rejectNo: number;
	compareType: CompareType;
	compareTypeSpecified: boolean;
}
export interface findAssetsByTask {
}
export interface findAssetsByTaskResponse {
}
export interface resolveConflict {
}
export interface resolveConflictResponse {
}
export interface copyFtAsToWhiteboard {
}
export interface copyFtAsToWhiteboardResponse {
}
export interface findWhiteboardRelateToMe {
}
export interface findWhiteboardRelateToMeResponse {
}
export interface WhiteboardToolsDto {
	tool: IdName;
	toolType: EntityType;
}
export interface findWhiteboardTools {
}
export interface findWhiteboardToolsResponse {
}
export interface findBcdComplete {
}
export interface findBcdCompleteResponse {
}
export interface findBcdTaskById {
}
export interface findBcdTaskByIdResponse {
}
export interface CopyToWhiteboardDto {
	context: IdName;
	alreadyInWhiteboard: boolean;
	contextEntity: EntityType;
	children: CopyToWhiteboardDto[];
	hasChildren: boolean;
	facet: string;
	originalId: number;
	originalIdSpecified: boolean;
}
export interface findOtherContextOfFtForWhiteboard {
}
export interface findOtherContextOfFtForWhiteboardResponse {
}
export interface addBusinessChangeDocument {
}
export interface addBusinessChangeDocumentResponse {
}
export interface findAvailableUsersForTask {
}
export interface findAvailableUsersForTaskResponse {
}
export interface markBcdAsCompleted {
}
export interface markBcdAsCompletedResponse {
}
export interface WhiteboardHierarchyAssetsDto {
	viewGroup: IdName;
	facet: ViewGroupFacet;
	assets: WhiteboardAssetDto[];
}
export interface findWhiteboardHierarchyAsset {
}
export interface findWhiteboardHierarchyAssetResponse {
}
export interface createNewDecisionViewInWhiteboard {
}
export interface createNewDecisionViewInWhiteboardResponse {
}
export interface countAllDecisionViewsInWhiteboard {
}
export interface countAllDecisionViewsInWhiteboardResponse {
}
export interface findAvailableUsersForWhiteboardShare {
}
export interface findAvailableUsersForWhiteboardShareResponse {
}
export interface findWhiteboardOwnedByMe {
}
export interface findWhiteboardOwnedByMeResponse {
}
export interface findAllWorkflowStates {
}
export interface findAllWorkflowStatesResponse {
}
export interface DuplicateAssetDto {
	assetPath: AssetPathDto;
	assetName: string;
	duplicateWith: IdName[];
}
export interface findDUplicateAssetsByTask {
}
export interface findDUplicateAssetsByTaskResponse {
}
export interface findViewGroupOfDvIfDvContextIsCommunity {
}
export interface findViewGroupOfDvIfDvContextIsCommunityResponse {
}
export interface CompareGroupAssetDto {
	compareType: CompareType;
	compareTypeSpecified: boolean;
	assets: RepositoryNevigatorDto[];
	isContainingDtafts: boolean;
}
export interface findCompareContextSensitive {
}
export interface findCompareContextSensitiveResponse {
}
export interface setBcdTaskOnHold {
}
export interface setBcdTaskOnHoldResponse {
}
export interface UserMessages {
	unreadMessagesCount: number;
	releatedWhiteboardIds: KeyValueDto[];
}
export interface findUnReadGroupTasks {
}
export interface findUnReadGroupTasksResponse {
}
export interface addWorkflowStates {
}
export interface addWorkflowStatesResponse {
}
export interface findOrginalAssetId {
}
export interface findOrginalAssetIdResponse {
}
export interface canRfvBeInsertedToWhiteboard {
}
export interface canRfvBeInsertedToWhiteboardResponse {
}
export interface findBcdTaskByIdEager {
}
export interface findBcdTaskByIdEagerResponse {
}
export interface findTaskTransitionAndViolations {
}
export interface findTaskTransitionAndViolationsResponse {
}
export interface renameState {
}
export interface renameStateResponse {
}
export interface CopyRfvToWbReturnDto {
	newRfvId: number;
	decisionViews: KeyValueDto[];
}
export interface addRfvToWhiteboard {
}
export interface addRfvToWhiteboardResponse {
}
export interface findDecisionViewByRuleFamilyView {
}
export interface findDecisionViewByRuleFamilyViewResponse {
}
export interface MultiRfvCopyDto {
	newDvId: number;
	ruleFamilyViews: IntKeyValueDto[];
}
export interface IntKeyValueDto {
	key: number;
	keySpecified: boolean;
	value: number;
	valueSpecified: boolean;
}
export interface copyRfvsToWhiteboardUnderSameContext {
}
export interface copyRfvsToWhiteboardUnderSameContextResponse {
}
export interface reassignWorkflowStateToUser {
}
export interface reassignWorkflowStateToUserResponse {
}
export interface reassignBcd {
}
export interface reassignBcdResponse {
}
export interface findWhiteboardOwnedByMeWithSameViewGroup {
}
export interface findWhiteboardOwnedByMeWithSameViewGroupResponse {
}
export interface findAllTaskByBcd {
}
export interface findAllTaskByBcdResponse {
}
export interface findNextAvailableTransitions {
}
export interface findNextAvailableTransitionsResponse {
}
export interface updateWorkflow {
}
export interface updateWorkflowResponse {
}
export interface deleteAnalystWhiteboardForCurrentUser {
}
export interface deleteAnalystWhiteboardForCurrentUserResponse {
}
export interface addWorkflowState {
}
export interface addWorkflowStateResponse {
}
export interface copyBcdTask {
}
export interface copyBcdTaskResponse {
}
export interface findOtherContextOfDvForWhiteboard {
}
export interface findOtherContextOfDvForWhiteboardResponse {
}
export interface createNewRuleFamilyViewInDecisionViewInWhiteboardWithDraftConditions {
}
export interface createNewRuleFamilyViewInDecisionViewInWhiteboardWithDraftConditionsResponse {
}
export interface renameAnalystWhiteboard {
}
export interface renameAnalystWhiteboardResponse {
}
export interface findWhiteboardForClone {
}
export interface findWhiteboardForCloneResponse {
}
export interface findWhiteboardForAssets {
}
export interface findWhiteboardForAssetsResponse {
}
export interface findAllCurrentUserWb {
}
export interface findAllCurrentUserWbResponse {
}
export interface BcdTaskHistoryDto {
	tasks: BcdTaskHistoryElementDto[];
	taskWorkflowInstId: number;
}
export interface BcdTaskHistoryElementDto {
	bcdTaskId: number;
	name: string;
	freeText: string;
	taskType: TaskType;
	taskTypeSpecified: boolean;
	priority: Priority;
	prioritySpecified: boolean;
	note: string;
	done: boolean;
	dueDate: Date;
	dueDateSpecified: boolean;
	owner: User;
	originalAssignee: User;
	createDate: Date;
	createDateSpecified: boolean;
	completeDate: Date;
	completeDateSpecified: boolean;
	tranDetails: string;
}
export interface findBcdTaskHistory {
}
export interface findBcdTaskHistoryResponse {
}
export interface createFactTypeInWhiteboardWithAutoText {
}
export interface createFactTypeInWhiteboardWithAutoTextResponse {
}
export interface findAllTasksCreatedByCurrentUser {
}
export interface findAllTasksCreatedByCurrentUserResponse {
}
export interface copyAssetsToWhiteboard {
}
export interface copyAssetsToWhiteboardResponse {
}
export interface findNonCurrentTasksRelevantToUser {
}
export interface findNonCurrentTasksRelevantToUserResponse {
}
export interface findAllWorkflows {
}
export interface findAllWorkflowsResponse {
}
export interface moveAssetsFromWhiteboardToWhite {
}
export interface moveAssetsFromWhiteboardToWhiteResponse {
}
export interface findAllBcds {
}
export interface findAllBcdsResponse {
}
export interface findDuplicateRfvWIthCurrent {
}
export interface findDuplicateRfvWIthCurrentResponse {
}
export interface addWorkflow {
}
export interface addWorkflowResponse {
}
export interface validateBcdTaskOnOpen {
}
export interface validateBcdTaskOnOpenResponse {
}
export interface copyRfvToNewDvAsToWhiteboard {
}
export interface copyRfvToNewDvAsToWhiteboardResponse {
}
export interface moveAssetFromWhiteboardToWhiteboard {
}
export interface moveAssetFromWhiteboardToWhiteboardResponse {
}
export interface findUnReadTasks {
}
export interface findUnReadTasksResponse {
}
export interface copyMessagesFromCurrentDvToAllOtherInWb {
}
export interface copyMessagesFromCurrentDvToAllOtherInWbResponse {
}
export interface updateTaskWorkflowTmpl {
}
export interface updateTaskWorkflowTmplResponse {
}
export interface createTaskInBcd {
}
export interface createTaskInBcdResponse {
}
export interface resolveTaskWarnings {
}
export interface resolveTaskWarningsResponse {
}
export interface TaskUserAvailableTransitionsDto {
	bcdTask: BcdTask;
	bcd: IdName;
	previousComment: string;
	workflowState: IdName;
	role: IdName;
	isGroupTask: boolean;
}
export interface findTaskUserAvailableTransitions {
}
export interface findTaskUserAvailableTransitionsResponse {
}
export interface replaceRfvInWhiteboardToExistingOne {
}
export interface replaceRfvInWhiteboardToExistingOneResponse {
}
export interface findUnApprovedFactTypes {
}
export interface findUnApprovedFactTypesResponse {
}
export interface ConflictDto {
	mine: number;
	theirs: AssetPathDto;
	resolve: boolean;
	resolveSpecified: boolean;
	conflictState: AssetState;
	conflictStateSpecified: boolean;
	conflictWith: User;
}
export interface findConflicts {
}
export interface findConflictsResponse {
}
export interface copyAssetToWhiteboard {
}
export interface copyAssetToWhiteboardResponse {
}
export interface findWhiteboardById {
}
export interface findWhiteboardByIdResponse {
}
export interface findWhiteboardsForAssetByCurrentUser {
}
export interface findWhiteboardsForAssetByCurrentUserResponse {
}
export interface findAllWhiteBoards {
}
export interface findAllWhiteBoardsResponse {
}
export interface findAllDeploymentTypes {
}
export interface findAllDeploymentTypesResponse {
}
export interface setVersionIncrement {
}
export interface setVersionIncrementResponse {
}
export interface findOtherContextOfRfvForWhiteboard {
}
export interface findOtherContextOfRfvForWhiteboardResponse {
}
export interface copyRfvAsToExistingDvToWhiteboard {
}
export interface copyRfvAsToExistingDvToWhiteboardResponse {
}
export interface findAllActiveWhiteboards {
}
export interface findAllActiveWhiteboardsResponse {
}
export interface shareWhiteboard {
}
export interface shareWhiteboardResponse {
}
export interface findBcdByBcdTask {
}
export interface findBcdByBcdTaskResponse {
}
export interface setBcdOnHold {
}
export interface setBcdOnHoldResponse {
}
export interface createNewAnalystWhiteboardForCurrentUserWithName {
}
export interface createNewAnalystWhiteboardForCurrentUserWithNameResponse {
}
export interface startWorkflow {
}
export interface startWorkflowResponse {
}
export interface markTaskAsRead {
}
export interface markTaskAsReadResponse {
}
export interface findWorkflowsWithViewGroupsInViewGroupHierarchy {
}
export interface findWorkflowsWithViewGroupsInViewGroupHierarchyResponse {
}
export interface createNewDecisionViewInWhiteboardFromTemplate {
}
export interface createNewDecisionViewInWhiteboardFromTemplateResponse {
}
export interface copyRfvsToWhiteboard {
}
export interface copyRfvsToWhiteboardResponse {
}
export interface unassignTask {
}
export interface unassignTaskResponse {
}
export interface findWhiteboardContentList {
}
export interface findWhiteboardContentListResponse {
}
export interface findCopyDvAsToWhiteboardBehaviour {
}
export interface findCopyDvAsToWhiteboardBehaviourResponse {
}
export interface findWorkflowsByViewGroup {
}
export interface findWorkflowsByViewGroupResponse {
}
export interface ShareWhiteboardDto {
	viewGroupId: number;
	bcdTaskName: string;
	users: ShareUserDto[];
}
export interface ShareUserDto {
	userId: number;
	userDisplyName: string;
	canRemoveShare: boolean;
}
export interface findWhiteboardSharring {
}
export interface findWhiteboardSharringResponse {
}
export interface findGroupTasksForUser {
}
export interface findGroupTasksForUserResponse {
}
export interface BcdTaskDto {
	name: string;
	freeText: string;
	taskType: TaskType;
	taskTypeSpecified: boolean;
	priority: Priority;
	prioritySpecified: boolean;
	dueDate: Date;
	dueDateSpecified: boolean;
	note: string;
	done: boolean;
	taskWorkflowInstId: number;
	viewGroup: IdName;
	bcdTaskId: number;
	isVersioned: boolean;
	ownerId: number;
	ownerDisplayName: string;
	deploymentType: DeploymentType;
	releaseId: number;
	releaseIdSpecified: boolean;
	linkQueryParameters: KeyValueDto[];
	projectId: number;
	projectIdSpecified: boolean;
	branchId: number;
	branchIdSpecified: boolean;
}
export interface createSubTask {
}
export interface createSubTaskResponse {
}
export interface updateBcdTask {
}
export interface updateBcdTaskResponse {
}
export interface createNewRuleFamilyViewInWhiteboardFromTemplate {
}
export interface createNewRuleFamilyViewInWhiteboardFromTemplateResponse {
}
export interface findAvailableTransitions {
}
export interface findAvailableTransitionsResponse {
}
export interface findBcdWithOpenTasks {
}
export interface findBcdWithOpenTasksResponse {
}
export interface findAllBcdByOwner {
}
export interface findAllBcdByOwnerResponse {
}
export interface findAllDecisionViewsInWhiteboard {
}
export interface findAllDecisionViewsInWhiteboardResponse {
}
export interface StateRoleUserDto {
	stateRole: StateRole;
	user: User;
	assignedToGroup: boolean;
	distinctUser: boolean;
}
export interface findStateRoleFromWorkFlowTemplate {
}
export interface findStateRoleFromWorkFlowTemplateResponse {
}
export interface reAssignTaskToUser {
}
export interface reAssignTaskToUserResponse {
}
export interface findTaskTransition {
}
export interface findTaskTransitionResponse {
}
export interface createNewRuleFamilyViewInDecisionViewInWhiteboard {
}
export interface createNewRuleFamilyViewInDecisionViewInWhiteboardResponse {
}
export interface deleteWhiteboardTool {
}
export interface deleteWhiteboardToolResponse {
}
export interface CopyFtToWbReturnDto {
	newFtId: number;
	decisionViews: KeyValueDto[];
}
export interface copyFtAssetsToWhiteboard {
}
export interface copyFtAssetsToWhiteboardResponse {
}
export interface deleteState {
}
export interface deleteStateResponse {
}
export interface completeTask {
}
export interface completeTaskResponse {
}
export interface createFactTypeInWhiteboard {
}
export interface createFactTypeInWhiteboardResponse {
}
export interface findCopyRfvAsToWhiteboardBehaviour {
}
export interface findCopyRfvAsToWhiteboardBehaviourResponse {
}
export interface WorkflowDto {
	workflow: Workflow;
	inUse: boolean;
}
export interface findWorkflowById {
}
export interface findWorkflowByIdResponse {
}
export interface sankaYouDead {
}
export interface sankaYouDeadResponse {
}
export interface getServerTimeZoneOffsetFromUTC {
}
export interface getServerTimeZoneOffsetFromUTCResponse {
}
export interface logError {
}
export interface logErrorResponse {
}
export interface log {
}
export interface logResponse {
}
export interface getServerJavaSystemProperties {
}
export interface getServerJavaSystemPropertiesResponse {
}
export interface findDLQ {
}
export interface findDLQResponse {
}
export interface updateRepoQuery {
}
export interface updateRepoQueryResponse {
}
export interface createRepoQuery {
}
export interface createRepoQueryResponse {
}
export interface createRepoQueryBasket {
}
export interface createRepoQueryBasketResponse {
}
export interface findQueryParameterBagsByRepoQueryAndCurrentUser {
}
export interface findQueryParameterBagsByRepoQueryAndCurrentUserResponse {
}
export interface findRepoQueryBasketFull {
}
export interface findRepoQueryBasketFullResponse {
}
export interface repoQueryBasketDto {
	createDate: Date;
	createDateSpecified: boolean;
	createUser: string;
	currentUser: string;
	rqbId: number;
	rqbIdSpecified: boolean;
	rqbName: string;
	vgName: string;
	wbId: number;
	wbIdSpecified: boolean;
}
export interface findAllRQBsForCurrentUserInAllViewGroups {
}
export interface findAllRQBsForCurrentUserInAllViewGroupsResponse {
}
export interface findAllRepoQueries {
}
export interface findAllRepoQueriesResponse {
}
export interface RepoQueryPaginationDto {
	repoQueryPages: RepoQueryPaginationDtoEntry[];
	pageNo: number;
	sortByColumns: string[];
	repoQueryResultPage: ResultPage;
}
export interface RepoQueryPaginationDtoEntry {
	key: string;
	value: SourcePage;
}
export interface SourcePage {
	pageSize: number;
	count: number;
	pageNo: number;
	pageFrom: number;
	pageTo: number;
	firstPageCount: number;
}
export interface ResultPage {
	results: any[];
	count: number;
	numberOfPages: number;
	pageSize: number;
}
export interface runRepoQueriesInBasketWithPagination {
}
export interface runRepoQueriesInBasketWithPaginationResponse {
}
export interface findAllAttributeTypes {
}
export interface findAllAttributeTypesResponse {
}
export interface findAllRQBsByWbId {
}
export interface findAllRQBsByWbIdResponse {
}
export interface findComplexRepoQueryBasketFull {
}
export interface findComplexRepoQueryBasketFullResponse {
}
export interface removeRepoQueryBasket {
}
export interface removeRepoQueryBasketResponse {
}
export interface updateComplexRepoQueryBasket {
}
export interface updateComplexRepoQueryBasketResponse {
}
export interface quickSearch {
}
export interface quickSearchResponse {
}
export interface updateQueryParameterBags {
}
export interface updateQueryParameterBagsResponse {
}
export interface findAllRQBsForCurrentUser {
}
export interface findAllRQBsForCurrentUserResponse {
}
export interface publishRQBasketToViewGroup {
}
export interface publishRQBasketToViewGroupResponse {
}
export interface updateRepoQueryBasket {
}
export interface updateRepoQueryBasketResponse {
}
export interface generateQueryBasketByFactTypesByName {
}
export interface generateQueryBasketByFactTypesByNameResponse {
}
export interface findAllRepoQueryBasket {
}
export interface findAllRepoQueryBasketResponse {
}
export interface findRepoQuery {
}
export interface findRepoQueryResponse {
}
export interface findAllRQBsInMySpace {
}
export interface findAllRQBsInMySpaceResponse {
}
export interface findRepoQueryBasket {
}
export interface findRepoQueryBasketResponse {
}
export interface createComplexRepoQueryBasket {
}
export interface createComplexRepoQueryBasketResponse {
}
export interface findAllRQBsByVgId {
}
export interface findAllRQBsByVgIdResponse {
}
export interface removeRepoQuery {
}
export interface removeRepoQueryResponse {
}
export interface findAllRepoQueryMetaData {
}
export interface findAllRepoQueryMetaDataResponse {
}
export interface generateQueryBasketFromQuickSearch {
}
export interface generateQueryBasketFromQuickSearchResponse {
}
export interface CountRowDto {
	name: string;
	results: CountCellDto[];
}
export interface CountCellDto {
	result: number;
	resultSpecified: boolean;
	countType: CountType;
	countTypeSpecified: boolean;
	aggregatorName: string;
}
export interface count {
}
export interface countResponse {
}
export interface findAllCountableEntityTypes {
}
export interface findAllCountableEntityTypesResponse {
}
export interface savePerspective {
}
export interface savePerspectiveResponse {
}
export interface validateRow {
}
export interface validateRowResponse {
}
export interface findViewGroupsWithDecendentsAndDvFlagForCurrentUser {
}
export interface findViewGroupsWithDecendentsAndDvFlagForCurrentUserResponse {
}
export interface findViewGroupDecisionViewsHierarchy {
}
export interface findViewGroupDecisionViewsHierarchyResponse {
}
export interface addRuleFamilyViewToDecisionView {
}
export interface addRuleFamilyViewToDecisionViewResponse {
}
export interface deleteCellOperator {
}
export interface deleteCellOperatorResponse {
}
export interface removeRuleFamilyView {
}
export interface removeRuleFamilyViewResponse {
}
export interface findDefaultViewGroupForDecisionViews {
}
export interface findDefaultViewGroupForDecisionViewsResponse {
}
export interface DataTypeOperatorsDto {
	dataType: DataType;
	dataTypeSpecified: boolean;
	cellOperators: CellOperator[];
}
export interface findAllDataTypeOperatorsDtos {
}
export interface findAllDataTypeOperatorsDtosResponse {
}
export interface deleteDecisionView {
}
export interface deleteDecisionViewResponse {
}
export interface updateRuleFamilyViewProperties {
}
export interface updateRuleFamilyViewPropertiesResponse {
}
export interface findAllVerbs1 {
}
export interface findAllVerbsResponse1 {
}
export interface findDecisionViewPathToViewGroup {
}
export interface findDecisionViewPathToViewGroupResponse {
}
export interface createRuleFamilyViewInDecisionView {
}
export interface createRuleFamilyViewInDecisionViewResponse {
}
export interface ViewGroupTreeNodeDto {
	name: string;
	children: ViewGroupTreeNodeDto[];
	id: number;
	idSpecified: boolean;
	path: string;
	facet: ViewGroupFacet;
}
export interface findAvailableViewGroupsForCopyTask {
}
export interface findAvailableViewGroupsForCopyTaskResponse {
}
export interface BdmsTree {
	info: any;
	bdmsTreeNode: BdmsTreeNode;
	orphanNodes: BdmsTreeNode[];
}
export interface BdmsTreeNode {
	nodeValue: any;
	nodes: BdmsTreeNode[];
	circularNodes: BdmsTreeNode[];
}
export interface findDecisionViewTreeById {
}
export interface findDecisionViewTreeByIdResponse {
}
export interface TreeNode {
	isLeaf: boolean;
	elementDto: ElementDto;
	descendantsNodes: TreeNode[];
	descendantsEntityTypes: EntityType[];
	isGroupingNode: boolean;
}
export interface ElementDto {
	id: number;
	name: string;
	entityType: EntityType;
	viewGroupDecisionViewContextDtos: viewGroupDecisionViewContextDto[];
	entitySymbol: EntitySymbol;
	assetState: AssetState;
	assetStateSpecified: boolean;
	version: string;
	approvedBy: string;
	approvedDate: Date;
	approvedDateSpecified: boolean;
	viewGroupFacetType: string;
	hasGlossary: boolean;
	view: string;
}
export interface viewGroupDecisionViewContextDto {
	contextDecisionViewId: number;
	contextDecisionViewName: string;
	contextDecisionViewState: string;
	contextDecisionViewVersion: string;
	contextViewGroupId: number;
	contextViewGroupName: string;
}
export interface getRootViewGroupNode {
}
export interface getRootViewGroupNodeResponse {
}
export interface findDecisionViewInfoDtoById {
}
export interface findDecisionViewInfoDtoByIdResponse {
}
export interface findViewGroupDecisionViews {
}
export interface findViewGroupDecisionViewsResponse {
}
export interface getAllOperatorInclusionTypes {
}
export interface getAllOperatorInclusionTypesResponse {
}
export interface findAvailableFacetsForUnsetViewGroup {
}
export interface findAvailableFacetsForUnsetViewGroupResponse {
}
export interface getRulePattern {
}
export interface getRulePatternResponse {
}
export interface RepeatingGroupDto {
	description: string;
	factTypes: IdName[];
	id: number;
	idSpecified: boolean;
	name: string;
	repeatingGroupChildren: RepeatingGroupDto[];
	repeatingGroupParent: RepeatingGroupDto;
}
export interface findRepeatingGroupById {
}
export interface findRepeatingGroupByIdResponse {
}
export interface findViewGroupsToSaveBcdTaskForCurrentUserUnderViewGroup {
}
export interface findViewGroupsToSaveBcdTaskForCurrentUserUnderViewGroupResponse {
}
export interface findViewGroupsToSaveDecisionViewForCurrentUserUnderViewGroup {
}
export interface findViewGroupsToSaveDecisionViewForCurrentUserUnderViewGroupResponse {
}
export interface findCatrgoriesByViewGroupId {
}
export interface findCatrgoriesByViewGroupIdResponse {
}
export interface findAllRuleFamilyViewFull {
}
export interface findAllRuleFamilyViewFullResponse {
}
export interface validateRuleFamilyView1 {
}
export interface validateRuleFamilyViewResponse1 {
}
export interface renameViewGroup {
}
export interface renameViewGroupResponse {
}
export interface createDecisionView {
}
export interface createDecisionViewResponse {
}
export interface findViewGroupChildren {
}
export interface findViewGroupChildrenResponse {
}
export interface createBusinessConceptInParent1 {
}
export interface createBusinessConceptInParentResponse1 {
}
export interface createViewGroup {
}
export interface createViewGroupResponse {
}
export interface validateView {
}
export interface validateViewResponse {
}
export interface MessageElementCandidateDto {
	name: string;
	parameterId: number;
	parameterIdSpecified: boolean;
}
export interface findPlaceholderCandidates {
}
export interface findPlaceholderCandidatesResponse {
}
export interface RuleFamilyViewMessageSyncDto {
	dvFtdName: string;
	dvFtdView: string;
	decisionViewVersion: string;
	decisionViewStatus: AssetState;
	decisionViewStatusSpecified: boolean;
	rfvFtdName: string;
	rfvViewName: string;
	rfvVersion: string;
	rfvStatus: AssetState;
	rfvStatusSpecified: boolean;
	messageText: string;
	messageId: number;
	messageIdSpecified: boolean;
	isMessageTextIdentical: boolean;
}
export interface getRuleFamilyViewMessageSyncDtos {
}
export interface getRuleFamilyViewMessageSyncDtosResponse {
}
export interface findFactTypeNonLatestVersionByDecisionViewId {
}
export interface findFactTypeNonLatestVersionByDecisionViewIdResponse {
}
export interface findRuleFamilyViewPathToViewGroup {
}
export interface findRuleFamilyViewPathToViewGroupResponse {
}
export interface findViewGroupsToSaveWhiteboardForCurrentUser {
}
export interface findViewGroupsToSaveWhiteboardForCurrentUserResponse {
}
export interface validateConditionCell {
}
export interface validateConditionCellResponse {
}
export interface findMoreViewGroupRelateToDecisinViewForSameWhiteboard {
}
export interface findMoreViewGroupRelateToDecisinViewForSameWhiteboardResponse {
}
export interface findAvailableViewsForCopyAsRFVByConclusionId {
}
export interface findAvailableViewsForCopyAsRFVByConclusionIdResponse {
}
export interface createFlow {
}
export interface createFlowResponse {
}
export interface removeRuleFamilyViewFromDecisionView {
}
export interface removeRuleFamilyViewFromDecisionViewResponse {
}
export interface findAllBusinessConceptsInRootFull {
}
export interface findAllBusinessConceptsInRootFullResponse {
}
export interface findViewGroupWithDecendentsAndDvFlag {
}
export interface findViewGroupWithDecendentsAndDvFlagResponse {
}
export interface ViewGroupWithInverseRelationsDto {
	viewGroup: ViewGroupUsersDto;
	rowMessageCategories: RowMessageCategory[];
	descriptorMetadataTemplates: DescriptorMetadataTemplate[];
}
export interface ViewGroupUsersDto {
	name: string;
	users: User[];
	id: number;
	idSpecified: boolean;
	path: string;
}
export interface updateViewGroupWithInverseRelations {
}
export interface updateViewGroupWithInverseRelationsResponse {
}
export interface updateRepeatingGroupTree {
}
export interface updateRepeatingGroupTreeResponse {
}
export interface attachRuleFamilyViewToRepeatingGroup {
}
export interface attachRuleFamilyViewToRepeatingGroupResponse {
}
export interface createOrUpdateViewGroupFacetsFromXml {
}
export interface createOrUpdateViewGroupFacetsFromXmlResponse {
}
export interface updateViewGroup {
}
export interface updateViewGroupResponse {
}
export interface findAssetInternalSign {
}
export interface findAssetInternalSignResponse {
}
export interface findParentViewGroupByAttribute {
}
export interface findParentViewGroupByAttributeResponse {
}
export interface findViewGroupsToSaveBcdForCurrentUser {
}
export interface findViewGroupsToSaveBcdForCurrentUserResponse {
}
export interface findCategoryByNaturalId {
}
export interface findCategoryByNaturalIdResponse {
}
export interface findAllDecisionViewRuleFamilyViews {
}
export interface findAllDecisionViewRuleFamilyViewsResponse {
}
export interface findBusinessConceptByName {
}
export interface findBusinessConceptByNameResponse {
}
export interface createNewViewGroupInParentViewGroup {
}
export interface createNewViewGroupInParentViewGroupResponse {
}
export interface findDecisionViewById {
}
export interface findDecisionViewByIdResponse {
}
export interface findDefaultPerspective {
}
export interface findDefaultPerspectiveResponse {
}
export interface updateFlow {
}
export interface updateFlowResponse {
}
export interface findAvailableViewsForNewRfvByConclusionId {
}
export interface findAvailableViewsForNewRfvByConclusionIdResponse {
}
export interface RuleFamilyViewWithFactTypeDictionaryAndMessagesDto {
	factTypeDictionary: FactTypeWithContextNameAndRfvFlagsDto[];
	ruleFamilyView: RuleFamilyView;
	messages: RuleRowMessage[];
	editable: boolean;
	whiteboard: Whiteboard;
	elementDefinitionToCandidates: ElementDefinitionToCandidatesDto[];
	availableDecorators: MessageDecorator[];
	decisionViewState: AssetState;
	decisionViewStateSpecified: boolean;
	decisionView: IdName;
	dvEditable: boolean;
	repeatingGroupList: RepeatingGroupDto[];
	decisionViewRuleFamilyViewInternalSign: string;
	conclusionFtName: string;
}
export interface ElementDefinitionToCandidatesDto {
	definition: MessageElementDefinition;
	candidates: MessageElementCandidateDto[];
}
export interface findFullRuleFamilyViewWithFactTypeDictionaryAndMessages {
}
export interface findFullRuleFamilyViewWithFactTypeDictionaryAndMessagesResponse {
}
export interface findRuleRowFullDescription {
}
export interface findRuleRowFullDescriptionResponse {
}
export interface findViewGroupAuthorizedUsers {
}
export interface findViewGroupAuthorizedUsersResponse {
}
export interface createBusinessConceptAsRoot1 {
}
export interface createBusinessConceptAsRootResponse1 {
}
export interface RuleFamilyViewUpdateResultDto {
	columnsMap: KeyValueDto[];
	rowsMap: KeyValueDto[];
}
export interface updateRuleFamilyViewData {
}
export interface updateRuleFamilyViewDataResponse {
}
export interface generateUniqueExternalRuleIds {
}
export interface generateUniqueExternalRuleIdsResponse {
}
export interface findBusinessConceptFullTree {
}
export interface findBusinessConceptFullTreeResponse {
}
export interface removeBusinessConceptFromParent {
}
export interface removeBusinessConceptFromParentResponse {
}
export interface updateDecisionViewVerb {
}
export interface updateDecisionViewVerbResponse {
}
export interface findAllDecisionViewsFullMode {
}
export interface findAllDecisionViewsFullModeResponse {
}
export interface addCellOperator {
}
export interface addCellOperatorResponse {
}
export interface validateViewGroup {
}
export interface validateViewGroupResponse {
}
export interface findRuleFamilyView {
}
export interface findRuleFamilyViewResponse {
}
export interface findViewByName {
}
export interface findViewByNameResponse {
}
export interface findViewGroupsForCurrentUserByAttributeAndPermissions {
}
export interface findViewGroupsForCurrentUserByAttributeAndPermissionsResponse {
}
export interface replaceFactTypeInDvWithAnotherVersion {
}
export interface replaceFactTypeInDvWithAnotherVersionResponse {
}
export interface findRootViewGroup {
}
export interface findRootViewGroupResponse {
}
export interface findUpperCommunityByViewGroupId {
}
export interface findUpperCommunityByViewGroupIdResponse {
}
export interface updateConditionsByFactTypeDefinition {
}
export interface updateConditionsByFactTypeDefinitionResponse {
}
export interface deleteViewGroup {
}
export interface deleteViewGroupResponse {
}
export interface findDecisionViewRuleFamilyViewsResponseEntry {
	key: any;
	value: RuleFamilyView;
}
export interface findDecisionViewRuleFamilyViews {
}
export interface findDecisionViewRuleFamilyViewsResponse {
}
export interface removeRuleFamilyViewBranchFromDecisionView {
}
export interface removeRuleFamilyViewBranchFromDecisionViewResponse {
}
export interface changeViewGroupFacet {
}
export interface changeViewGroupFacetResponse {
}
export interface moveSubGroupFromParentGroup {
}
export interface moveSubGroupFromParentGroupResponse {
}
export interface deleteBusinessConcept {
}
export interface deleteBusinessConceptResponse {
}
export interface updateDecisionViewProperties {
}
export interface updateDecisionViewPropertiesResponse {
}
export interface validateDecisionView1 {
}
export interface validateDecisionViewResponse1 {
}
export interface buildPathToViewGroupsIncludesMyWbAssets {
}
export interface buildPathToViewGroupsIncludesMyWbAssetsResponse {
}
export interface findAllFactTypesWithDoaminByDecsionViewId {
}
export interface findAllFactTypesWithDoaminByDecsionViewIdResponse {
}
export interface findSupportedRfvs {
}
export interface findSupportedRfvsResponse {
}
export interface findAllRuleFamilies {
}
export interface findAllRuleFamiliesResponse {
}
export interface findViewGroupByFactTypeInGlossary {
}
export interface findViewGroupByFactTypeInGlossaryResponse {
}
export interface findFullRuleFamilyViewById {
}
export interface findFullRuleFamilyViewByIdResponse {
}
export interface findSupportingRuleFamilyViewId {
}
export interface findSupportingRuleFamilyViewIdResponse {
}
export interface validateConclusionCell {
}
export interface validateConclusionCellResponse {
}
export interface updateCategory1 {
}
export interface updateCategoryResponse1 {
}
export interface findAvailableFacetsForChildViewGroup {
}
export interface findAvailableFacetsForChildViewGroupResponse {
}
export interface addDecisionViewsToViewGroup {
}
export interface addDecisionViewsToViewGroupResponse {
}
export interface findAllDecisionViews {
}
export interface findAllDecisionViewsResponse {
}
export interface findPerspectiveForLoggedUserByRuleFamilyViewId {
}
export interface findPerspectiveForLoggedUserByRuleFamilyViewIdResponse {
}
export interface removeConditionsByFactTypeDefinition {
}
export interface removeConditionsByFactTypeDefinitionResponse {
}
export interface findAllCellOperators {
}
export interface findAllCellOperatorsResponse {
}
export interface findRuleFamilyViewPathToViewGroupStateless {
}
export interface findRuleFamilyViewPathToViewGroupStatelessResponse {
}
export interface findAllCellOperatorsWithDataTypes {
}
export interface findAllCellOperatorsWithDataTypesResponse {
}
export interface findViewGroupsAndGlossaryHirarchyByCurrentUser {
}
export interface findViewGroupsAndGlossaryHirarchyByCurrentUserResponse {
}
export interface createViewGroupWithInverseRelations {
}
export interface createViewGroupWithInverseRelationsResponse {
}
export interface attachGlossaryToViewGroup {
}
export interface attachGlossaryToViewGroupResponse {
}
export interface findAllMessageElementDefinitions {
}
export interface findAllMessageElementDefinitionsResponse {
}
export interface findAvailableViewsForCopyAsDvByConclusionId {
}
export interface findAvailableViewsForCopyAsDvByConclusionIdResponse {
}
export interface findOtherAvailableRuleFamilyViewVersions {
}
export interface findOtherAvailableRuleFamilyViewVersionsResponse {
}
export interface findPlaceholderCandidatesByRuleFamilyView {
}
export interface findPlaceholderCandidatesByRuleFamilyViewResponse {
}
export interface findSupportingFullRuleFamilyViewWithFactTypeDictionaryAndMessages {
}
export interface findSupportingFullRuleFamilyViewWithFactTypeDictionaryAndMessagesResponse {
}
export interface findViewGroupAsTreesByCurrentUser {
}
export interface findViewGroupAsTreesByCurrentUserResponse {
}
export interface findDecisionViewIdsByRuleFamilyViewId {
}
export interface findDecisionViewIdsByRuleFamilyViewIdResponse {
}
export interface findBusinessConceptNextLevelChildren {
}
export interface findBusinessConceptNextLevelChildrenResponse {
}
export interface ViewGroupSearchDtoResults {
	viewGroupSearchDtos: ViewGroupSearchDto[];
	seqNum: number;
}
export interface ViewGroupSearchDto {
	id: number;
	name: string;
}
export interface search1 {
}
export interface searchResponse1 {
}
export interface findViewGroupDirectUsers {
}
export interface findViewGroupDirectUsersResponse {
}
export interface findOtherAssetVersionsUnderViewGroup {
}
export interface findOtherAssetVersionsUnderViewGroupResponse {
}
export interface fillNodeDescendants {
}
export interface fillNodeDescendantsResponse {
}
export interface findViewGroupByGlossaryId {
}
export interface findViewGroupByGlossaryIdResponse {
}
export interface findRepeatingGroupByDecisionViewId {
}
export interface findRepeatingGroupByDecisionViewIdResponse {
}
export interface findCellOperator {
}
export interface findCellOperatorResponse {
}
export interface RepositoryNevigatorInputDto {
	viewGroup: number;
	decisionView: number;
	objectId: number;
	entityType: EntityType;
	childrenType: EntityType[];
}
export interface getRepositoryNavigationObjects {
}
export interface getRepositoryNavigationObjectsResponse {
}
export interface findViewGroup {
}
export interface findViewGroupResponse {
}
export interface findAllViews1 {
}
export interface findAllViewsResponse1 {
}
export interface createDvToVgAssociationApprovalTask {
}
export interface createDvToVgAssociationApprovalTaskResponse {
}
export interface findViewGroupDescendantsAndReleaseElementFlag {
}
export interface findViewGroupDescendantsAndReleaseElementFlagResponse {
}
export interface findViewGroupWithInverseRelations {
}
export interface findViewGroupWithInverseRelationsResponse {
}
export interface replaceRuleFamilyViewInDecisionView {
}
export interface replaceRuleFamilyViewInDecisionViewResponse {
}
export interface findAvailableViewsForNewDvByConclusionId {
}
export interface findAvailableViewsForNewDvByConclusionIdResponse {
}
export interface assetAggregations {
	title: string;
}
export interface getAggregatorsInfo {
}
export interface getAggregatorsInfoResponse {
}
export interface findAllViewGroups {
}
export interface findAllViewGroupsResponse {
}
export interface DecisionGraphCompareInfoDto {
	changedList: RuleFamilyViewCompareInfoDto[];
	deletedList: RuleFamilyViewInfoDto[];
	addedList: RuleFamilyViewInfoDto[];
}
export interface RuleFamilyViewCompareInfoDto {
	oldRuleFamilyView: RuleFamilyViewInfoDto;
	newRuleFamilyView: RuleFamilyViewInfoDto;
	addedRfvRows: number[];
	deletedRfvRows: number[];
	changedRfvRows: EntityChangedCompareInfoDto[];
	addedRfvColumns: number[];
	deletedRfvColumns: number[];
	changedCells: EntityChangedCompareInfoDto[];
	changedMessages: EntityChangedCompareInfoDto[];
	changedCategories: EntityChangedCompareInfoDto[];
	conditionFtdsWithChangedVersion: number[];
}
export interface RuleFamilyViewInfoDto {
	factTypeDefenitionName: string;
	id: number;
	idSpecified: boolean;
	viewName: string;
	conclusionOperandsPersistent: FactTypeWithContextNameAndRfvFlagsDto[];
	conclusionOperandsSupported: FactTypeWithContextNameAndRfvFlagsDto[];
	conditionOperandsPersistent: FactTypeWithContextNameAndRfvFlagsDto[];
	conditionOperandsSupported: FactTypeWithContextNameAndRfvFlagsDto[];
	conditionPersistent: FactTypeWithContextNameAndRfvFlagsDto[];
	conditionSupported: FactTypeWithContextNameAndRfvFlagsDto[];
	messagePersistent: FactTypeWithContextNameAndRfvFlagsDto[];
	messageSupported: FactTypeWithContextNameAndRfvFlagsDto[];
	formulasConclusion: FormulaInfoDto[];
	formulasCondition: FormulaInfoDto[];
	state: AssetState;
	stateSpecified: boolean;
	isValid: boolean;
	isValidSpecified: boolean;
	hasWarnings: boolean;
	hasWarningsSpecified: boolean;
	hasSuppressedWarnings: boolean;
	version: Version;
	hasTestGroups: boolean;
	conclusionFactType: FactTypeWithContextNameAndRfvFlagsDto;
	isEditable: boolean;
	repeatingGroupList: RepeatingGroupDto[];
	isLatestVersion: boolean;
	isLatestVersionSpecified: boolean;
}
export interface FormulaInfoDto {
	id: number;
	idSpecified: boolean;
	formulaText: string;
	parentFactType: FactTypeWithContextNameAndRfvFlagsDto;
	supportetFactTypes: FactTypeWithContextNameAndRfvFlagsDto[];
	persistentFactTypes: FactTypeWithContextNameAndRfvFlagsDto[];
}
export interface EntityChangedCompareInfoDto {
	oldEntityId: number;
	oldEntityIdSpecified: boolean;
	newEntityId: number;
	newEntityIdSpecified: boolean;
	entityType: EntityType;
	oldValue: string;
}
export interface compareDecisionViewVersions {
}
export interface compareDecisionViewVersionsResponse {
}
export interface findView1 {
}
export interface findViewResponse1 {
}
export interface testMailService {
}
export interface testMailServiceResponse {
}
export interface compareRuleFamilyViews {
}
export interface compareRuleFamilyViewsResponse {
}
export interface findRuleFamilyViewNonLatestVersionByDecisionViewId {
}
export interface findRuleFamilyViewNonLatestVersionByDecisionViewIdResponse {
}
export interface findAllViewGroupFacets {
}
export interface findAllViewGroupFacetsResponse {
}
export interface checkIfDecisionViewDefinitionIsLatestInContext {
}
export interface checkIfDecisionViewDefinitionIsLatestInContextResponse {
}
export interface buildPathToViewGroups {
}
export interface buildPathToViewGroupsResponse {
}
export interface findBusinessConceptsInRoot {
}
export interface findBusinessConceptsInRootResponse {
}
export interface updateConditionsByFactTypeDefinitionId {
}
export interface updateConditionsByFactTypeDefinitionIdResponse {
}
export interface dettachRuleFamilyViewToRepeatingGroup {
}
export interface dettachRuleFamilyViewToRepeatingGroupResponse {
}
export interface updateCellOperator {
}
export interface updateCellOperatorResponse {
}
export interface addCategoryToViewGroup {
}
export interface addCategoryToViewGroupResponse {
}
export interface findViewGroupsToSaveBcdForCurrentUserUnderViewGroup {
}
export interface findViewGroupsToSaveBcdForCurrentUserUnderViewGroupResponse {
}
export interface updateDecisionView {
}
export interface updateDecisionViewResponse {
}
export interface addView1 {
}
export interface addViewResponse1 {
}
export interface getApprovedDecisionViewsByViewGroupId {
}
export interface getApprovedDecisionViewsByViewGroupIdResponse {
}
export interface renameBusinessConcept {
}
export interface renameBusinessConceptResponse {
}
export interface findRuleRowMessageByTextWithDefinitions {
}
export interface findRuleRowMessageByTextWithDefinitionsResponse {
}
export interface removeCategoryFromViewGroup {
}
export interface removeCategoryFromViewGroupResponse {
}
export interface findBusinessConceptById {
}
export interface findBusinessConceptByIdResponse {
}
export interface findEntityTypesForDynamicProperties {
}
export interface findEntityTypesForDynamicPropertiesResponse {
}
export interface validateDynamicPropertiesForEntity {
}
export interface validateDynamicPropertiesForEntityResponse {
}
export interface createTemplateForEntityType {
}
export interface createTemplateForEntityTypeResponse {
}
export interface deleteTemplateById {
}
export interface deleteTemplateByIdResponse {
}
export interface findPropertiesByEntityIdAndType {
}
export interface findPropertiesByEntityIdAndTypeResponse {
}
export interface clearAllDynamicPropertiesByEntityType {
}
export interface clearAllDynamicPropertiesByEntityTypeResponse {
}
export interface validateDynamicPropertyTemplatesForDelete {
}
export interface validateDynamicPropertyTemplatesForDeleteResponse {
}
export interface updateTemplate {
}
export interface updateTemplateResponse {
}
export interface alterPropertiesByEntityIdAndType {
}
export interface alterPropertiesByEntityIdAndTypeResponse {
}
export interface findPropertiesByTemplateId {
}
export interface findPropertiesByTemplateIdResponse {
}
export interface findRFTasksPropertiesByTemplateId {
}
export interface findRFTasksPropertiesByTemplateIdResponse {
}
export interface validateDynamicPropertyTemplates {
}
export interface validateDynamicPropertyTemplatesResponse {
}
export interface createAllPropertiesByEntityIdAndType {
}
export interface createAllPropertiesByEntityIdAndTypeResponse {
}
export interface findPropertiesByEntityIdAndTypeWithTemplate {
}
export interface findPropertiesByEntityIdAndTypeWithTemplateResponse {
}
export interface saveDynamicPropertyTemplatesByEntityType {
}
export interface saveDynamicPropertyTemplatesByEntityTypeResponse {
}
export interface findTemplatesByType {
}
export interface findTemplatesByTypeResponse {
}
export interface findTemplateById {
}
export interface findTemplateByIdResponse {
}
export interface clearAllAndReloadDynamicPropertiesFromFile {
}
export interface clearAllAndReloadDynamicPropertiesFromFileResponse {
}
export interface loadDynamicPropertiesFromFile {
}
export interface loadDynamicPropertiesFromFileResponse {
}
