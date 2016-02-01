
export const enum PropertyDataType {
	STRING = 0,
	BOOLEAN = 1,
	INTEGER = 2
}
export const enum PropertyDiscriminator {
	SYSTEM = 0,
	VIEW_GROUP = 1,
	USER = 2
}
export const enum Property {
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
export const enum DataType {
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
export const enum ExternalSetStructureType {
	LIST = 0,
	HIERARCHY = 1
}
export const enum DomainType {
	ANY_VALUE = 0,
	RANGE = 1,
	REGULAR_SET = 2,
	DYNAMIC_SET = 3,
	EXTERNAL_SET = 4
}
export const enum EntityStatus {
	DISABLED = 0,
	RETIRED = 1,
	DEPRECATED = 2,
	ENABLED = 3
}
export const enum ApprovalStrategyType {
	NONE = 0,
	ALL = 1,
	ANY = 2
}
export const enum AssetState {
	DRAFT = 0,
	CANDIDATE = 1,
	APPROVED = 2,
	REJECTED = 3,
	RETIRED = 4
}
export const enum VoterActionType {
	APPROVE = 0,
	REJECT = 1
}
export const enum AuditStyle {
	NONE = 0,
	ENVERS = 1,
	AUDIT_LOG = 2
}
export const enum VersionInc {
	MAJOR = 0,
	MINOR = 1,
	NON = 2
}
export const enum WorkflowStatus {
	NEW = 0,
	IN_PROGRESS = 1,
	COMPLETED = 2
}
export const enum TaskWorkflowProperties {
	CONFLICT = 0,
	RESOLVE_CONFLICT = 1,
	NON_DEPLOY_FT = 2,
	RESOLVE_NONDEPLOY_FT = 3,
	WARNING = 4,
	RESOLVE_WARNING = 5,
	OWNER_TASK_ID = 6
}
export const enum FactTypeFlag {
}
export const enum PrimitiveDataType {
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
export const enum RowOperation {
	NEW = 0,
	UPDATED = 1,
	DELETED = 2
}
export const enum PullRequestChangeType {
	ASSET_ADDED = 0,
	ASSET_REMOVED = 1,
	DEPLOYMENT_DESCRIPTOR_CHANGED = 2,
	DEPLOYMENT_DESCRIPTOR_ADDED = 3,
	DEPLOYMENT_DESCRIPTOR_REMOVED = 4
}
export const enum pullRequestType {
	AD_HOC = 0,
	FULL_MERGE = 1,
	PARTIAL_MERGE = 2
}
export const enum PullRequestStatus {
	DRAFT = 0,
	CANDIDATE = 1,
	APPROVED = 2
}
export const enum TaskType {
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
export const enum Priority {
	HIGH = 0,
	NORMAL = 1,
	LOW = 2
}
export const enum StateStatus {
	WAITING_FOR_APPROVAL = 0,
	REJECTED = 1,
	APPROVED = 2
}
export const enum ExpressionType {
	SIMPLE = 0,
	COMPLEX = 1
}
export const enum ChangedStatus {
	UNCHANGED = 0,
	DELETED = 1
}
export const enum ModelMappingStatus {
	DRAFT = 0,
	CANDIDATE = 1,
	APPROVED = 2
}
export const enum ReleaseType {
	RELEASE = 0,
	TAG = 1,
	SNAPSHOT_TAG = 2
}
export const enum OperandType {
}
export const enum GlossaryArtifactType {
	FACT_TYPE = 0,
	LINK = 1,
	ALIAS = 2
}
export const enum CountType {
	MAX = 0,
	AVG = 1,
	ALL = 2
}
export const enum revisionType {
	ADD = 0,
	MOD = 1,
	DEL = 2
}
export const enum ValidationType {
	WARNING = 0,
	ERROR = 1
}
export const enum ExportStatus {
	EXPORTED = 0,
	DEPLOYED = 1,
	UNDEPLOYED = 2,
	REQUESTED = 3,
	REJECTED = 4,
	FAILED = 5
}
export const enum RecordType {
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
export const enum ImportFactTypeStatus {
	UNCHANGED = 0,
	NEW_VERSION = 1,
	NEW_FACT_TYPE = 2,
	UPDATED_FACT_TYPE = 3,
	ERROR = 4
}
export const enum Operator {
}
export const enum QueryParameterDefinitionType {
	NONE = 0,
	FACT_TYPE_PARAM = 1,
	EXTERNAL_SET_PARAM = 2
}
export const enum ExternalSetFindLevel {
}
export const enum RepoQueryJunctionType {
	CONJUNCTION = 0,
	DISJUNCTION = 1,
	SUBTRACTION = 2
}
export const enum AuditType {
	IMPORT = 0,
	EXPORT = 1
}
export const enum ImpExpAuditState {
	PASSED = 0,
	FAILED = 1
}
export const enum ValidationLevel {
	DECISION_VIEW = 0,
	RULE_FAMILY_VIEW = 1,
	RULE_ROW = 2
}
export const enum ValidationPrincipleCode {
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
export const enum SankaResponse {
	YEAH_MAN = 0,
	DB_IS_MIA = 1
}
export const enum LogLevel {
	TRACE = 0,
	DEBUG = 1,
	INFO = 2,
	WARN = 3,
	ERROR = 4,
	FATAL = 5
}
export interface PropertyDto {
	property: PropertyConfig;
	value: string;
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
export interface AbstractEntity {
	id: number;
	idSpecified: boolean;
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
export interface ReportDto {
	id: string;
	name: string;
	description: string;
	parameters: ReportParamDto[];
	hasTemplate: boolean;
}
export interface InheritedRoleDto {
	role: Role;
	originViewGroup: ViewGroup;
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
export interface UserRole extends AbstractEntity {
	role: Role;
	startDate: Date;
	startDateSpecified: boolean;
	endDate: Date;
	endDateSpecified: boolean;
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
export interface ExternalSetPropData extends AbstractEntity {
	propertyData: PropertyData;
}
export interface PropertyData extends AbstractEntity {
	descriptor: PropertyDescriptor;
	value: string;
}
export interface Format extends AbstractEntity {
	name: string;
	example: string;
	format: string;
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
export interface Version {
	label: string;
	number: number;
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
export interface EntityType extends AbstractEntity {
	name: string;
	entityClass: string;
	parent: EntityType;
	auditType: AuditStyle;
	auditTypeSpecified: boolean;
	camelCasedName: string;
	displayName: string;
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
export interface Note extends AbstractEntity {
	createdBy: User;
	createdDate: Date;
	createdDateSpecified: boolean;
	text: string;
	containerVersionLabel: string;
	subject: string;
	isLinkOnly: boolean;
}
export interface RuleFlowViewGroup extends AbstractEntity {
	viewGroup: ViewGroup;
}
export interface RuleFlowTasksDynamicProperty extends AbstractEntity {
	template: DynamicPropertyTemplate;
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
export interface ViewGroupUserRolesDto {
	user: User;
	directRoles: Role[];
	inheritedRoles: InheritedRoleDto[];
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
export interface JobInstanceInfo {
	id: number;
	idSpecified: boolean;
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
export interface CreatePullRequestDto {
	targetBranchId: number;
	bcdTaskId: number;
	effectiveDate: Date;
	effectiveDateSpecified: boolean;
}
export interface CountCellDto {
	result: number;
	resultSpecified: boolean;
	countType: CountType;
	countTypeSpecified: boolean;
	aggregatorName: string;
}
export interface CountRowDto {
	name: string;
	results: CountCellDto[];
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
export interface IdName {
	id: number;
	idSpecified: boolean;
	name: string;
}
export interface AssetAdditionalInfo {
	properties: AdditionalInfoPropertiesDto;
	bcdId: number;
	bcdName: string;
	versionCount: number;
	whiteboardCount: number;
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
export interface RuleFamilyViewAddInfoDto extends AssetAdditionalInfo {
	factTypesCount: number;
	rfvsWithSameConclusionCount: number;
	conditionFactTypesCount: number;
	conditionCellFactTypesCount: number;
	conclusionCellFactTypesCount: number;
	messageFactTypesCount: number;
	decisionViewsCount: number;
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
export interface RepoNavigatorSetWithCommonEntityTypeDto {
	entityType: EntityType;
	repoNavigatorDtos: RepositoryNevigatorDto[];
	resultsNotIncluded: number;
}
export interface AssetAdditionalInfoRefsDto {
	otherVersions: RepoNavigatorSetWithCommonEntityTypeDto;
	whiteboardsUsedIn: RepoNavigatorSetWithCommonEntityTypeDto;
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
export interface RuleFamilyViewAddInfoRefsDto extends AssetAdditionalInfoRefsDto {
	factTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	rfvsWithSameConclusion: RepoNavigatorSetWithCommonEntityTypeDto;
	conditionFactTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	conditionCellFactTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	conclusionCellFactTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	messageFactTypes: RepoNavigatorSetWithCommonEntityTypeDto;
	decisionViews: RepoNavigatorSetWithCommonEntityTypeDto;
}
export interface AssetPathDto {
	assetId: number;
	assetIdSpecified: boolean;
	assetEntity: EntityType;
	contextId: number;
	contextIdSpecified: boolean;
	contextType: EntityType;
}
export interface timeZone {
	ID: string;
	rawOffset: number;
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
export interface Waypoint {
	x: number;
	y: number;
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
export interface BPMNShape {
	Bounds: Bounds;
	id: string;
	bpmnElement: string;
}
export interface BPMNPlane {
	BPMNShape: BPMNShape[];
	BPMNEdge: BPMNEdge[];
	id: string;
	bpmnElement: string;
}
export interface BPMNDiagram {
	BPMNPlane: BPMNPlane;
	id: string;
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
export interface ExclusiveGateway {
	id: string;
	name: string;
	factTypeDefinitionId: number;
	factTypeDefinitionIdSpecified: boolean;
}
export interface ExtentionField {
	string: string;
	name: string;
}
export interface CustomProperty {
	templateId: number;
	name: string;
	value: string;
}
export interface extentionElements {
	customProperty: CustomProperty[];
	field: ExtentionField[];
}
export interface ServiceTask {
	extensionElements: extentionElements;
	id: string;
	name: string;
	decisionViewId: number;
	decisionViewIdSpecified: boolean;
	class: string;
}
export interface EndEvent {
	id: string;
	name: string;
}
export interface StartEvent {
	id: string;
	name: string;
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
export interface BPMNDefinitions {
	process: Process;
	BPMNDiagram: BPMNDiagram;
	typeLanguage: string;
	expressionLanguage: string;
	targetNamespace: string;
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
export interface assetValidationStatusInfo {
	assetId: number;
	assetIdSpecified: boolean;
	hasSuppressedWarnings: boolean;
	hasWarnings: boolean;
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
export interface FactTypeInGlossariesHirarchyInfoDto {
	factType: FactType;
	currentGlossaryArtifactInfoDto: GlossaryArtifactInfoDto;
	allFactTypeGlossaryArtifactsInfoDto: GlossaryArtifactInfoDto[];
	editable: boolean;
	hasMoreVersions: boolean;
	movable: boolean;
	domainTemplateOutOfSync: boolean;
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
export interface PropertyDataDto {
	propertyName: string;
	value: string;
	optional: boolean;
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
export interface PreviousExportedRevisionAndActiveExportToEnvDto {
	revisionName: string;
	areActiveExportsForEnvOnProject: boolean;
	isTagged: boolean;
}
export interface ViolationMessage {
	validationType: ValidationType;
	validationTypeSpecified: boolean;
	violationMessage: string;
	template: string;
	property: string;
	bean: string;
}
export interface EnvironmentAndValidationsDto {
	environment: Environment;
	violationMessageList: ViolationMessage[];
	userAuthorizedToExportEnvironemtYn: boolean;
	valid: boolean;
}
export interface FactTypeLinksDto {
	factTypeName: string;
	modelMappingStatus: string;
	factTypeMappedName: string;
	glossaryName: string;
	entityLinkParameters: KeyValueDto[];
}
export interface factTypeLinksWithStrategyOwnersDto {
	approvalStrategyType: ApprovalStrategyType;
	approvalStrategyTypeSpecified: boolean;
	factTypeLinks: FactTypeLinksDto[];
	ownersNames: string[];
}
export interface NotesDto {
	notes: Note[];
	notesEditible: boolean;
	notesEditibleSpecified: boolean;
}
export interface ExportDto {
	fileContent: number[];
	extension: string;
}
export interface deletedReleaseHistoryRecord {
	assetId: number;
	assetIdSpecified: boolean;
	assetName: string;
	assetVersion: string;
	entityType: string;
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
export interface DataTypeFormatsDto {
	dataType: DataType;
	dataTypeSpecified: boolean;
	dataTypeFormats: FormatDataType[];
}
export interface FormatDataType extends AbstractEntity {
	dataType: DataType;
	dataTypeSpecified: boolean;
	isDefaultFormat: boolean;
	format: Format;
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
export interface findAllDataTypesFormats {
}
export interface findAllDataTypesFormatsResponse {
}
export interface setFormatAsDefaultForDataType {
}
export interface setFormatAsDefaultForDataTypeResponse {
}
export interface findFactTypesWithDomainByWhiteboardId {
}
export interface findFactTypesWithDomainByWhiteboardIdResponse {
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
export interface findResourceBundle {
}
export interface findResourceBundleResponse {
}
export interface findValue {
}
export interface findValueResponse {
}
export interface findLogHistoryByEntityId {
}
export interface findLogHistoryByEntityIdResponse {
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
export interface findAudit {
}
export interface findAuditResponse {
}
export interface findFactTypeRevision {
}
export interface findFactTypeRevisionResponse {
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
export interface count {
}
export interface countResponse {
}
export interface findAllCountableEntityTypes {
}
export interface findAllCountableEntityTypesResponse {
}
