class NObject{}

class KeyValueDto extends NObject
{
	private keyField: string = null;
	private valueField: string = null;
	set key(value: string)
	{
		this.keyField = value;
	}
	get key(): string
	{
		return this.keyField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class DecisionViewInfoDto extends NObject
{
	private verbField: string = null;
	private viewField: string = null;
	private conclusionFactTypeNameField: string = null;
	private idField: number = 0;
	private labelField: string = null;
	private stateField: AssetState = 0;
	private stateFieldSpecified: boolean = false;
	private whiteboardField: Whiteboard = null;
	private isValidField: boolean = false;
	private isValidFieldSpecified: boolean = false;
	private versionField: Version = null;
	private editableField: boolean = false;
	private hasWarningsField: boolean = false;
	private hasWarningsFieldSpecified: boolean = false;
	private hasSuppressedWarningsField: boolean = false;
	private viewGroupContextField: IdName = null;
	private isLatestVersionField: boolean = false;
	private isLatestVersionFieldSpecified: boolean = false;
	set verb(value: string)
	{
		this.verbField = value;
	}
	get verb(): string
	{
		return this.verbField;
	}
	set view(value: string)
	{
		this.viewField = value;
	}
	get view(): string
	{
		return this.viewField;
	}
	set conclusionFactTypeName(value: string)
	{
		this.conclusionFactTypeNameField = value;
	}
	get conclusionFactTypeName(): string
	{
		return this.conclusionFactTypeNameField;
	}
	set id(value: number)
	{
		this.idField = value;
	}
	get id(): number
	{
		return this.idField;
	}
	set label(value: string)
	{
		this.labelField = value;
	}
	get label(): string
	{
		return this.labelField;
	}
	set state(value: AssetState)
	{
		this.stateField = value;
	}
	get state(): AssetState
	{
		return this.stateField;
	}
	set stateSpecified(value: boolean)
	{
		this.stateFieldSpecified = value;
	}
	get stateSpecified(): boolean
	{
		return this.stateFieldSpecified;
	}
	set whiteboard(value: Whiteboard)
	{
		this.whiteboardField = value;
	}
	get whiteboard(): Whiteboard
	{
		return this.whiteboardField;
	}
	set isValid(value: boolean)
	{
		this.isValidField = value;
	}
	get isValid(): boolean
	{
		return this.isValidField;
	}
	set isValidSpecified(value: boolean)
	{
		this.isValidFieldSpecified = value;
	}
	get isValidSpecified(): boolean
	{
		return this.isValidFieldSpecified;
	}
	set version(value: Version)
	{
		this.versionField = value;
	}
	get version(): Version
	{
		return this.versionField;
	}
	set editable(value: boolean)
	{
		this.editableField = value;
	}
	get editable(): boolean
	{
		return this.editableField;
	}
	set hasWarnings(value: boolean)
	{
		this.hasWarningsField = value;
	}
	get hasWarnings(): boolean
	{
		return this.hasWarningsField;
	}
	set hasWarningsSpecified(value: boolean)
	{
		this.hasWarningsFieldSpecified = value;
	}
	get hasWarningsSpecified(): boolean
	{
		return this.hasWarningsFieldSpecified;
	}
	set hasSuppressedWarnings(value: boolean)
	{
		this.hasSuppressedWarningsField = value;
	}
	get hasSuppressedWarnings(): boolean
	{
		return this.hasSuppressedWarningsField;
	}
	set viewGroupContext(value: IdName)
	{
		this.viewGroupContextField = value;
	}
	get viewGroupContext(): IdName
	{
		return this.viewGroupContextField;
	}
	set isLatestVersion(value: boolean)
	{
		this.isLatestVersionField = value;
	}
	get isLatestVersion(): boolean
	{
		return this.isLatestVersionField;
	}
	set isLatestVersionSpecified(value: boolean)
	{
		this.isLatestVersionFieldSpecified = value;
	}
	get isLatestVersionSpecified(): boolean
	{
		return this.isLatestVersionFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
enum AssetState
{
	DRAFT,
	CANDIDATE,
	APPROVED,
	REJECTED,
	RETIRED
}
class AbstractEntity extends NObject
{
	private idField: number = 0;
	private idFieldSpecified: boolean = false;
	set id(value: number)
	{
		this.idField = value;
	}
	get id(): number
	{
		return this.idField;
	}
	set idSpecified(value: boolean)
	{
		this.idFieldSpecified = value;
	}
	get idSpecified(): boolean
	{
		return this.idFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class Whiteboard extends AbstractEntity
{
	private activeField: boolean = false;
	private analystField: boolean = false;
	private bcdTaskWorkflowField: TaskWorkflowTmpl = null;
	private editableField: boolean = false;
	private ftTaskWorkflowField: TaskWorkflowTmpl = null;
	private nameField: string = null;
	private ownerField: User = null;
	private releaseField: Release = null;
	private viewGroupField: ViewGroup = null;
	set active(value: boolean)
	{
		this.activeField = value;
	}
	get active(): boolean
	{
		return this.activeField;
	}
	set analyst(value: boolean)
	{
		this.analystField = value;
	}
	get analyst(): boolean
	{
		return this.analystField;
	}
	set bcdTaskWorkflow(value: TaskWorkflowTmpl)
	{
		this.bcdTaskWorkflowField = value;
	}
	get bcdTaskWorkflow(): TaskWorkflowTmpl
	{
		return this.bcdTaskWorkflowField;
	}
	set editable(value: boolean)
	{
		this.editableField = value;
	}
	get editable(): boolean
	{
		return this.editableField;
	}
	set ftTaskWorkflow(value: TaskWorkflowTmpl)
	{
		this.ftTaskWorkflowField = value;
	}
	get ftTaskWorkflow(): TaskWorkflowTmpl
	{
		return this.ftTaskWorkflowField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set owner(value: User)
	{
		this.ownerField = value;
	}
	get owner(): User
	{
		return this.ownerField;
	}
	set release(value: Release)
	{
		this.releaseField = value;
	}
	get release(): Release
	{
		return this.releaseField;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	constructor()
	{
		super();
	}
}
class TaskWorkflowTmpl extends AbstractEntity
{
	private workflowField: Workflow = null;
	private stateUsersField: StateUser[] = null;
	private notificationUsersField: NotificationUser[] = null;
	set workflow(value: Workflow)
	{
		this.workflowField = value;
	}
	get workflow(): Workflow
	{
		return this.workflowField;
	}
	set stateUsers(value: StateUser[])
	{
		this.stateUsersField = value;
	}
	get stateUsers(): StateUser[]
	{
		return this.stateUsersField;
	}
	set notificationUsers(value: NotificationUser[])
	{
		this.notificationUsersField = value;
	}
	get notificationUsers(): NotificationUser[]
	{
		return this.notificationUsersField;
	}
	constructor()
	{
		super();
	}
}
class Workflow extends AbstractEntity
{
	private nameField: string = null;
	private objectTypeField: EntityType = null;
	private viewGroupField: ViewGroup = null;
	private transitionsField: Transition[] = null;
	private stateRolesField: StateRole[] = null;
	private startStateField: State = null;
	private distinctionListField: State[] = null;
	private layoutField: string = null;
	private activeField: boolean = false;
	private submissionListField: boolean = false;
	private allowGroupQueueField: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set objectType(value: EntityType)
	{
		this.objectTypeField = value;
	}
	get objectType(): EntityType
	{
		return this.objectTypeField;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set transitions(value: Transition[])
	{
		this.transitionsField = value;
	}
	get transitions(): Transition[]
	{
		return this.transitionsField;
	}
	set stateRoles(value: StateRole[])
	{
		this.stateRolesField = value;
	}
	get stateRoles(): StateRole[]
	{
		return this.stateRolesField;
	}
	set startState(value: State)
	{
		this.startStateField = value;
	}
	get startState(): State
	{
		return this.startStateField;
	}
	set distinctionList(value: State[])
	{
		this.distinctionListField = value;
	}
	get distinctionList(): State[]
	{
		return this.distinctionListField;
	}
	set layout(value: string)
	{
		this.layoutField = value;
	}
	get layout(): string
	{
		return this.layoutField;
	}
	set active(value: boolean)
	{
		this.activeField = value;
	}
	get active(): boolean
	{
		return this.activeField;
	}
	set submissionList(value: boolean)
	{
		this.submissionListField = value;
	}
	get submissionList(): boolean
	{
		return this.submissionListField;
	}
	set allowGroupQueue(value: boolean)
	{
		this.allowGroupQueueField = value;
	}
	get allowGroupQueue(): boolean
	{
		return this.allowGroupQueueField;
	}
	constructor()
	{
		super();
	}
}
class EntityType extends AbstractEntity
{
	private nameField: string = null;
	private entityClassField: string = null;
	private parentField: EntityType = null;
	private auditTypeField: AuditStyle = 0;
	private auditTypeFieldSpecified: boolean = false;
	private camelCasedNameField: string = null;
	private displayNameField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set entityClass(value: string)
	{
		this.entityClassField = value;
	}
	get entityClass(): string
	{
		return this.entityClassField;
	}
	set parent(value: EntityType)
	{
		this.parentField = value;
	}
	get parent(): EntityType
	{
		return this.parentField;
	}
	set auditType(value: AuditStyle)
	{
		this.auditTypeField = value;
	}
	get auditType(): AuditStyle
	{
		return this.auditTypeField;
	}
	set auditTypeSpecified(value: boolean)
	{
		this.auditTypeFieldSpecified = value;
	}
	get auditTypeSpecified(): boolean
	{
		return this.auditTypeFieldSpecified;
	}
	set camelCasedName(value: string)
	{
		this.camelCasedNameField = value;
	}
	get camelCasedName(): string
	{
		return this.camelCasedNameField;
	}
	set displayName(value: string)
	{
		this.displayNameField = value;
	}
	get displayName(): string
	{
		return this.displayNameField;
	}
	constructor()
	{
		super();
	}
}
enum AuditStyle
{
	NONE,
	ENVERS,
	AUDIT_LOG
}
class AppFile extends AbstractEntity
{
	private fileNameField: string = null;
	private fileExtensionField: FileExtension = null;
	private fileContentField: number[] = null;
	set fileName(value: string)
	{
		this.fileNameField = value;
	}
	get fileName(): string
	{
		return this.fileNameField;
	}
	set fileExtension(value: FileExtension)
	{
		this.fileExtensionField = value;
	}
	get fileExtension(): FileExtension
	{
		return this.fileExtensionField;
	}
	set fileContent(value: number[])
	{
		this.fileContentField = value;
	}
	get fileContent(): number[]
	{
		return this.fileContentField;
	}
	constructor()
	{
		super();
	}
}
class FileExtension extends AbstractEntity
{
	private mimeTypeField: string = null;
	private maxByteSizeField: number = 0;
	private descriptionField: string = null;
	set mimeType(value: string)
	{
		this.mimeTypeField = value;
	}
	get mimeType(): string
	{
		return this.mimeTypeField;
	}
	set maxByteSize(value: number)
	{
		this.maxByteSizeField = value;
	}
	get maxByteSize(): number
	{
		return this.maxByteSizeField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	constructor()
	{
		super();
	}
}
class MessageDecorator extends AbstractEntity
{
	private nameField: string = null;
	private prefixField: string = null;
	private suffixField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set prefix(value: string)
	{
		this.prefixField = value;
	}
	get prefix(): string
	{
		return this.prefixField;
	}
	set suffix(value: string)
	{
		this.suffixField = value;
	}
	get suffix(): string
	{
		return this.suffixField;
	}
	constructor()
	{
		super();
	}
}
class MessageElementDefinition extends AbstractEntity
{
	private resolverBeanNameField: string = null;
	private nameField: string = null;
	private descritpionField: string = null;
	private prefixField: string = null;
	private suffixField: string = null;
	set resolverBeanName(value: string)
	{
		this.resolverBeanNameField = value;
	}
	get resolverBeanName(): string
	{
		return this.resolverBeanNameField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set descritpion(value: string)
	{
		this.descritpionField = value;
	}
	get descritpion(): string
	{
		return this.descritpionField;
	}
	set prefix(value: string)
	{
		this.prefixField = value;
	}
	get prefix(): string
	{
		return this.prefixField;
	}
	set suffix(value: string)
	{
		this.suffixField = value;
	}
	get suffix(): string
	{
		return this.suffixField;
	}
	constructor()
	{
		super();
	}
}
class MessageElement extends AbstractEntity
{
	private definitionField: MessageElementDefinition = null;
	private parameterIdField: number = 0;
	private parameterIdFieldSpecified: boolean = false;
	private defaultPlacholderField: string = null;
	private resolvedPlacholderField: string = null;
	private valueField: string = null;
	private defaultValueField: boolean = false;
	private displayPlaceholderField: string = null;
	set definition(value: MessageElementDefinition)
	{
		this.definitionField = value;
	}
	get definition(): MessageElementDefinition
	{
		return this.definitionField;
	}
	set parameterId(value: number)
	{
		this.parameterIdField = value;
	}
	get parameterId(): number
	{
		return this.parameterIdField;
	}
	set parameterIdSpecified(value: boolean)
	{
		this.parameterIdFieldSpecified = value;
	}
	get parameterIdSpecified(): boolean
	{
		return this.parameterIdFieldSpecified;
	}
	set defaultPlacholder(value: string)
	{
		this.defaultPlacholderField = value;
	}
	get defaultPlacholder(): string
	{
		return this.defaultPlacholderField;
	}
	set resolvedPlacholder(value: string)
	{
		this.resolvedPlacholderField = value;
	}
	get resolvedPlacholder(): string
	{
		return this.resolvedPlacholderField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	set defaultValue(value: boolean)
	{
		this.defaultValueField = value;
	}
	get defaultValue(): boolean
	{
		return this.defaultValueField;
	}
	set displayPlaceholder(value: string)
	{
		this.displayPlaceholderField = value;
	}
	get displayPlaceholder(): string
	{
		return this.displayPlaceholderField;
	}
	constructor()
	{
		super();
	}
}
class RuleRowMessage extends AbstractEntity
{
	private ruleRowField: RuleRow = null;
	private decisionViewField: DecisionView = null;
	private categoryField: RowMessageCategory = null;
	private textField: string = null;
	private elementsField: MessageElement[] = null;
	private decoratorsField: MessageDecorator[] = null;
	private notesField: Note[] = null;
	private logicalSignField: string = null;
	private externalSignField: string = null;
	set ruleRow(value: RuleRow)
	{
		this.ruleRowField = value;
	}
	get ruleRow(): RuleRow
	{
		return this.ruleRowField;
	}
	set decisionView(value: DecisionView)
	{
		this.decisionViewField = value;
	}
	get decisionView(): DecisionView
	{
		return this.decisionViewField;
	}
	set category(value: RowMessageCategory)
	{
		this.categoryField = value;
	}
	get category(): RowMessageCategory
	{
		return this.categoryField;
	}
	set text(value: string)
	{
		this.textField = value;
	}
	get text(): string
	{
		return this.textField;
	}
	set elements(value: MessageElement[])
	{
		this.elementsField = value;
	}
	get elements(): MessageElement[]
	{
		return this.elementsField;
	}
	set decorators(value: MessageDecorator[])
	{
		this.decoratorsField = value;
	}
	get decorators(): MessageDecorator[]
	{
		return this.decoratorsField;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	set logicalSign(value: string)
	{
		this.logicalSignField = value;
	}
	get logicalSign(): string
	{
		return this.logicalSignField;
	}
	set externalSign(value: string)
	{
		this.externalSignField = value;
	}
	get externalSign(): string
	{
		return this.externalSignField;
	}
	constructor()
	{
		super();
	}
}
class ExtendableEntity extends AbstractEntity
{
	private dpField: DynamicProperty[] = null;
	set dp(value: DynamicProperty[])
	{
		this.dpField = value;
	}
	get dp(): DynamicProperty[]
	{
		return this.dpField;
	}
	constructor()
	{
		super();
	}
}
class RuleRow extends ExtendableEntity
{
	private groupIdField: number = 0;
	private groupIdFieldSpecified: boolean = false;
	private conditionCellsField: ConditionCell[] = null;
	private conclusionCellField: ConclusionCell = null;
	private rulePatternField: string = null;
	private externalSignField: string = null;
	private internalSignField: string = null;
	private dateAddedField: DateTime = null;
	private dateAddedFieldSpecified: boolean = false;
	private notesField: Note[] = null;
	private logicalSignField: string = null;
	set groupId(value: number)
	{
		this.groupIdField = value;
	}
	get groupId(): number
	{
		return this.groupIdField;
	}
	set groupIdSpecified(value: boolean)
	{
		this.groupIdFieldSpecified = value;
	}
	get groupIdSpecified(): boolean
	{
		return this.groupIdFieldSpecified;
	}
	set conditionCells(value: ConditionCell[])
	{
		this.conditionCellsField = value;
	}
	get conditionCells(): ConditionCell[]
	{
		return this.conditionCellsField;
	}
	set conclusionCell(value: ConclusionCell)
	{
		this.conclusionCellField = value;
	}
	get conclusionCell(): ConclusionCell
	{
		return this.conclusionCellField;
	}
	set rulePattern(value: string)
	{
		this.rulePatternField = value;
	}
	get rulePattern(): string
	{
		return this.rulePatternField;
	}
	set externalSign(value: string)
	{
		this.externalSignField = value;
	}
	get externalSign(): string
	{
		return this.externalSignField;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	set dateAdded(value: DateTime)
	{
		this.dateAddedField = value;
	}
	get dateAdded(): DateTime
	{
		return this.dateAddedField;
	}
	set dateAddedSpecified(value: boolean)
	{
		this.dateAddedFieldSpecified = value;
	}
	get dateAddedSpecified(): boolean
	{
		return this.dateAddedFieldSpecified;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	set logicalSign(value: string)
	{
		this.logicalSignField = value;
	}
	get logicalSign(): string
	{
		return this.logicalSignField;
	}
	constructor()
	{
		super();
	}
}
class ConditionCell extends AbstractEntity
{
	private cellOperatorField: CellOperator = null;
	private conditionField: Condition = null;
	private operandFactTypeDefinitionField: FactTypeDefinition = null;
	private valueField: string = null;
	private formulaField: Formula = null;
	private rowCellValuesField: RowCellValue[] = null;
	private notesField: Note[] = null;
	set cellOperator(value: CellOperator)
	{
		this.cellOperatorField = value;
	}
	get cellOperator(): CellOperator
	{
		return this.cellOperatorField;
	}
	set condition(value: Condition)
	{
		this.conditionField = value;
	}
	get condition(): Condition
	{
		return this.conditionField;
	}
	set operandFactTypeDefinition(value: FactTypeDefinition)
	{
		this.operandFactTypeDefinitionField = value;
	}
	get operandFactTypeDefinition(): FactTypeDefinition
	{
		return this.operandFactTypeDefinitionField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	set formula(value: Formula)
	{
		this.formulaField = value;
	}
	get formula(): Formula
	{
		return this.formulaField;
	}
	set rowCellValues(value: RowCellValue[])
	{
		this.rowCellValuesField = value;
	}
	get rowCellValues(): RowCellValue[]
	{
		return this.rowCellValuesField;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	constructor()
	{
		super();
	}
}
class CellOperator extends AbstractEntity
{
	private operatorKeyField: string = null;
	private operatorField: string = null;
	private dataTypesField: Nullable<DataType>[] = null;
	private rightOperandTypesField: Nullable<OperandType>[] = null;
	private symbolField: string = null;
	private execClassField: string = null;
	private inclusionTypeField: string = null;
	set operatorKey(value: string)
	{
		this.operatorKeyField = value;
	}
	get operatorKey(): string
	{
		return this.operatorKeyField;
	}
	set operator(value: string)
	{
		this.operatorField = value;
	}
	get operator(): string
	{
		return this.operatorField;
	}
	set dataTypes(value: Nullable<DataType>[])
	{
		this.dataTypesField = value;
	}
	get dataTypes(): Nullable<DataType>[]
	{
		return this.dataTypesField;
	}
	set rightOperandTypes(value: Nullable<OperandType>[])
	{
		this.rightOperandTypesField = value;
	}
	get rightOperandTypes(): Nullable<OperandType>[]
	{
		return this.rightOperandTypesField;
	}
	set symbol(value: string)
	{
		this.symbolField = value;
	}
	get symbol(): string
	{
		return this.symbolField;
	}
	set execClass(value: string)
	{
		this.execClassField = value;
	}
	get execClass(): string
	{
		return this.execClassField;
	}
	set inclusionType(value: string)
	{
		this.inclusionTypeField = value;
	}
	get inclusionType(): string
	{
		return this.inclusionTypeField;
	}
	constructor()
	{
		super();
	}
}
enum DataType
{
	AMOUNT,
	CODE,
	DATE,
	DATE_TIME,
	IDENTIFIER,
	INDICATOR,
	NAME,
	NUMERIC,
	PERCENT,
	QUANTITY,
	TEXT,
	LIST,
	CONCLUSION,
	CONCLUSION_LIST,
	DAY,
	BASIS_POINTS,
	MONTH_YEAR,
	MONTH,
	YEAR,
	ENUMERATOR
}
enum OperandType
{
	SINGLE,
	DOUBLE,
	MULTIPLE
}
class Condition extends AbstractEntity
{
	private factTypeDefinitionField: FactTypeDefinition = null;
	private populatedColumnField: boolean = false;
	private notesField: Note[] = null;
	set factTypeDefinition(value: FactTypeDefinition)
	{
		this.factTypeDefinitionField = value;
	}
	get factTypeDefinition(): FactTypeDefinition
	{
		return this.factTypeDefinitionField;
	}
	set populatedColumn(value: boolean)
	{
		this.populatedColumnField = value;
	}
	get populatedColumn(): boolean
	{
		return this.populatedColumnField;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	constructor()
	{
		super();
	}
}
class AssetDefinition extends AbstractEntity
{
	constructor()
	{
		super();
	}
}
class FactTypeDefinition extends AssetDefinition
{
	private fullFactTypeNameField: string = null;
	private latestBusinessFriendlyNameField: string = null;
	private descriptionField: string = null;
	private businessConceptField: BusinessConcept = null;
	private atomicFactTypeField: string = null;
	private qualifiersField: QualifierInstance[] = null;
	private modelMappingsField: ModelMapping[] = null;
	private customMetadataInstancesField: CustomMetadataInstance[] = null;
	private repeatingGroupFactTypeDefinitionsField: RepeatingGroupFactTypeDefinition[] = null;
	set fullFactTypeName(value: string)
	{
		this.fullFactTypeNameField = value;
	}
	get fullFactTypeName(): string
	{
		return this.fullFactTypeNameField;
	}
	set latestBusinessFriendlyName(value: string)
	{
		this.latestBusinessFriendlyNameField = value;
	}
	get latestBusinessFriendlyName(): string
	{
		return this.latestBusinessFriendlyNameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set businessConcept(value: BusinessConcept)
	{
		this.businessConceptField = value;
	}
	get businessConcept(): BusinessConcept
	{
		return this.businessConceptField;
	}
	set atomicFactType(value: string)
	{
		this.atomicFactTypeField = value;
	}
	get atomicFactType(): string
	{
		return this.atomicFactTypeField;
	}
	set qualifiers(value: QualifierInstance[])
	{
		this.qualifiersField = value;
	}
	get qualifiers(): QualifierInstance[]
	{
		return this.qualifiersField;
	}
	set modelMappings(value: ModelMapping[])
	{
		this.modelMappingsField = value;
	}
	get modelMappings(): ModelMapping[]
	{
		return this.modelMappingsField;
	}
	set customMetadataInstances(value: CustomMetadataInstance[])
	{
		this.customMetadataInstancesField = value;
	}
	get customMetadataInstances(): CustomMetadataInstance[]
	{
		return this.customMetadataInstancesField;
	}
	set repeatingGroupFactTypeDefinitions(value: RepeatingGroupFactTypeDefinition[])
	{
		this.repeatingGroupFactTypeDefinitionsField = value;
	}
	get repeatingGroupFactTypeDefinitions(): RepeatingGroupFactTypeDefinition[]
	{
		return this.repeatingGroupFactTypeDefinitionsField;
	}
	constructor()
	{
		super();
	}
}
class BusinessConcept extends ExtendableEntity
{
	private nameField: string = null;
	private businessConceptsField: BusinessConcept[] = null;
	private pathField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set businessConcepts(value: BusinessConcept[])
	{
		this.businessConceptsField = value;
	}
	get businessConcepts(): BusinessConcept[]
	{
		return this.businessConceptsField;
	}
	set path(value: string)
	{
		this.pathField = value;
	}
	get path(): string
	{
		return this.pathField;
	}
	constructor()
	{
		super();
	}
}
class DynamicProperty extends AbstractEntity
{
	private templateField: DynamicPropertyTemplate = null;
	private valueField: string = null;
	set template(value: DynamicPropertyTemplate)
	{
		this.templateField = value;
	}
	get template(): DynamicPropertyTemplate
	{
		return this.templateField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class DynamicPropertyTemplate extends AbstractEntity
{
	private identifierNameField: string = null;
	private nameField: string = null;
	private entityStatusField: EntityStatus = 0;
	private entityStatusFieldSpecified: boolean = false;
	private domainField: Domain = null;
	private displayFormatField: Format = null;
	private defaultValueField: string = null;
	set identifierName(value: string)
	{
		this.identifierNameField = value;
	}
	get identifierName(): string
	{
		return this.identifierNameField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set entityStatus(value: EntityStatus)
	{
		this.entityStatusField = value;
	}
	get entityStatus(): EntityStatus
	{
		return this.entityStatusField;
	}
	set entityStatusSpecified(value: boolean)
	{
		this.entityStatusFieldSpecified = value;
	}
	get entityStatusSpecified(): boolean
	{
		return this.entityStatusFieldSpecified;
	}
	set domain(value: Domain)
	{
		this.domainField = value;
	}
	get domain(): Domain
	{
		return this.domainField;
	}
	set displayFormat(value: Format)
	{
		this.displayFormatField = value;
	}
	get displayFormat(): Format
	{
		return this.displayFormatField;
	}
	set defaultValue(value: string)
	{
		this.defaultValueField = value;
	}
	get defaultValue(): string
	{
		return this.defaultValueField;
	}
	constructor()
	{
		super();
	}
}
enum EntityStatus
{
	DISABLED,
	RETIRED,
	DEPRECATED,
	ENABLED
}
class Domain extends AbstractEntity
{
	private domainTypeField: DomainType = 0;
	private domainTypeFieldSpecified: boolean = false;
	private dataTypeField: DataType = 0;
	private dataTypeFieldSpecified: boolean = false;
	private formatField: string = null;
	private requiredField: boolean = false;
	private rangesField: Range[] = null;
	private domainValuesField: DomainValue[] = null;
	private nameField: string = null;
	private isTemplateField: boolean = false;
	private isDepricatedField: boolean = false;
	private templateField: Domain = null;
	private ownerNameField: string = null;
	private glossariesField: Glossary[] = null;
	private isLocalField: boolean = false;
	private externalSetInstanceField: ExternalSetInstance = null;
	private lengthField: number = 0;
	private lengthFieldSpecified: boolean = false;
	private regexField: string = null;
	private regexMsgField: string = null;
	set domainType(value: DomainType)
	{
		this.domainTypeField = value;
	}
	get domainType(): DomainType
	{
		return this.domainTypeField;
	}
	set domainTypeSpecified(value: boolean)
	{
		this.domainTypeFieldSpecified = value;
	}
	get domainTypeSpecified(): boolean
	{
		return this.domainTypeFieldSpecified;
	}
	set dataType(value: DataType)
	{
		this.dataTypeField = value;
	}
	get dataType(): DataType
	{
		return this.dataTypeField;
	}
	set dataTypeSpecified(value: boolean)
	{
		this.dataTypeFieldSpecified = value;
	}
	get dataTypeSpecified(): boolean
	{
		return this.dataTypeFieldSpecified;
	}
	set format(value: string)
	{
		this.formatField = value;
	}
	get format(): string
	{
		return this.formatField;
	}
	set required(value: boolean)
	{
		this.requiredField = value;
	}
	get required(): boolean
	{
		return this.requiredField;
	}
	set ranges(value: Range[])
	{
		this.rangesField = value;
	}
	get ranges(): Range[]
	{
		return this.rangesField;
	}
	set domainValues(value: DomainValue[])
	{
		this.domainValuesField = value;
	}
	get domainValues(): DomainValue[]
	{
		return this.domainValuesField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set isTemplate(value: boolean)
	{
		this.isTemplateField = value;
	}
	get isTemplate(): boolean
	{
		return this.isTemplateField;
	}
	set isDepricated(value: boolean)
	{
		this.isDepricatedField = value;
	}
	get isDepricated(): boolean
	{
		return this.isDepricatedField;
	}
	set template(value: Domain)
	{
		this.templateField = value;
	}
	get template(): Domain
	{
		return this.templateField;
	}
	set ownerName(value: string)
	{
		this.ownerNameField = value;
	}
	get ownerName(): string
	{
		return this.ownerNameField;
	}
	set glossaries(value: Glossary[])
	{
		this.glossariesField = value;
	}
	get glossaries(): Glossary[]
	{
		return this.glossariesField;
	}
	set isLocal(value: boolean)
	{
		this.isLocalField = value;
	}
	get isLocal(): boolean
	{
		return this.isLocalField;
	}
	set externalSetInstance(value: ExternalSetInstance)
	{
		this.externalSetInstanceField = value;
	}
	get externalSetInstance(): ExternalSetInstance
	{
		return this.externalSetInstanceField;
	}
	set length(value: number)
	{
		this.lengthField = value;
	}
	get length(): number
	{
		return this.lengthField;
	}
	set lengthSpecified(value: boolean)
	{
		this.lengthFieldSpecified = value;
	}
	get lengthSpecified(): boolean
	{
		return this.lengthFieldSpecified;
	}
	set regex(value: string)
	{
		this.regexField = value;
	}
	get regex(): string
	{
		return this.regexField;
	}
	set regexMsg(value: string)
	{
		this.regexMsgField = value;
	}
	get regexMsg(): string
	{
		return this.regexMsgField;
	}
	constructor()
	{
		super();
	}
}
enum DomainType
{
	ANY_VALUE,
	RANGE,
	REGULAR_SET,
	DYNAMIC_SET,
	EXTERNAL_SET
}
class Range extends NObject
{
	private endValueField: string = null;
	private endValueIncludedField: boolean = false;
	private endValueIncludedFieldSpecified: boolean = false;
	private startValueField: string = null;
	private startValueIncludedField: boolean = false;
	private startValueIncludedFieldSpecified: boolean = false;
	set endValue(value: string)
	{
		this.endValueField = value;
	}
	get endValue(): string
	{
		return this.endValueField;
	}
	set endValueIncluded(value: boolean)
	{
		this.endValueIncludedField = value;
	}
	get endValueIncluded(): boolean
	{
		return this.endValueIncludedField;
	}
	set endValueIncludedSpecified(value: boolean)
	{
		this.endValueIncludedFieldSpecified = value;
	}
	get endValueIncludedSpecified(): boolean
	{
		return this.endValueIncludedFieldSpecified;
	}
	set startValue(value: string)
	{
		this.startValueField = value;
	}
	get startValue(): string
	{
		return this.startValueField;
	}
	set startValueIncluded(value: boolean)
	{
		this.startValueIncludedField = value;
	}
	get startValueIncluded(): boolean
	{
		return this.startValueIncludedField;
	}
	set startValueIncludedSpecified(value: boolean)
	{
		this.startValueIncludedFieldSpecified = value;
	}
	get startValueIncludedSpecified(): boolean
	{
		return this.startValueIncludedFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class DomainValue extends NObject
{
	private valField: string = null;
	set val(value: string)
	{
		this.valField = value;
	}
	get val(): string
	{
		return this.valField;
	}
	constructor()
	{
		super();
	}
}
class Glossary extends AbstractEntity
{
	private nameField: string = null;
	private autoGenerateNameField: boolean = false;
	private autoGenerateNameFieldSpecified: boolean = false;
	private qualifiersField: Qualifier[] = null;
	private customMetadataField: CustomMetadataElement[] = null;
	private domainTemplatesField: Domain[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set autoGenerateName(value: boolean)
	{
		this.autoGenerateNameField = value;
	}
	get autoGenerateName(): boolean
	{
		return this.autoGenerateNameField;
	}
	set autoGenerateNameSpecified(value: boolean)
	{
		this.autoGenerateNameFieldSpecified = value;
	}
	get autoGenerateNameSpecified(): boolean
	{
		return this.autoGenerateNameFieldSpecified;
	}
	set qualifiers(value: Qualifier[])
	{
		this.qualifiersField = value;
	}
	get qualifiers(): Qualifier[]
	{
		return this.qualifiersField;
	}
	set customMetadata(value: CustomMetadataElement[])
	{
		this.customMetadataField = value;
	}
	get customMetadata(): CustomMetadataElement[]
	{
		return this.customMetadataField;
	}
	set domainTemplates(value: Domain[])
	{
		this.domainTemplatesField = value;
	}
	get domainTemplates(): Domain[]
	{
		return this.domainTemplatesField;
	}
	constructor()
	{
		super();
	}
}
class Qualifier extends AbstractEntity
{
	private nameField: string = null;
	private qualifierValuesField: QualifierValue[] = null;
	private qualifierPositionField: number = 0;
	private qualifierPositionFieldSpecified: boolean = false;
	private prefixDelimiterField: string = null;
	private postfixDelimiterField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set qualifierValues(value: QualifierValue[])
	{
		this.qualifierValuesField = value;
	}
	get qualifierValues(): QualifierValue[]
	{
		return this.qualifierValuesField;
	}
	set qualifierPosition(value: number)
	{
		this.qualifierPositionField = value;
	}
	get qualifierPosition(): number
	{
		return this.qualifierPositionField;
	}
	set qualifierPositionSpecified(value: boolean)
	{
		this.qualifierPositionFieldSpecified = value;
	}
	get qualifierPositionSpecified(): boolean
	{
		return this.qualifierPositionFieldSpecified;
	}
	set prefixDelimiter(value: string)
	{
		this.prefixDelimiterField = value;
	}
	get prefixDelimiter(): string
	{
		return this.prefixDelimiterField;
	}
	set postfixDelimiter(value: string)
	{
		this.postfixDelimiterField = value;
	}
	get postfixDelimiter(): string
	{
		return this.postfixDelimiterField;
	}
	constructor()
	{
		super();
	}
}
class QualifierValue extends AbstractEntity
{
	private valueField: string = null;
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class CustomMetadataElement extends AbstractEntity
{
	private nameField: string = null;
	private requiredField: boolean = false;
	private requiredFieldSpecified: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set required(value: boolean)
	{
		this.requiredField = value;
	}
	get required(): boolean
	{
		return this.requiredField;
	}
	set requiredSpecified(value: boolean)
	{
		this.requiredFieldSpecified = value;
	}
	get requiredSpecified(): boolean
	{
		return this.requiredFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class ExternalSetInstance extends AbstractEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	private lastModifiedField: DateTime = null;
	private lastModifiedFieldSpecified: boolean = false;
	private isActiveField: boolean = false;
	private dataTypeField: DataType = 0;
	private dataTypeFieldSpecified: boolean = false;
	private providerField: ExternalSetDefinition = null;
	private viewGroupField: ViewGroup = null;
	private propsField: ExternalSetPropData[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set lastModified(value: DateTime)
	{
		this.lastModifiedField = value;
	}
	get lastModified(): DateTime
	{
		return this.lastModifiedField;
	}
	set lastModifiedSpecified(value: boolean)
	{
		this.lastModifiedFieldSpecified = value;
	}
	get lastModifiedSpecified(): boolean
	{
		return this.lastModifiedFieldSpecified;
	}
	set isActive(value: boolean)
	{
		this.isActiveField = value;
	}
	get isActive(): boolean
	{
		return this.isActiveField;
	}
	set dataType(value: DataType)
	{
		this.dataTypeField = value;
	}
	get dataType(): DataType
	{
		return this.dataTypeField;
	}
	set dataTypeSpecified(value: boolean)
	{
		this.dataTypeFieldSpecified = value;
	}
	get dataTypeSpecified(): boolean
	{
		return this.dataTypeFieldSpecified;
	}
	set provider(value: ExternalSetDefinition)
	{
		this.providerField = value;
	}
	get provider(): ExternalSetDefinition
	{
		return this.providerField;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set props(value: ExternalSetPropData[])
	{
		this.propsField = value;
	}
	get props(): ExternalSetPropData[]
	{
		return this.propsField;
	}
	constructor()
	{
		super();
	}
}
class ExternalSetDefinition extends AbstractEntity
{
	private identifierField: string = null;
	private nameField: string = null;
	private loadedField: boolean = false;
	private structureTypeField: ExternalSetStructureType = 0;
	private structureTypeFieldSpecified: boolean = false;
	private propertiesField: ExternalSetPropDesc[] = null;
	set identifier(value: string)
	{
		this.identifierField = value;
	}
	get identifier(): string
	{
		return this.identifierField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set loaded(value: boolean)
	{
		this.loadedField = value;
	}
	get loaded(): boolean
	{
		return this.loadedField;
	}
	set structureType(value: ExternalSetStructureType)
	{
		this.structureTypeField = value;
	}
	get structureType(): ExternalSetStructureType
	{
		return this.structureTypeField;
	}
	set structureTypeSpecified(value: boolean)
	{
		this.structureTypeFieldSpecified = value;
	}
	get structureTypeSpecified(): boolean
	{
		return this.structureTypeFieldSpecified;
	}
	set properties(value: ExternalSetPropDesc[])
	{
		this.propertiesField = value;
	}
	get properties(): ExternalSetPropDesc[]
	{
		return this.propertiesField;
	}
	constructor()
	{
		super();
	}
}
enum ExternalSetStructureType
{
	LIST,
	HIERARCHY
}
class ExternalSetPropDesc extends AbstractEntity
{
	private propertyDescriptorField: PropertyDescriptor = null;
	set propertyDescriptor(value: PropertyDescriptor)
	{
		this.propertyDescriptorField = value;
	}
	get propertyDescriptor(): PropertyDescriptor
	{
		return this.propertyDescriptorField;
	}
	constructor()
	{
		super();
	}
}
class PropertyDescriptor extends AbstractEntity
{
	private nameField: string = null;
	private dataTypeField: DataType = 0;
	private dataTypeFieldSpecified: boolean = false;
	private optionalField: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set dataType(value: DataType)
	{
		this.dataTypeField = value;
	}
	get dataType(): DataType
	{
		return this.dataTypeField;
	}
	set dataTypeSpecified(value: boolean)
	{
		this.dataTypeFieldSpecified = value;
	}
	get dataTypeSpecified(): boolean
	{
		return this.dataTypeFieldSpecified;
	}
	set optional(value: boolean)
	{
		this.optionalField = value;
	}
	get optional(): boolean
	{
		return this.optionalField;
	}
	constructor()
	{
		super();
	}
}
class ViewGroup extends ExtendableEntity
{
	private releasesField: Release[] = null;
	private facetField: ViewGroupFacet = null;
	private nameField: string = null;
	private viewGroupChildrenField: ViewGroup[] = null;
	private pathField: string = null;
	private usersField: User[] = null;
	private userRolesField: UserRole[] = null;
	private defaultBcdManagerField: User = null;
	private glossaryField: Glossary = null;
	private isHasDecisionViewsField: boolean = false;
	private hasDescendantsField: boolean = false;
	set releases(value: Release[])
	{
		this.releasesField = value;
	}
	get releases(): Release[]
	{
		return this.releasesField;
	}
	set facet(value: ViewGroupFacet)
	{
		this.facetField = value;
	}
	get facet(): ViewGroupFacet
	{
		return this.facetField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set viewGroupChildren(value: ViewGroup[])
	{
		this.viewGroupChildrenField = value;
	}
	get viewGroupChildren(): ViewGroup[]
	{
		return this.viewGroupChildrenField;
	}
	set path(value: string)
	{
		this.pathField = value;
	}
	get path(): string
	{
		return this.pathField;
	}
	set users(value: User[])
	{
		this.usersField = value;
	}
	get users(): User[]
	{
		return this.usersField;
	}
	set userRoles(value: UserRole[])
	{
		this.userRolesField = value;
	}
	get userRoles(): UserRole[]
	{
		return this.userRolesField;
	}
	set defaultBcdManager(value: User)
	{
		this.defaultBcdManagerField = value;
	}
	get defaultBcdManager(): User
	{
		return this.defaultBcdManagerField;
	}
	set glossary(value: Glossary)
	{
		this.glossaryField = value;
	}
	get glossary(): Glossary
	{
		return this.glossaryField;
	}
	set isHasDecisionViews(value: boolean)
	{
		this.isHasDecisionViewsField = value;
	}
	get isHasDecisionViews(): boolean
	{
		return this.isHasDecisionViewsField;
	}
	set hasDescendants(value: boolean)
	{
		this.hasDescendantsField = value;
	}
	get hasDescendants(): boolean
	{
		return this.hasDescendantsField;
	}
	constructor()
	{
		super();
	}
}
class Release extends ExtendableEntity
{
	private releaseTypeField: ReleaseType = 0;
	private releaseTypeFieldSpecified: boolean = false;
	private nameField: string = null;
	private descriptionField: string = null;
	private targetReleaseDateField: DateTime = null;
	private targetReleaseDateFieldSpecified: boolean = false;
	private ownersFlowApprovalStrategyField: OwnersFlowApprovalStrategy = null;
	private creationDateField: DateTime = null;
	private creationDateFieldSpecified: boolean = false;
	private creatorField: User = null;
	private releaseDecisionViewsField: ReleaseDecisionView[] = null;
	private releaseRuleFlowsField: ReleaseRuleFlow[] = null;
	private isFrozenField: boolean = false;
	private isRetiredField: boolean = false;
	private isModifiedSinceExportField: boolean = false;
	private branchedFromField: Release = null;
	private isEditableByUserField: boolean = false;
	private internalSignField: string = null;
	set releaseType(value: ReleaseType)
	{
		this.releaseTypeField = value;
	}
	get releaseType(): ReleaseType
	{
		return this.releaseTypeField;
	}
	set releaseTypeSpecified(value: boolean)
	{
		this.releaseTypeFieldSpecified = value;
	}
	get releaseTypeSpecified(): boolean
	{
		return this.releaseTypeFieldSpecified;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set targetReleaseDate(value: DateTime)
	{
		this.targetReleaseDateField = value;
	}
	get targetReleaseDate(): DateTime
	{
		return this.targetReleaseDateField;
	}
	set targetReleaseDateSpecified(value: boolean)
	{
		this.targetReleaseDateFieldSpecified = value;
	}
	get targetReleaseDateSpecified(): boolean
	{
		return this.targetReleaseDateFieldSpecified;
	}
	set ownersFlowApprovalStrategy(value: OwnersFlowApprovalStrategy)
	{
		this.ownersFlowApprovalStrategyField = value;
	}
	get ownersFlowApprovalStrategy(): OwnersFlowApprovalStrategy
	{
		return this.ownersFlowApprovalStrategyField;
	}
	set creationDate(value: DateTime)
	{
		this.creationDateField = value;
	}
	get creationDate(): DateTime
	{
		return this.creationDateField;
	}
	set creationDateSpecified(value: boolean)
	{
		this.creationDateFieldSpecified = value;
	}
	get creationDateSpecified(): boolean
	{
		return this.creationDateFieldSpecified;
	}
	set creator(value: User)
	{
		this.creatorField = value;
	}
	get creator(): User
	{
		return this.creatorField;
	}
	set releaseDecisionViews(value: ReleaseDecisionView[])
	{
		this.releaseDecisionViewsField = value;
	}
	get releaseDecisionViews(): ReleaseDecisionView[]
	{
		return this.releaseDecisionViewsField;
	}
	set releaseRuleFlows(value: ReleaseRuleFlow[])
	{
		this.releaseRuleFlowsField = value;
	}
	get releaseRuleFlows(): ReleaseRuleFlow[]
	{
		return this.releaseRuleFlowsField;
	}
	set isFrozen(value: boolean)
	{
		this.isFrozenField = value;
	}
	get isFrozen(): boolean
	{
		return this.isFrozenField;
	}
	set isRetired(value: boolean)
	{
		this.isRetiredField = value;
	}
	get isRetired(): boolean
	{
		return this.isRetiredField;
	}
	set isModifiedSinceExport(value: boolean)
	{
		this.isModifiedSinceExportField = value;
	}
	get isModifiedSinceExport(): boolean
	{
		return this.isModifiedSinceExportField;
	}
	set branchedFrom(value: Release)
	{
		this.branchedFromField = value;
	}
	get branchedFrom(): Release
	{
		return this.branchedFromField;
	}
	set isEditableByUser(value: boolean)
	{
		this.isEditableByUserField = value;
	}
	get isEditableByUser(): boolean
	{
		return this.isEditableByUserField;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	constructor()
	{
		super();
	}
}
enum ReleaseType
{
	RELEASE,
	TAG,
	SNAPSHOT_TAG
}
class OwnersFlowApprovalStrategy extends AbstractEntity
{
	private ownersField: Owner[] = null;
	private approvalStrategyTypeField: ApprovalStrategyType = 0;
	private approvalStrategyTypeFieldSpecified: boolean = false;
	private distinctUserField: boolean = false;
	set owners(value: Owner[])
	{
		this.ownersField = value;
	}
	get owners(): Owner[]
	{
		return this.ownersField;
	}
	set approvalStrategyType(value: ApprovalStrategyType)
	{
		this.approvalStrategyTypeField = value;
	}
	get approvalStrategyType(): ApprovalStrategyType
	{
		return this.approvalStrategyTypeField;
	}
	set approvalStrategyTypeSpecified(value: boolean)
	{
		this.approvalStrategyTypeFieldSpecified = value;
	}
	get approvalStrategyTypeSpecified(): boolean
	{
		return this.approvalStrategyTypeFieldSpecified;
	}
	set distinctUser(value: boolean)
	{
		this.distinctUserField = value;
	}
	get distinctUser(): boolean
	{
		return this.distinctUserField;
	}
	constructor()
	{
		super();
	}
}
class Owner extends AbstractEntity
{
	private userField: User = null;
	private responsibilityField: string = null;
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set responsibility(value: string)
	{
		this.responsibilityField = value;
	}
	get responsibility(): string
	{
		return this.responsibilityField;
	}
	constructor()
	{
		super();
	}
}
class User extends AbstractEntity
{
	private nameField: string = null;
	private displayNameField: string = null;
	private isActiveField: boolean = false;
	private mailAddressField: string = null;
	private userRolesField: UserRole[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set displayName(value: string)
	{
		this.displayNameField = value;
	}
	get displayName(): string
	{
		return this.displayNameField;
	}
	set isActive(value: boolean)
	{
		this.isActiveField = value;
	}
	get isActive(): boolean
	{
		return this.isActiveField;
	}
	set mailAddress(value: string)
	{
		this.mailAddressField = value;
	}
	get mailAddress(): string
	{
		return this.mailAddressField;
	}
	set userRoles(value: UserRole[])
	{
		this.userRolesField = value;
	}
	get userRoles(): UserRole[]
	{
		return this.userRolesField;
	}
	constructor()
	{
		super();
	}
}
class UserRole extends AbstractEntity
{
	private roleField: Role = null;
	private startDateField: DateTime = null;
	private startDateFieldSpecified: boolean = false;
	private endDateField: DateTime = null;
	private endDateFieldSpecified: boolean = false;
	set role(value: Role)
	{
		this.roleField = value;
	}
	get role(): Role
	{
		return this.roleField;
	}
	set startDate(value: DateTime)
	{
		this.startDateField = value;
	}
	get startDate(): DateTime
	{
		return this.startDateField;
	}
	set startDateSpecified(value: boolean)
	{
		this.startDateFieldSpecified = value;
	}
	get startDateSpecified(): boolean
	{
		return this.startDateFieldSpecified;
	}
	set endDate(value: DateTime)
	{
		this.endDateField = value;
	}
	get endDate(): DateTime
	{
		return this.endDateField;
	}
	set endDateSpecified(value: boolean)
	{
		this.endDateFieldSpecified = value;
	}
	get endDateSpecified(): boolean
	{
		return this.endDateFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class Role extends AbstractEntity
{
	private nameField: string = null;
	private permissionGroupsField: PermissionGroup[] = null;
	private userRolesField: UserRole[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set permissionGroups(value: PermissionGroup[])
	{
		this.permissionGroupsField = value;
	}
	get permissionGroups(): PermissionGroup[]
	{
		return this.permissionGroupsField;
	}
	set userRoles(value: UserRole[])
	{
		this.userRolesField = value;
	}
	get userRoles(): UserRole[]
	{
		return this.userRolesField;
	}
	constructor()
	{
		super();
	}
}
class PermissionGroup extends AbstractEntity
{
	private nameField: string = null;
	private permissionsField: Permission[] = null;
	private rolesField: Role[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set permissions(value: Permission[])
	{
		this.permissionsField = value;
	}
	get permissions(): Permission[]
	{
		return this.permissionsField;
	}
	set roles(value: Role[])
	{
		this.rolesField = value;
	}
	get roles(): Role[]
	{
		return this.rolesField;
	}
	constructor()
	{
		super();
	}
}
class Permission extends AbstractEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	constructor()
	{
		super();
	}
}
enum ApprovalStrategyType
{
	NONE,
	ALL,
	ANY
}
class ReleaseDecisionView extends AbstractEntity
{
	private decisionViewField: DecisionView = null;
	private effectiveDateField: DateTime = null;
	private effectiveDateFieldSpecified: boolean = false;
	private expirationDateField: DateTime = null;
	private expirationDateFieldSpecified: boolean = false;
	set decisionView(value: DecisionView)
	{
		this.decisionViewField = value;
	}
	get decisionView(): DecisionView
	{
		return this.decisionViewField;
	}
	set effectiveDate(value: DateTime)
	{
		this.effectiveDateField = value;
	}
	get effectiveDate(): DateTime
	{
		return this.effectiveDateField;
	}
	set effectiveDateSpecified(value: boolean)
	{
		this.effectiveDateFieldSpecified = value;
	}
	get effectiveDateSpecified(): boolean
	{
		return this.effectiveDateFieldSpecified;
	}
	set expirationDate(value: DateTime)
	{
		this.expirationDateField = value;
	}
	get expirationDate(): DateTime
	{
		return this.expirationDateField;
	}
	set expirationDateSpecified(value: boolean)
	{
		this.expirationDateFieldSpecified = value;
	}
	get expirationDateSpecified(): boolean
	{
		return this.expirationDateFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class Asset extends ExtendableEntity
{
	private approvedByField: User = null;
	private approvedDateField: DateTime = null;
	private approvedDateFieldSpecified: boolean = false;
	private createdByField: User = null;
	private createdDateField: DateTime = null;
	private createdDateFieldSpecified: boolean = false;
	private editNumberField: number = 0;
	private externalSignField: string = null;
	private internalSignField: string = null;
	private isLatestVersionField: boolean = false;
	private logicalSignField: string = null;
	private nameField: string = null;
	private stateField: AssetState = 0;
	private stateFieldSpecified: boolean = false;
	private timeStampField: number = 0;
	private timeStampFieldSpecified: boolean = false;
	private versionField: Version = null;
	set approvedBy(value: User)
	{
		this.approvedByField = value;
	}
	get approvedBy(): User
	{
		return this.approvedByField;
	}
	set approvedDate(value: DateTime)
	{
		this.approvedDateField = value;
	}
	get approvedDate(): DateTime
	{
		return this.approvedDateField;
	}
	set approvedDateSpecified(value: boolean)
	{
		this.approvedDateFieldSpecified = value;
	}
	get approvedDateSpecified(): boolean
	{
		return this.approvedDateFieldSpecified;
	}
	set createdBy(value: User)
	{
		this.createdByField = value;
	}
	get createdBy(): User
	{
		return this.createdByField;
	}
	set createdDate(value: DateTime)
	{
		this.createdDateField = value;
	}
	get createdDate(): DateTime
	{
		return this.createdDateField;
	}
	set createdDateSpecified(value: boolean)
	{
		this.createdDateFieldSpecified = value;
	}
	get createdDateSpecified(): boolean
	{
		return this.createdDateFieldSpecified;
	}
	set editNumber(value: number)
	{
		this.editNumberField = value;
	}
	get editNumber(): number
	{
		return this.editNumberField;
	}
	set externalSign(value: string)
	{
		this.externalSignField = value;
	}
	get externalSign(): string
	{
		return this.externalSignField;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	set isLatestVersion(value: boolean)
	{
		this.isLatestVersionField = value;
	}
	get isLatestVersion(): boolean
	{
		return this.isLatestVersionField;
	}
	set logicalSign(value: string)
	{
		this.logicalSignField = value;
	}
	get logicalSign(): string
	{
		return this.logicalSignField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set state(value: AssetState)
	{
		this.stateField = value;
	}
	get state(): AssetState
	{
		return this.stateField;
	}
	set stateSpecified(value: boolean)
	{
		this.stateFieldSpecified = value;
	}
	get stateSpecified(): boolean
	{
		return this.stateFieldSpecified;
	}
	set timeStamp(value: number)
	{
		this.timeStampField = value;
	}
	get timeStamp(): number
	{
		return this.timeStampField;
	}
	set timeStampSpecified(value: boolean)
	{
		this.timeStampFieldSpecified = value;
	}
	get timeStampSpecified(): boolean
	{
		return this.timeStampFieldSpecified;
	}
	set version(value: Version)
	{
		this.versionField = value;
	}
	get version(): Version
	{
		return this.versionField;
	}
	constructor()
	{
		super();
	}
}
class DecisionView extends Asset
{
	private decisionViewViewGroupsField: DecisionViewViewGroup[] = null;
	private viewField: View = null;
	private decisionField: Decision = null;
	private notesField: Note[] = null;
	private validationSignField: string = null;
	private repeatingGroupHeadField: RepeatingGroup = null;
	set decisionViewViewGroups(value: DecisionViewViewGroup[])
	{
		this.decisionViewViewGroupsField = value;
	}
	get decisionViewViewGroups(): DecisionViewViewGroup[]
	{
		return this.decisionViewViewGroupsField;
	}
	set view(value: View)
	{
		this.viewField = value;
	}
	get view(): View
	{
		return this.viewField;
	}
	set decision(value: Decision)
	{
		this.decisionField = value;
	}
	get decision(): Decision
	{
		return this.decisionField;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	set validationSign(value: string)
	{
		this.validationSignField = value;
	}
	get validationSign(): string
	{
		return this.validationSignField;
	}
	set repeatingGroupHead(value: RepeatingGroup)
	{
		this.repeatingGroupHeadField = value;
	}
	get repeatingGroupHead(): RepeatingGroup
	{
		return this.repeatingGroupHeadField;
	}
	constructor()
	{
		super();
	}
}
class DecisionViewViewGroup extends AbstractEntity
{
	private viewGroupField: ViewGroup = null;
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	constructor()
	{
		super();
	}
}
class View extends ExtendableEntity
{
	private nameField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
class Decision extends AbstractEntity
{
	private factTypeDefinitionField: FactTypeDefinition = null;
	private verbField: Verb = null;
	set factTypeDefinition(value: FactTypeDefinition)
	{
		this.factTypeDefinitionField = value;
	}
	get factTypeDefinition(): FactTypeDefinition
	{
		return this.factTypeDefinitionField;
	}
	set verb(value: Verb)
	{
		this.verbField = value;
	}
	get verb(): Verb
	{
		return this.verbField;
	}
	constructor()
	{
		super();
	}
}
class Verb extends AbstractEntity
{
	private nameField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
class Note extends AbstractEntity
{
	private createdByField: User = null;
	private createdDateField: DateTime = null;
	private createdDateFieldSpecified: boolean = false;
	private textField: string = null;
	private containerVersionLabelField: string = null;
	private subjectField: string = null;
	private isLinkOnlyField: boolean = false;
	set createdBy(value: User)
	{
		this.createdByField = value;
	}
	get createdBy(): User
	{
		return this.createdByField;
	}
	set createdDate(value: DateTime)
	{
		this.createdDateField = value;
	}
	get createdDate(): DateTime
	{
		return this.createdDateField;
	}
	set createdDateSpecified(value: boolean)
	{
		this.createdDateFieldSpecified = value;
	}
	get createdDateSpecified(): boolean
	{
		return this.createdDateFieldSpecified;
	}
	set text(value: string)
	{
		this.textField = value;
	}
	get text(): string
	{
		return this.textField;
	}
	set containerVersionLabel(value: string)
	{
		this.containerVersionLabelField = value;
	}
	get containerVersionLabel(): string
	{
		return this.containerVersionLabelField;
	}
	set subject(value: string)
	{
		this.subjectField = value;
	}
	get subject(): string
	{
		return this.subjectField;
	}
	set isLinkOnly(value: boolean)
	{
		this.isLinkOnlyField = value;
	}
	get isLinkOnly(): boolean
	{
		return this.isLinkOnlyField;
	}
	constructor()
	{
		super();
	}
}
class RepeatingGroup extends AbstractEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	private repeatingGroupFactTypeDefinitionsField: RepeatingGroupFactTypeDefinition[] = null;
	private repeatingGroupChildrenField: RepeatingGroup[] = null;
	private internalSignField: string = null;
	private logicalSignField: string = null;
	private externalSignField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set repeatingGroupFactTypeDefinitions(value: RepeatingGroupFactTypeDefinition[])
	{
		this.repeatingGroupFactTypeDefinitionsField = value;
	}
	get repeatingGroupFactTypeDefinitions(): RepeatingGroupFactTypeDefinition[]
	{
		return this.repeatingGroupFactTypeDefinitionsField;
	}
	set repeatingGroupChildren(value: RepeatingGroup[])
	{
		this.repeatingGroupChildrenField = value;
	}
	get repeatingGroupChildren(): RepeatingGroup[]
	{
		return this.repeatingGroupChildrenField;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	set logicalSign(value: string)
	{
		this.logicalSignField = value;
	}
	get logicalSign(): string
	{
		return this.logicalSignField;
	}
	set externalSign(value: string)
	{
		this.externalSignField = value;
	}
	get externalSign(): string
	{
		return this.externalSignField;
	}
	constructor()
	{
		super();
	}
}
class RepeatingGroupFactTypeDefinition extends AbstractEntity
{
	private factTypeDefinitionField: FactTypeDefinition = null;
	set factTypeDefinition(value: FactTypeDefinition)
	{
		this.factTypeDefinitionField = value;
	}
	get factTypeDefinition(): FactTypeDefinition
	{
		return this.factTypeDefinitionField;
	}
	constructor()
	{
		super();
	}
}
class Version extends NObject
{
	private labelField: string = null;
	private numberField: number = 0;
	set label(value: string)
	{
		this.labelField = value;
	}
	get label(): string
	{
		return this.labelField;
	}
	set number(value: number)
	{
		this.numberField = value;
	}
	get number(): number
	{
		return this.numberField;
	}
	constructor()
	{
		super();
	}
}
class RuleFamilyView extends Asset
{
	private conditionsField: Condition[] = null;
	private conclusionFactTypeDefinitionField: FactTypeDefinition = null;
	private viewField: View = null;
	private rowsField: RuleRow[] = null;
	private decisionViewRuleFamilyViewsField: DecisionViewRuleFamilyView[] = null;
	private notesField: Note[] = null;
	private conclusionNotesField: ConclusionNotes = null;
	set conditions(value: Condition[])
	{
		this.conditionsField = value;
	}
	get conditions(): Condition[]
	{
		return this.conditionsField;
	}
	set conclusionFactTypeDefinition(value: FactTypeDefinition)
	{
		this.conclusionFactTypeDefinitionField = value;
	}
	get conclusionFactTypeDefinition(): FactTypeDefinition
	{
		return this.conclusionFactTypeDefinitionField;
	}
	set view(value: View)
	{
		this.viewField = value;
	}
	get view(): View
	{
		return this.viewField;
	}
	set rows(value: RuleRow[])
	{
		this.rowsField = value;
	}
	get rows(): RuleRow[]
	{
		return this.rowsField;
	}
	set decisionViewRuleFamilyViews(value: DecisionViewRuleFamilyView[])
	{
		this.decisionViewRuleFamilyViewsField = value;
	}
	get decisionViewRuleFamilyViews(): DecisionViewRuleFamilyView[]
	{
		return this.decisionViewRuleFamilyViewsField;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	set conclusionNotes(value: ConclusionNotes)
	{
		this.conclusionNotesField = value;
	}
	get conclusionNotes(): ConclusionNotes
	{
		return this.conclusionNotesField;
	}
	constructor()
	{
		super();
	}
}
class DecisionViewRuleFamilyView extends AbstractEntity
{
	private decisionViewField: DecisionView = null;
	private validationSignField: string = null;
	private repeatingGroupField: RepeatingGroup = null;
	set decisionView(value: DecisionView)
	{
		this.decisionViewField = value;
	}
	get decisionView(): DecisionView
	{
		return this.decisionViewField;
	}
	set validationSign(value: string)
	{
		this.validationSignField = value;
	}
	get validationSign(): string
	{
		return this.validationSignField;
	}
	set repeatingGroup(value: RepeatingGroup)
	{
		this.repeatingGroupField = value;
	}
	get repeatingGroup(): RepeatingGroup
	{
		return this.repeatingGroupField;
	}
	constructor()
	{
		super();
	}
}
class ConclusionNotes extends AbstractEntity
{
	private notesField: Note[] = null;
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	constructor()
	{
		super();
	}
}
class GlossaryArtifact extends Asset
{
	private aliasBusinessFriendlyNameField: string = null;
	private factTypeDefinitionField: FactTypeDefinition = null;
	private glossaryField: Glossary = null;
	private glossaryArtifactTypeField: GlossaryArtifactType = 0;
	private glossaryArtifactTypeFieldSpecified: boolean = false;
	private autoTextItemField: GlossaryArtifactAutoTextItem[] = null;
	set aliasBusinessFriendlyName(value: string)
	{
		this.aliasBusinessFriendlyNameField = value;
	}
	get aliasBusinessFriendlyName(): string
	{
		return this.aliasBusinessFriendlyNameField;
	}
	set factTypeDefinition(value: FactTypeDefinition)
	{
		this.factTypeDefinitionField = value;
	}
	get factTypeDefinition(): FactTypeDefinition
	{
		return this.factTypeDefinitionField;
	}
	set glossary(value: Glossary)
	{
		this.glossaryField = value;
	}
	get glossary(): Glossary
	{
		return this.glossaryField;
	}
	set glossaryArtifactType(value: GlossaryArtifactType)
	{
		this.glossaryArtifactTypeField = value;
	}
	get glossaryArtifactType(): GlossaryArtifactType
	{
		return this.glossaryArtifactTypeField;
	}
	set glossaryArtifactTypeSpecified(value: boolean)
	{
		this.glossaryArtifactTypeFieldSpecified = value;
	}
	get glossaryArtifactTypeSpecified(): boolean
	{
		return this.glossaryArtifactTypeFieldSpecified;
	}
	set autoTextItem(value: GlossaryArtifactAutoTextItem[])
	{
		this.autoTextItemField = value;
	}
	get autoTextItem(): GlossaryArtifactAutoTextItem[]
	{
		return this.autoTextItemField;
	}
	constructor()
	{
		super();
	}
}
enum GlossaryArtifactType
{
	FACT_TYPE,
	LINK,
	ALIAS
}
class GlossaryArtifactAutoTextItem extends AbstractEntity
{
	private autoTextField: string = null;
	set autoText(value: string)
	{
		this.autoTextField = value;
	}
	get autoText(): string
	{
		return this.autoTextField;
	}
	constructor()
	{
		super();
	}
}
class FactDomain extends Asset
{
	private dataTypeField: DataType = 0;
	private dataTypeFieldSpecified: boolean = false;
	private decimalPointField: number = 0;
	private domainField: Domain = null;
	private domainTypeField: DomainType = 0;
	private domainTypeFieldSpecified: boolean = false;
	private factDomainDefinitionField: AssetDefinition = null;
	private maxLengthField: number = 0;
	private maxLengthFieldSpecified: boolean = false;
	private regExpField: string = null;
	set dataType(value: DataType)
	{
		this.dataTypeField = value;
	}
	get dataType(): DataType
	{
		return this.dataTypeField;
	}
	set dataTypeSpecified(value: boolean)
	{
		this.dataTypeFieldSpecified = value;
	}
	get dataTypeSpecified(): boolean
	{
		return this.dataTypeFieldSpecified;
	}
	set decimalPoint(value: number)
	{
		this.decimalPointField = value;
	}
	get decimalPoint(): number
	{
		return this.decimalPointField;
	}
	set domain(value: Domain)
	{
		this.domainField = value;
	}
	get domain(): Domain
	{
		return this.domainField;
	}
	set domainType(value: DomainType)
	{
		this.domainTypeField = value;
	}
	get domainType(): DomainType
	{
		return this.domainTypeField;
	}
	set domainTypeSpecified(value: boolean)
	{
		this.domainTypeFieldSpecified = value;
	}
	get domainTypeSpecified(): boolean
	{
		return this.domainTypeFieldSpecified;
	}
	set factDomainDefinition(value: AssetDefinition)
	{
		this.factDomainDefinitionField = value;
	}
	get factDomainDefinition(): AssetDefinition
	{
		return this.factDomainDefinitionField;
	}
	set maxLength(value: number)
	{
		this.maxLengthField = value;
	}
	get maxLength(): number
	{
		return this.maxLengthField;
	}
	set maxLengthSpecified(value: boolean)
	{
		this.maxLengthFieldSpecified = value;
	}
	get maxLengthSpecified(): boolean
	{
		return this.maxLengthFieldSpecified;
	}
	set regExp(value: string)
	{
		this.regExpField = value;
	}
	get regExp(): string
	{
		return this.regExpField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowDefinition extends AssetDefinition
{
	private businessNameField: string = null;
	set businessName(value: string)
	{
		this.businessNameField = value;
	}
	get businessName(): string
	{
		return this.businessNameField;
	}
	constructor()
	{
		super();
	}
}
class FactType extends Asset
{
	private businessFriendlyNameField: string = null;
	private displayFormatField: Format = null;
	private factAllowedValuesField: Domain = null;
	private factDomainField: FactDomain = null;
	private factTypeDefinitionField: FactTypeDefinition = null;
	private flagsField: Nullable<FactTypeFlag>[] = null;
	private formulaField: Formula = null;
	private isDeployableField: boolean = false;
	private isDeployableFieldSpecified: boolean = false;
	private isFormulaField: boolean = false;
	private isListField: boolean = false;
	private isListFieldSpecified: boolean = false;
	private notesField: Note[] = null;
	private testValuesField: string[] = null;
	private validationSignField: string = null;
	set businessFriendlyName(value: string)
	{
		this.businessFriendlyNameField = value;
	}
	get businessFriendlyName(): string
	{
		return this.businessFriendlyNameField;
	}
	set displayFormat(value: Format)
	{
		this.displayFormatField = value;
	}
	get displayFormat(): Format
	{
		return this.displayFormatField;
	}
	set factAllowedValues(value: Domain)
	{
		this.factAllowedValuesField = value;
	}
	get factAllowedValues(): Domain
	{
		return this.factAllowedValuesField;
	}
	set factDomain(value: FactDomain)
	{
		this.factDomainField = value;
	}
	get factDomain(): FactDomain
	{
		return this.factDomainField;
	}
	set factTypeDefinition(value: FactTypeDefinition)
	{
		this.factTypeDefinitionField = value;
	}
	get factTypeDefinition(): FactTypeDefinition
	{
		return this.factTypeDefinitionField;
	}
	set flags(value: Nullable<FactTypeFlag>[])
	{
		this.flagsField = value;
	}
	get flags(): Nullable<FactTypeFlag>[]
	{
		return this.flagsField;
	}
	set formula(value: Formula)
	{
		this.formulaField = value;
	}
	get formula(): Formula
	{
		return this.formulaField;
	}
	set isDeployable(value: boolean)
	{
		this.isDeployableField = value;
	}
	get isDeployable(): boolean
	{
		return this.isDeployableField;
	}
	set isDeployableSpecified(value: boolean)
	{
		this.isDeployableFieldSpecified = value;
	}
	get isDeployableSpecified(): boolean
	{
		return this.isDeployableFieldSpecified;
	}
	set isFormula(value: boolean)
	{
		this.isFormulaField = value;
	}
	get isFormula(): boolean
	{
		return this.isFormulaField;
	}
	set isList(value: boolean)
	{
		this.isListField = value;
	}
	get isList(): boolean
	{
		return this.isListField;
	}
	set isListSpecified(value: boolean)
	{
		this.isListFieldSpecified = value;
	}
	get isListSpecified(): boolean
	{
		return this.isListFieldSpecified;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	set testValues(value: string[])
	{
		this.testValuesField = value;
	}
	get testValues(): string[]
	{
		return this.testValuesField;
	}
	set validationSign(value: string)
	{
		this.validationSignField = value;
	}
	get validationSign(): string
	{
		return this.validationSignField;
	}
	constructor()
	{
		super();
	}
}
class Format extends AbstractEntity
{
	private nameField: string = null;
	private exampleField: string = null;
	private formatField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set example(value: string)
	{
		this.exampleField = value;
	}
	get example(): string
	{
		return this.exampleField;
	}
	set format(value: string)
	{
		this.formatField = value;
	}
	get format(): string
	{
		return this.formatField;
	}
	constructor()
	{
		super();
	}
}
enum FactTypeFlag
{
	NonDeployable,
	Formula
}
class Formula extends AbstractEntity
{
	private nameField: string = null;
	private formulaField: string = null;
	private functionsField: Function[] = null;
	private factTypeDefinitionsField: FactTypeDefinition[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set formula(value: string)
	{
		this.formulaField = value;
	}
	get formula(): string
	{
		return this.formulaField;
	}
	set functions(value: Function[])
	{
		this.functionsField = value;
	}
	get functions(): Function[]
	{
		return this.functionsField;
	}
	set factTypeDefinitions(value: FactTypeDefinition[])
	{
		this.factTypeDefinitionsField = value;
	}
	get factTypeDefinitions(): FactTypeDefinition[]
	{
		return this.factTypeDefinitionsField;
	}
	constructor()
	{
		super();
	}
}
class Function extends AbstractEntity
{
	private nameField: string = null;
	private argumentsField: FunctionArguemnt[] = null;
	private returnTypeField: PrimitiveDataType = 0;
	private returnTypeFieldSpecified: boolean = false;
	private isEnabledField: boolean = false;
	private isEnabledFieldSpecified: boolean = false;
	private descriptionField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set arguments(value: FunctionArguemnt[])
	{
		this.argumentsField = value;
	}
	get arguments(): FunctionArguemnt[]
	{
		return this.argumentsField;
	}
	set returnType(value: PrimitiveDataType)
	{
		this.returnTypeField = value;
	}
	get returnType(): PrimitiveDataType
	{
		return this.returnTypeField;
	}
	set returnTypeSpecified(value: boolean)
	{
		this.returnTypeFieldSpecified = value;
	}
	get returnTypeSpecified(): boolean
	{
		return this.returnTypeFieldSpecified;
	}
	set isEnabled(value: boolean)
	{
		this.isEnabledField = value;
	}
	get isEnabled(): boolean
	{
		return this.isEnabledField;
	}
	set isEnabledSpecified(value: boolean)
	{
		this.isEnabledFieldSpecified = value;
	}
	get isEnabledSpecified(): boolean
	{
		return this.isEnabledFieldSpecified;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	constructor()
	{
		super();
	}
}
class FunctionArguemnt extends AbstractEntity
{
	private nameField: string = null;
	private typeField: PrimitiveDataType = 0;
	private typeFieldSpecified: boolean = false;
	private isListField: boolean = false;
	private isInfiniteField: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set type(value: PrimitiveDataType)
	{
		this.typeField = value;
	}
	get type(): PrimitiveDataType
	{
		return this.typeField;
	}
	set typeSpecified(value: boolean)
	{
		this.typeFieldSpecified = value;
	}
	get typeSpecified(): boolean
	{
		return this.typeFieldSpecified;
	}
	set isList(value: boolean)
	{
		this.isListField = value;
	}
	get isList(): boolean
	{
		return this.isListField;
	}
	set isInfinite(value: boolean)
	{
		this.isInfiniteField = value;
	}
	get isInfinite(): boolean
	{
		return this.isInfiniteField;
	}
	constructor()
	{
		super();
	}
}
enum PrimitiveDataType
{
	DATE,
	DATE_TIME,
	NUMERIC,
	TEXT,
	LIST,
	CONCLUSION,
	CONCLUSION_LIST,
	BASIS_POINTS,
	MONTH_YEAR,
	NON_SENSITIVE_TEXT,
	ENUMERATOR,
	INTEGER
}
class RuleFlow extends Asset
{
	private ruleFlowContentField: RuleFlowContent = null;
	private ruleFlowDisplayContentField: RuleFlowDisplayContent = null;
	private ruleFlowDefinitionField: RuleFlowDefinition = null;
	private ruleFlowDecisionViewsField: RuleFlowDecisionView[] = null;
	private ruleFlowFactTypesField: RuleFlowFactType[] = null;
	private ruleFlowViewGroupsField: RuleFlowViewGroup[] = null;
	private ruleFlowTasksDynamicPropertiesField: RuleFlowTasksDynamicProperty[] = null;
	private notesField: Note[] = null;
	private validationSignField: string = null;
	private unapprovedBusinessNameField: string = null;
	set ruleFlowContent(value: RuleFlowContent)
	{
		this.ruleFlowContentField = value;
	}
	get ruleFlowContent(): RuleFlowContent
	{
		return this.ruleFlowContentField;
	}
	set ruleFlowDisplayContent(value: RuleFlowDisplayContent)
	{
		this.ruleFlowDisplayContentField = value;
	}
	get ruleFlowDisplayContent(): RuleFlowDisplayContent
	{
		return this.ruleFlowDisplayContentField;
	}
	set ruleFlowDefinition(value: RuleFlowDefinition)
	{
		this.ruleFlowDefinitionField = value;
	}
	get ruleFlowDefinition(): RuleFlowDefinition
	{
		return this.ruleFlowDefinitionField;
	}
	set ruleFlowDecisionViews(value: RuleFlowDecisionView[])
	{
		this.ruleFlowDecisionViewsField = value;
	}
	get ruleFlowDecisionViews(): RuleFlowDecisionView[]
	{
		return this.ruleFlowDecisionViewsField;
	}
	set ruleFlowFactTypes(value: RuleFlowFactType[])
	{
		this.ruleFlowFactTypesField = value;
	}
	get ruleFlowFactTypes(): RuleFlowFactType[]
	{
		return this.ruleFlowFactTypesField;
	}
	set ruleFlowViewGroups(value: RuleFlowViewGroup[])
	{
		this.ruleFlowViewGroupsField = value;
	}
	get ruleFlowViewGroups(): RuleFlowViewGroup[]
	{
		return this.ruleFlowViewGroupsField;
	}
	set ruleFlowTasksDynamicProperties(value: RuleFlowTasksDynamicProperty[])
	{
		this.ruleFlowTasksDynamicPropertiesField = value;
	}
	get ruleFlowTasksDynamicProperties(): RuleFlowTasksDynamicProperty[]
	{
		return this.ruleFlowTasksDynamicPropertiesField;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	set validationSign(value: string)
	{
		this.validationSignField = value;
	}
	get validationSign(): string
	{
		return this.validationSignField;
	}
	set unapprovedBusinessName(value: string)
	{
		this.unapprovedBusinessNameField = value;
	}
	get unapprovedBusinessName(): string
	{
		return this.unapprovedBusinessNameField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowContent extends AbstractEntity
{
	private contentField: string = null;
	private internalSignField: string = null;
	private logicalSignField: string = null;
	private externalSignField: string = null;
	set content(value: string)
	{
		this.contentField = value;
	}
	get content(): string
	{
		return this.contentField;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	set logicalSign(value: string)
	{
		this.logicalSignField = value;
	}
	get logicalSign(): string
	{
		return this.logicalSignField;
	}
	set externalSign(value: string)
	{
		this.externalSignField = value;
	}
	get externalSign(): string
	{
		return this.externalSignField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowDisplayContent extends AbstractEntity
{
	private displayContentField: string = null;
	set displayContent(value: string)
	{
		this.displayContentField = value;
	}
	get displayContent(): string
	{
		return this.displayContentField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowDecisionView extends AbstractEntity
{
	private decisionViewField: DecisionView = null;
	set decisionView(value: DecisionView)
	{
		this.decisionViewField = value;
	}
	get decisionView(): DecisionView
	{
		return this.decisionViewField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowFactType extends AbstractEntity
{
	private factTypeField: FactType = null;
	set factType(value: FactType)
	{
		this.factTypeField = value;
	}
	get factType(): FactType
	{
		return this.factTypeField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowViewGroup extends AbstractEntity
{
	private viewGroupField: ViewGroup = null;
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowTasksDynamicProperty extends AbstractEntity
{
	private templateField: DynamicPropertyTemplate = null;
	set template(value: DynamicPropertyTemplate)
	{
		this.templateField = value;
	}
	get template(): DynamicPropertyTemplate
	{
		return this.templateField;
	}
	constructor()
	{
		super();
	}
}
class ReleaseRuleFlow extends AbstractEntity
{
	private ruleFlowField: RuleFlow = null;
	set ruleFlow(value: RuleFlow)
	{
		this.ruleFlowField = value;
	}
	get ruleFlow(): RuleFlow
	{
		return this.ruleFlowField;
	}
	constructor()
	{
		super();
	}
}
class ViewGroupFacet extends AbstractEntity
{
	private displayNameField: string = null;
	private typeField: string = null;
	private allowedFieldsField: FacetAllowedField[] = null;
	private allowedChildrenTypesField: string[] = null;
	private allowedSiblingTypesField: string[] = null;
	set displayName(value: string)
	{
		this.displayNameField = value;
	}
	get displayName(): string
	{
		return this.displayNameField;
	}
	set type(value: string)
	{
		this.typeField = value;
	}
	get type(): string
	{
		return this.typeField;
	}
	set allowedFields(value: FacetAllowedField[])
	{
		this.allowedFieldsField = value;
	}
	get allowedFields(): FacetAllowedField[]
	{
		return this.allowedFieldsField;
	}
	set allowedChildrenTypes(value: string[])
	{
		this.allowedChildrenTypesField = value;
	}
	get allowedChildrenTypes(): string[]
	{
		return this.allowedChildrenTypesField;
	}
	set allowedSiblingTypes(value: string[])
	{
		this.allowedSiblingTypesField = value;
	}
	get allowedSiblingTypes(): string[]
	{
		return this.allowedSiblingTypesField;
	}
	constructor()
	{
		super();
	}
}
class FacetAllowedField extends AbstractEntity
{
	private displayedNameField: string = null;
	private entityTypeNameField: string = null;
	set displayedName(value: string)
	{
		this.displayedNameField = value;
	}
	get displayedName(): string
	{
		return this.displayedNameField;
	}
	set entityTypeName(value: string)
	{
		this.entityTypeNameField = value;
	}
	get entityTypeName(): string
	{
		return this.entityTypeNameField;
	}
	constructor()
	{
		super();
	}
}
class ExternalSetPropData extends AbstractEntity
{
	private propertyDataField: PropertyData = null;
	set propertyData(value: PropertyData)
	{
		this.propertyDataField = value;
	}
	get propertyData(): PropertyData
	{
		return this.propertyDataField;
	}
	constructor()
	{
		super();
	}
}
class PropertyData extends AbstractEntity
{
	private descriptorField: PropertyDescriptor = null;
	private valueField: string = null;
	set descriptor(value: PropertyDescriptor)
	{
		this.descriptorField = value;
	}
	get descriptor(): PropertyDescriptor
	{
		return this.descriptorField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class Environment extends ExtendableEntity
{
	private viewGroupField: ViewGroup = null;
	private modelDefinitionField: ModelDefinition = null;
	private modelVersionField: ModelVersion = null;
	private formatDefinitionField: ExportFormatDefinition = null;
	private repositoryDefinitionField: ExportRepositoryDefinition = null;
	private authorizedUserRolesForExportField: UserRole[] = null;
	private nameField: string = null;
	private descriptionField: string = null;
	private ownersFlowApprovalStrategyField: OwnersFlowApprovalStrategy = null;
	private entityStatusField: EntityStatus = 0;
	private entityStatusFieldSpecified: boolean = false;
	private internalSignField: string = null;
	private isTestEnvironmentField: boolean = false;
	private isAllowSnapshotsField: boolean = false;
	private snapshotSuffixField: string = null;
	private environmentTypeField: EnvironmentType = null;
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set modelDefinition(value: ModelDefinition)
	{
		this.modelDefinitionField = value;
	}
	get modelDefinition(): ModelDefinition
	{
		return this.modelDefinitionField;
	}
	set modelVersion(value: ModelVersion)
	{
		this.modelVersionField = value;
	}
	get modelVersion(): ModelVersion
	{
		return this.modelVersionField;
	}
	set formatDefinition(value: ExportFormatDefinition)
	{
		this.formatDefinitionField = value;
	}
	get formatDefinition(): ExportFormatDefinition
	{
		return this.formatDefinitionField;
	}
	set repositoryDefinition(value: ExportRepositoryDefinition)
	{
		this.repositoryDefinitionField = value;
	}
	get repositoryDefinition(): ExportRepositoryDefinition
	{
		return this.repositoryDefinitionField;
	}
	set authorizedUserRolesForExport(value: UserRole[])
	{
		this.authorizedUserRolesForExportField = value;
	}
	get authorizedUserRolesForExport(): UserRole[]
	{
		return this.authorizedUserRolesForExportField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set ownersFlowApprovalStrategy(value: OwnersFlowApprovalStrategy)
	{
		this.ownersFlowApprovalStrategyField = value;
	}
	get ownersFlowApprovalStrategy(): OwnersFlowApprovalStrategy
	{
		return this.ownersFlowApprovalStrategyField;
	}
	set entityStatus(value: EntityStatus)
	{
		this.entityStatusField = value;
	}
	get entityStatus(): EntityStatus
	{
		return this.entityStatusField;
	}
	set entityStatusSpecified(value: boolean)
	{
		this.entityStatusFieldSpecified = value;
	}
	get entityStatusSpecified(): boolean
	{
		return this.entityStatusFieldSpecified;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	set isTestEnvironment(value: boolean)
	{
		this.isTestEnvironmentField = value;
	}
	get isTestEnvironment(): boolean
	{
		return this.isTestEnvironmentField;
	}
	set isAllowSnapshots(value: boolean)
	{
		this.isAllowSnapshotsField = value;
	}
	get isAllowSnapshots(): boolean
	{
		return this.isAllowSnapshotsField;
	}
	set snapshotSuffix(value: string)
	{
		this.snapshotSuffixField = value;
	}
	get snapshotSuffix(): string
	{
		return this.snapshotSuffixField;
	}
	set environmentType(value: EnvironmentType)
	{
		this.environmentTypeField = value;
	}
	get environmentType(): EnvironmentType
	{
		return this.environmentTypeField;
	}
	constructor()
	{
		super();
	}
}
class ModelDefinition extends AbstractEntity
{
	private targetModelNameField: string = null;
	private ownersFlowApprovalStrategyField: OwnersFlowApprovalStrategy = null;
	private modelVersionsField: ModelVersion[] = null;
	private modelDefinitionCustomPropertyTemplatesField: ModelDefinitionCustomPropertyTemplate[] = null;
	private isModelDefinitionInUseField: boolean = false;
	set targetModelName(value: string)
	{
		this.targetModelNameField = value;
	}
	get targetModelName(): string
	{
		return this.targetModelNameField;
	}
	set ownersFlowApprovalStrategy(value: OwnersFlowApprovalStrategy)
	{
		this.ownersFlowApprovalStrategyField = value;
	}
	get ownersFlowApprovalStrategy(): OwnersFlowApprovalStrategy
	{
		return this.ownersFlowApprovalStrategyField;
	}
	set modelVersions(value: ModelVersion[])
	{
		this.modelVersionsField = value;
	}
	get modelVersions(): ModelVersion[]
	{
		return this.modelVersionsField;
	}
	set modelDefinitionCustomPropertyTemplates(value: ModelDefinitionCustomPropertyTemplate[])
	{
		this.modelDefinitionCustomPropertyTemplatesField = value;
	}
	get modelDefinitionCustomPropertyTemplates(): ModelDefinitionCustomPropertyTemplate[]
	{
		return this.modelDefinitionCustomPropertyTemplatesField;
	}
	set isModelDefinitionInUse(value: boolean)
	{
		this.isModelDefinitionInUseField = value;
	}
	get isModelDefinitionInUse(): boolean
	{
		return this.isModelDefinitionInUseField;
	}
	constructor()
	{
		super();
	}
}
class ModelVersion extends AbstractEntity
{
	private versionField: string = null;
	private frozenField: boolean = false;
	set version(value: string)
	{
		this.versionField = value;
	}
	get version(): string
	{
		return this.versionField;
	}
	set frozen(value: boolean)
	{
		this.frozenField = value;
	}
	get frozen(): boolean
	{
		return this.frozenField;
	}
	constructor()
	{
		super();
	}
}
class ModelDefinitionCustomPropertyTemplate extends AbstractEntity
{
	private dynamicPropertyTemplateField: DynamicPropertyTemplate = null;
	set dynamicPropertyTemplate(value: DynamicPropertyTemplate)
	{
		this.dynamicPropertyTemplateField = value;
	}
	get dynamicPropertyTemplate(): DynamicPropertyTemplate
	{
		return this.dynamicPropertyTemplateField;
	}
	constructor()
	{
		super();
	}
}
class ExportDefinition extends AbstractEntity
{
	private exportDefinitionPropertyTemplatesField: ExportDefinitionPropertyTemplate[] = null;
	private identifierNameField: string = null;
	private implBeanNameField: string = null;
	private displayNameField: string = null;
	private entityStatusField: EntityStatus = 0;
	private entityStatusFieldSpecified: boolean = false;
	set exportDefinitionPropertyTemplates(value: ExportDefinitionPropertyTemplate[])
	{
		this.exportDefinitionPropertyTemplatesField = value;
	}
	get exportDefinitionPropertyTemplates(): ExportDefinitionPropertyTemplate[]
	{
		return this.exportDefinitionPropertyTemplatesField;
	}
	set identifierName(value: string)
	{
		this.identifierNameField = value;
	}
	get identifierName(): string
	{
		return this.identifierNameField;
	}
	set implBeanName(value: string)
	{
		this.implBeanNameField = value;
	}
	get implBeanName(): string
	{
		return this.implBeanNameField;
	}
	set displayName(value: string)
	{
		this.displayNameField = value;
	}
	get displayName(): string
	{
		return this.displayNameField;
	}
	set entityStatus(value: EntityStatus)
	{
		this.entityStatusField = value;
	}
	get entityStatus(): EntityStatus
	{
		return this.entityStatusField;
	}
	set entityStatusSpecified(value: boolean)
	{
		this.entityStatusFieldSpecified = value;
	}
	get entityStatusSpecified(): boolean
	{
		return this.entityStatusFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class ExportFormatDefinition extends ExportDefinition
{
	private isIncrementalExportSupportedField: boolean = false;
	private isModelDefinitionRequiredField: boolean = false;
	set isIncrementalExportSupported(value: boolean)
	{
		this.isIncrementalExportSupportedField = value;
	}
	get isIncrementalExportSupported(): boolean
	{
		return this.isIncrementalExportSupportedField;
	}
	set isModelDefinitionRequired(value: boolean)
	{
		this.isModelDefinitionRequiredField = value;
	}
	get isModelDefinitionRequired(): boolean
	{
		return this.isModelDefinitionRequiredField;
	}
	constructor()
	{
		super();
	}
}
class ExportDefinitionPropertyTemplate extends AbstractEntity
{
	private dynamicPropertyTemplateField: DynamicPropertyTemplate = null;
	set dynamicPropertyTemplate(value: DynamicPropertyTemplate)
	{
		this.dynamicPropertyTemplateField = value;
	}
	get dynamicPropertyTemplate(): DynamicPropertyTemplate
	{
		return this.dynamicPropertyTemplateField;
	}
	constructor()
	{
		super();
	}
}
class ExportRepositoryDefinition extends ExportDefinition
{
	constructor()
	{
		super();
	}
}
class EnvironmentType extends NObject
{
	private nameField: string = null;
	private productionField: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set production(value: boolean)
	{
		this.productionField = value;
	}
	get production(): boolean
	{
		return this.productionField;
	}
	constructor()
	{
		super();
	}
}
class Revision extends ExtendableEntity
{
	private tagField: string = null;
	private creationDateField: DateTime = null;
	private creationDateFieldSpecified: boolean = false;
	private tagCreationDateField: DateTime = null;
	private tagCreationDateFieldSpecified: boolean = false;
	private tagCreatorField: User = null;
	private internalSignField: string = null;
	private pullRequestsField: PullRequest[] = null;
	private deploymentDescriptorsField: DeploymentDescriptor[] = null;
	private nameField: string = null;
	private isTaggedField: boolean = false;
	set tag(value: string)
	{
		this.tagField = value;
	}
	get tag(): string
	{
		return this.tagField;
	}
	set creationDate(value: DateTime)
	{
		this.creationDateField = value;
	}
	get creationDate(): DateTime
	{
		return this.creationDateField;
	}
	set creationDateSpecified(value: boolean)
	{
		this.creationDateFieldSpecified = value;
	}
	get creationDateSpecified(): boolean
	{
		return this.creationDateFieldSpecified;
	}
	set tagCreationDate(value: DateTime)
	{
		this.tagCreationDateField = value;
	}
	get tagCreationDate(): DateTime
	{
		return this.tagCreationDateField;
	}
	set tagCreationDateSpecified(value: boolean)
	{
		this.tagCreationDateFieldSpecified = value;
	}
	get tagCreationDateSpecified(): boolean
	{
		return this.tagCreationDateFieldSpecified;
	}
	set tagCreator(value: User)
	{
		this.tagCreatorField = value;
	}
	get tagCreator(): User
	{
		return this.tagCreatorField;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	set pullRequests(value: PullRequest[])
	{
		this.pullRequestsField = value;
	}
	get pullRequests(): PullRequest[]
	{
		return this.pullRequestsField;
	}
	set deploymentDescriptors(value: DeploymentDescriptor[])
	{
		this.deploymentDescriptorsField = value;
	}
	get deploymentDescriptors(): DeploymentDescriptor[]
	{
		return this.deploymentDescriptorsField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set isTagged(value: boolean)
	{
		this.isTaggedField = value;
	}
	get isTagged(): boolean
	{
		return this.isTaggedField;
	}
	constructor()
	{
		super();
	}
}
class PullRequest extends AbstractEntity
{
	private descriptionField: string = null;
	private typeField: pullRequestType = 0;
	private typeFieldSpecified: boolean = false;
	private creationDateField: DateTime = null;
	private creationDateFieldSpecified: boolean = false;
	private submitterField: User = null;
	private ownersFlowStateField: OwnersFlowState = null;
	private statusField: PullRequestStatus = 0;
	private statusFieldSpecified: boolean = false;
	private pullRequestChangesField: PullRequestChange[] = null;
	private targetBranchField: Branch = null;
	private bcdTaskField: BcdTask = null;
	private bcdField: Bcd = null;
	private mergedFromField: Revision = null;
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set type(value: pullRequestType)
	{
		this.typeField = value;
	}
	get type(): pullRequestType
	{
		return this.typeField;
	}
	set typeSpecified(value: boolean)
	{
		this.typeFieldSpecified = value;
	}
	get typeSpecified(): boolean
	{
		return this.typeFieldSpecified;
	}
	set creationDate(value: DateTime)
	{
		this.creationDateField = value;
	}
	get creationDate(): DateTime
	{
		return this.creationDateField;
	}
	set creationDateSpecified(value: boolean)
	{
		this.creationDateFieldSpecified = value;
	}
	get creationDateSpecified(): boolean
	{
		return this.creationDateFieldSpecified;
	}
	set submitter(value: User)
	{
		this.submitterField = value;
	}
	get submitter(): User
	{
		return this.submitterField;
	}
	set ownersFlowState(value: OwnersFlowState)
	{
		this.ownersFlowStateField = value;
	}
	get ownersFlowState(): OwnersFlowState
	{
		return this.ownersFlowStateField;
	}
	set status(value: PullRequestStatus)
	{
		this.statusField = value;
	}
	get status(): PullRequestStatus
	{
		return this.statusField;
	}
	set statusSpecified(value: boolean)
	{
		this.statusFieldSpecified = value;
	}
	get statusSpecified(): boolean
	{
		return this.statusFieldSpecified;
	}
	set pullRequestChanges(value: PullRequestChange[])
	{
		this.pullRequestChangesField = value;
	}
	get pullRequestChanges(): PullRequestChange[]
	{
		return this.pullRequestChangesField;
	}
	set targetBranch(value: Branch)
	{
		this.targetBranchField = value;
	}
	get targetBranch(): Branch
	{
		return this.targetBranchField;
	}
	set bcdTask(value: BcdTask)
	{
		this.bcdTaskField = value;
	}
	get bcdTask(): BcdTask
	{
		return this.bcdTaskField;
	}
	set bcd(value: Bcd)
	{
		this.bcdField = value;
	}
	get bcd(): Bcd
	{
		return this.bcdField;
	}
	set mergedFrom(value: Revision)
	{
		this.mergedFromField = value;
	}
	get mergedFrom(): Revision
	{
		return this.mergedFromField;
	}
	constructor()
	{
		super();
	}
}
enum pullRequestType
{
	AD_HOC,
	FULL_MERGE,
	PARTIAL_MERGE
}
class OwnersFlowState extends AbstractEntity
{
	private ownerVotesField: OwnerVote[] = null;
	private workflowStatusField: StateStatus = 0;
	private workflowStatusFieldSpecified: boolean = false;
	private entityTypeField: EntityType = null;
	private requestorField: User = null;
	private creationDateField: DateTime = null;
	private creationDateFieldSpecified: boolean = false;
	private statusNoteField: string = null;
	private bcdTasksField: BcdTask[] = null;
	private ownersFlowApprovalStrategyField: OwnersFlowApprovalStrategy = null;
	set ownerVotes(value: OwnerVote[])
	{
		this.ownerVotesField = value;
	}
	get ownerVotes(): OwnerVote[]
	{
		return this.ownerVotesField;
	}
	set workflowStatus(value: StateStatus)
	{
		this.workflowStatusField = value;
	}
	get workflowStatus(): StateStatus
	{
		return this.workflowStatusField;
	}
	set workflowStatusSpecified(value: boolean)
	{
		this.workflowStatusFieldSpecified = value;
	}
	get workflowStatusSpecified(): boolean
	{
		return this.workflowStatusFieldSpecified;
	}
	set entityType(value: EntityType)
	{
		this.entityTypeField = value;
	}
	get entityType(): EntityType
	{
		return this.entityTypeField;
	}
	set requestor(value: User)
	{
		this.requestorField = value;
	}
	get requestor(): User
	{
		return this.requestorField;
	}
	set creationDate(value: DateTime)
	{
		this.creationDateField = value;
	}
	get creationDate(): DateTime
	{
		return this.creationDateField;
	}
	set creationDateSpecified(value: boolean)
	{
		this.creationDateFieldSpecified = value;
	}
	get creationDateSpecified(): boolean
	{
		return this.creationDateFieldSpecified;
	}
	set statusNote(value: string)
	{
		this.statusNoteField = value;
	}
	get statusNote(): string
	{
		return this.statusNoteField;
	}
	set bcdTasks(value: BcdTask[])
	{
		this.bcdTasksField = value;
	}
	get bcdTasks(): BcdTask[]
	{
		return this.bcdTasksField;
	}
	set ownersFlowApprovalStrategy(value: OwnersFlowApprovalStrategy)
	{
		this.ownersFlowApprovalStrategyField = value;
	}
	get ownersFlowApprovalStrategy(): OwnersFlowApprovalStrategy
	{
		return this.ownersFlowApprovalStrategyField;
	}
	constructor()
	{
		super();
	}
}
class OwnerVote extends AbstractEntity
{
	private userField: User = null;
	private messageField: string = null;
	private actionTypeField: VoterActionType = 0;
	private actionTypeFieldSpecified: boolean = false;
	private approvalDateField: DateTime = null;
	private approvalDateFieldSpecified: boolean = false;
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set message(value: string)
	{
		this.messageField = value;
	}
	get message(): string
	{
		return this.messageField;
	}
	set actionType(value: VoterActionType)
	{
		this.actionTypeField = value;
	}
	get actionType(): VoterActionType
	{
		return this.actionTypeField;
	}
	set actionTypeSpecified(value: boolean)
	{
		this.actionTypeFieldSpecified = value;
	}
	get actionTypeSpecified(): boolean
	{
		return this.actionTypeFieldSpecified;
	}
	set approvalDate(value: DateTime)
	{
		this.approvalDateField = value;
	}
	get approvalDate(): DateTime
	{
		return this.approvalDateField;
	}
	set approvalDateSpecified(value: boolean)
	{
		this.approvalDateFieldSpecified = value;
	}
	get approvalDateSpecified(): boolean
	{
		return this.approvalDateFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
enum VoterActionType
{
	APPROVE,
	REJECT
}
enum StateStatus
{
	WAITING_FOR_APPROVAL,
	REJECTED,
	APPROVED
}
class BcdTask extends ExtendableEntity
{
	private nameField: string = null;
	private freeTextField: string = null;
	private taskTypeField: TaskType = 0;
	private taskTypeFieldSpecified: boolean = false;
	private priorityField: Priority = 0;
	private priorityFieldSpecified: boolean = false;
	private dueDateField: DateTime = null;
	private dueDateFieldSpecified: boolean = false;
	private assignedDateField: DateTime = null;
	private assignedDateFieldSpecified: boolean = false;
	private completedDateField: DateTime = null;
	private completedDateFieldSpecified: boolean = false;
	private readField: boolean = false;
	private noteField: string = null;
	private doneField: boolean = false;
	private tranDetailsField: string = null;
	private onHoldField: boolean = false;
	private statusField: string = null;
	private assignedByField: User = null;
	private ownerField: User = null;
	private originalAssigneeField: User = null;
	private whiteboardField: Whiteboard = null;
	private assetsField: WbAsset[] = null;
	private taskWorkflowInstField: TaskWorkflowInst = null;
	private childrenTaskField: BcdTask[] = null;
	private propertiesField: BcdTaskEntry[] = null;
	private deploymentTypeField: DeploymentType = null;
	private statusNoteField: string = null;
	private taskLinksField: TaskLink[] = null;
	private extensionTypeField: string = null;
	private linkQueryParametersField: KeyValueDto[] = null;
	private entityTypeUIField: EntityType = null;
	private projectField: Project = null;
	private branchField: Branch = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set freeText(value: string)
	{
		this.freeTextField = value;
	}
	get freeText(): string
	{
		return this.freeTextField;
	}
	set taskType(value: TaskType)
	{
		this.taskTypeField = value;
	}
	get taskType(): TaskType
	{
		return this.taskTypeField;
	}
	set taskTypeSpecified(value: boolean)
	{
		this.taskTypeFieldSpecified = value;
	}
	get taskTypeSpecified(): boolean
	{
		return this.taskTypeFieldSpecified;
	}
	set priority(value: Priority)
	{
		this.priorityField = value;
	}
	get priority(): Priority
	{
		return this.priorityField;
	}
	set prioritySpecified(value: boolean)
	{
		this.priorityFieldSpecified = value;
	}
	get prioritySpecified(): boolean
	{
		return this.priorityFieldSpecified;
	}
	set dueDate(value: DateTime)
	{
		this.dueDateField = value;
	}
	get dueDate(): DateTime
	{
		return this.dueDateField;
	}
	set dueDateSpecified(value: boolean)
	{
		this.dueDateFieldSpecified = value;
	}
	get dueDateSpecified(): boolean
	{
		return this.dueDateFieldSpecified;
	}
	set assignedDate(value: DateTime)
	{
		this.assignedDateField = value;
	}
	get assignedDate(): DateTime
	{
		return this.assignedDateField;
	}
	set assignedDateSpecified(value: boolean)
	{
		this.assignedDateFieldSpecified = value;
	}
	get assignedDateSpecified(): boolean
	{
		return this.assignedDateFieldSpecified;
	}
	set completedDate(value: DateTime)
	{
		this.completedDateField = value;
	}
	get completedDate(): DateTime
	{
		return this.completedDateField;
	}
	set completedDateSpecified(value: boolean)
	{
		this.completedDateFieldSpecified = value;
	}
	get completedDateSpecified(): boolean
	{
		return this.completedDateFieldSpecified;
	}
	set read(value: boolean)
	{
		this.readField = value;
	}
	get read(): boolean
	{
		return this.readField;
	}
	set note(value: string)
	{
		this.noteField = value;
	}
	get note(): string
	{
		return this.noteField;
	}
	set done(value: boolean)
	{
		this.doneField = value;
	}
	get done(): boolean
	{
		return this.doneField;
	}
	set tranDetails(value: string)
	{
		this.tranDetailsField = value;
	}
	get tranDetails(): string
	{
		return this.tranDetailsField;
	}
	set onHold(value: boolean)
	{
		this.onHoldField = value;
	}
	get onHold(): boolean
	{
		return this.onHoldField;
	}
	set status(value: string)
	{
		this.statusField = value;
	}
	get status(): string
	{
		return this.statusField;
	}
	set assignedBy(value: User)
	{
		this.assignedByField = value;
	}
	get assignedBy(): User
	{
		return this.assignedByField;
	}
	set owner(value: User)
	{
		this.ownerField = value;
	}
	get owner(): User
	{
		return this.ownerField;
	}
	set originalAssignee(value: User)
	{
		this.originalAssigneeField = value;
	}
	get originalAssignee(): User
	{
		return this.originalAssigneeField;
	}
	set whiteboard(value: Whiteboard)
	{
		this.whiteboardField = value;
	}
	get whiteboard(): Whiteboard
	{
		return this.whiteboardField;
	}
	set assets(value: WbAsset[])
	{
		this.assetsField = value;
	}
	get assets(): WbAsset[]
	{
		return this.assetsField;
	}
	set taskWorkflowInst(value: TaskWorkflowInst)
	{
		this.taskWorkflowInstField = value;
	}
	get taskWorkflowInst(): TaskWorkflowInst
	{
		return this.taskWorkflowInstField;
	}
	set childrenTask(value: BcdTask[])
	{
		this.childrenTaskField = value;
	}
	get childrenTask(): BcdTask[]
	{
		return this.childrenTaskField;
	}
	set properties(value: BcdTaskEntry[])
	{
		this.propertiesField = value;
	}
	get properties(): BcdTaskEntry[]
	{
		return this.propertiesField;
	}
	set deploymentType(value: DeploymentType)
	{
		this.deploymentTypeField = value;
	}
	get deploymentType(): DeploymentType
	{
		return this.deploymentTypeField;
	}
	set statusNote(value: string)
	{
		this.statusNoteField = value;
	}
	get statusNote(): string
	{
		return this.statusNoteField;
	}
	set taskLinks(value: TaskLink[])
	{
		this.taskLinksField = value;
	}
	get taskLinks(): TaskLink[]
	{
		return this.taskLinksField;
	}
	set extensionType(value: string)
	{
		this.extensionTypeField = value;
	}
	get extensionType(): string
	{
		return this.extensionTypeField;
	}
	set linkQueryParameters(value: KeyValueDto[])
	{
		this.linkQueryParametersField = value;
	}
	get linkQueryParameters(): KeyValueDto[]
	{
		return this.linkQueryParametersField;
	}
	set entityTypeUI(value: EntityType)
	{
		this.entityTypeUIField = value;
	}
	get entityTypeUI(): EntityType
	{
		return this.entityTypeUIField;
	}
	set project(value: Project)
	{
		this.projectField = value;
	}
	get project(): Project
	{
		return this.projectField;
	}
	set branch(value: Branch)
	{
		this.branchField = value;
	}
	get branch(): Branch
	{
		return this.branchField;
	}
	constructor()
	{
		super();
	}
}
enum TaskType
{
	BCD_TASK,
	FT_TASK,
	BCD_SUB_TASK,
	INFO,
	EXPORT_TASK,
	DV_TO_VG_ASSOC_TASK,
	EXTENSION,
	IMPORT_TASK,
	OWNER_TASK
}
enum Priority
{
	HIGH,
	NORMAL,
	LOW
}
class WbAsset extends AbstractEntity
{
	private assetField: Asset = null;
	private originatedFromAssetField: Asset = null;
	private versionIncField: VersionInc = 0;
	private versionIncFieldSpecified: boolean = false;
	private viewGroupField: ViewGroup = null;
	private contextIdField: number = 0;
	private contextIdFieldSpecified: boolean = false;
	private contextTypeField: EntityType = null;
	set asset(value: Asset)
	{
		this.assetField = value;
	}
	get asset(): Asset
	{
		return this.assetField;
	}
	set originatedFromAsset(value: Asset)
	{
		this.originatedFromAssetField = value;
	}
	get originatedFromAsset(): Asset
	{
		return this.originatedFromAssetField;
	}
	set versionInc(value: VersionInc)
	{
		this.versionIncField = value;
	}
	get versionInc(): VersionInc
	{
		return this.versionIncField;
	}
	set versionIncSpecified(value: boolean)
	{
		this.versionIncFieldSpecified = value;
	}
	get versionIncSpecified(): boolean
	{
		return this.versionIncFieldSpecified;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set contextId(value: number)
	{
		this.contextIdField = value;
	}
	get contextId(): number
	{
		return this.contextIdField;
	}
	set contextIdSpecified(value: boolean)
	{
		this.contextIdFieldSpecified = value;
	}
	get contextIdSpecified(): boolean
	{
		return this.contextIdFieldSpecified;
	}
	set contextType(value: EntityType)
	{
		this.contextTypeField = value;
	}
	get contextType(): EntityType
	{
		return this.contextTypeField;
	}
	constructor()
	{
		super();
	}
}
enum VersionInc
{
	MAJOR,
	MINOR,
	NON
}
class TaskWorkflowInst extends AbstractEntity
{
	private taskWorkflowTmplField: TaskWorkflowTmpl = null;
	private currentStateField: State = null;
	private workflowStatusField: WorkflowStatus = 0;
	private workflowStatusFieldSpecified: boolean = false;
	set taskWorkflowTmpl(value: TaskWorkflowTmpl)
	{
		this.taskWorkflowTmplField = value;
	}
	get taskWorkflowTmpl(): TaskWorkflowTmpl
	{
		return this.taskWorkflowTmplField;
	}
	set currentState(value: State)
	{
		this.currentStateField = value;
	}
	get currentState(): State
	{
		return this.currentStateField;
	}
	set workflowStatus(value: WorkflowStatus)
	{
		this.workflowStatusField = value;
	}
	get workflowStatus(): WorkflowStatus
	{
		return this.workflowStatusField;
	}
	set workflowStatusSpecified(value: boolean)
	{
		this.workflowStatusFieldSpecified = value;
	}
	get workflowStatusSpecified(): boolean
	{
		return this.workflowStatusFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class State extends AbstractEntity
{
	private nameField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
enum WorkflowStatus
{
	NEW,
	IN_PROGRESS,
	COMPLETED
}
class BcdTaskEntry extends NObject
{
	private keyField: TaskWorkflowProperties = 0;
	private keyFieldSpecified: boolean = false;
	private valueField: string = null;
	set key(value: TaskWorkflowProperties)
	{
		this.keyField = value;
	}
	get key(): TaskWorkflowProperties
	{
		return this.keyField;
	}
	set keySpecified(value: boolean)
	{
		this.keyFieldSpecified = value;
	}
	get keySpecified(): boolean
	{
		return this.keyFieldSpecified;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
enum TaskWorkflowProperties
{
	CONFLICT,
	RESOLVE_CONFLICT,
	NON_DEPLOY_FT,
	RESOLVE_NONDEPLOY_FT,
	WARNING,
	RESOLVE_WARNING,
	OWNER_TASK_ID
}
class DeploymentType extends AbstractEntity
{
	private nameField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
class TaskLink extends AbstractEntity
{
	private objectIdField: number = 0;
	private objectIdFieldSpecified: boolean = false;
	private objectTypeField: EntityType = null;
	set objectId(value: number)
	{
		this.objectIdField = value;
	}
	get objectId(): number
	{
		return this.objectIdField;
	}
	set objectIdSpecified(value: boolean)
	{
		this.objectIdFieldSpecified = value;
	}
	get objectIdSpecified(): boolean
	{
		return this.objectIdFieldSpecified;
	}
	set objectType(value: EntityType)
	{
		this.objectTypeField = value;
	}
	get objectType(): EntityType
	{
		return this.objectTypeField;
	}
	constructor()
	{
		super();
	}
}
class Project extends ExtendableEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	private viewGroupField: ViewGroup = null;
	private creatorField: User = null;
	private creationDateField: DateTime = null;
	private creationDateFieldSpecified: boolean = false;
	private ownersFlowApprovalStrategyField: OwnersFlowApprovalStrategy = null;
	private branchesField: Branch[] = null;
	private isRetiredField: boolean = false;
	private retireDateField: DateTime = null;
	private retireDateFieldSpecified: boolean = false;
	private retireUserField: User = null;
	private displayNameField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set creator(value: User)
	{
		this.creatorField = value;
	}
	get creator(): User
	{
		return this.creatorField;
	}
	set creationDate(value: DateTime)
	{
		this.creationDateField = value;
	}
	get creationDate(): DateTime
	{
		return this.creationDateField;
	}
	set creationDateSpecified(value: boolean)
	{
		this.creationDateFieldSpecified = value;
	}
	get creationDateSpecified(): boolean
	{
		return this.creationDateFieldSpecified;
	}
	set ownersFlowApprovalStrategy(value: OwnersFlowApprovalStrategy)
	{
		this.ownersFlowApprovalStrategyField = value;
	}
	get ownersFlowApprovalStrategy(): OwnersFlowApprovalStrategy
	{
		return this.ownersFlowApprovalStrategyField;
	}
	set branches(value: Branch[])
	{
		this.branchesField = value;
	}
	get branches(): Branch[]
	{
		return this.branchesField;
	}
	set isRetired(value: boolean)
	{
		this.isRetiredField = value;
	}
	get isRetired(): boolean
	{
		return this.isRetiredField;
	}
	set retireDate(value: DateTime)
	{
		this.retireDateField = value;
	}
	get retireDate(): DateTime
	{
		return this.retireDateField;
	}
	set retireDateSpecified(value: boolean)
	{
		this.retireDateFieldSpecified = value;
	}
	get retireDateSpecified(): boolean
	{
		return this.retireDateFieldSpecified;
	}
	set retireUser(value: User)
	{
		this.retireUserField = value;
	}
	get retireUser(): User
	{
		return this.retireUserField;
	}
	set displayName(value: string)
	{
		this.displayNameField = value;
	}
	get displayName(): string
	{
		return this.displayNameField;
	}
	constructor()
	{
		super();
	}
}
class Branch extends AbstractEntity
{
	private nameField: string = null;
	private lastSnapshotTagNameField: string = null;
	private creatorField: User = null;
	private descriptionField: string = null;
	private creationDateField: DateTime = null;
	private creationDateFieldSpecified: boolean = false;
	private branchedFromRevisionField: Revision = null;
	private branchRevisionsField: BranchRevision[] = null;
	private releaseTargetEffectiveDateField: DateTime = null;
	private releaseTargetEffectiveDateFieldSpecified: boolean = false;
	private isRetiredField: boolean = false;
	private retireDateField: DateTime = null;
	private retireDateFieldSpecified: boolean = false;
	private retireUserField: User = null;
	private isRetiredByProjectField: boolean = false;
	private headBranchRevisionsField: BranchRevision[] = null;
	private displayNameField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set lastSnapshotTagName(value: string)
	{
		this.lastSnapshotTagNameField = value;
	}
	get lastSnapshotTagName(): string
	{
		return this.lastSnapshotTagNameField;
	}
	set creator(value: User)
	{
		this.creatorField = value;
	}
	get creator(): User
	{
		return this.creatorField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set creationDate(value: DateTime)
	{
		this.creationDateField = value;
	}
	get creationDate(): DateTime
	{
		return this.creationDateField;
	}
	set creationDateSpecified(value: boolean)
	{
		this.creationDateFieldSpecified = value;
	}
	get creationDateSpecified(): boolean
	{
		return this.creationDateFieldSpecified;
	}
	set branchedFromRevision(value: Revision)
	{
		this.branchedFromRevisionField = value;
	}
	get branchedFromRevision(): Revision
	{
		return this.branchedFromRevisionField;
	}
	set branchRevisions(value: BranchRevision[])
	{
		this.branchRevisionsField = value;
	}
	get branchRevisions(): BranchRevision[]
	{
		return this.branchRevisionsField;
	}
	set releaseTargetEffectiveDate(value: DateTime)
	{
		this.releaseTargetEffectiveDateField = value;
	}
	get releaseTargetEffectiveDate(): DateTime
	{
		return this.releaseTargetEffectiveDateField;
	}
	set releaseTargetEffectiveDateSpecified(value: boolean)
	{
		this.releaseTargetEffectiveDateFieldSpecified = value;
	}
	get releaseTargetEffectiveDateSpecified(): boolean
	{
		return this.releaseTargetEffectiveDateFieldSpecified;
	}
	set isRetired(value: boolean)
	{
		this.isRetiredField = value;
	}
	get isRetired(): boolean
	{
		return this.isRetiredField;
	}
	set retireDate(value: DateTime)
	{
		this.retireDateField = value;
	}
	get retireDate(): DateTime
	{
		return this.retireDateField;
	}
	set retireDateSpecified(value: boolean)
	{
		this.retireDateFieldSpecified = value;
	}
	get retireDateSpecified(): boolean
	{
		return this.retireDateFieldSpecified;
	}
	set retireUser(value: User)
	{
		this.retireUserField = value;
	}
	get retireUser(): User
	{
		return this.retireUserField;
	}
	set isRetiredByProject(value: boolean)
	{
		this.isRetiredByProjectField = value;
	}
	get isRetiredByProject(): boolean
	{
		return this.isRetiredByProjectField;
	}
	set headBranchRevisions(value: BranchRevision[])
	{
		this.headBranchRevisionsField = value;
	}
	get headBranchRevisions(): BranchRevision[]
	{
		return this.headBranchRevisionsField;
	}
	set displayName(value: string)
	{
		this.displayNameField = value;
	}
	get displayName(): string
	{
		return this.displayNameField;
	}
	constructor()
	{
		super();
	}
}
class BranchRevision extends AbstractEntity
{
	private revisionField: Revision = null;
	set revision(value: Revision)
	{
		this.revisionField = value;
	}
	get revision(): Revision
	{
		return this.revisionField;
	}
	constructor()
	{
		super();
	}
}
enum PullRequestStatus
{
	DRAFT,
	CANDIDATE,
	APPROVED
}
class PullRequestChange extends AbstractEntity
{
	private oldDeploymentDescriptorField: DeploymentDescriptor = null;
	private newDeploymentDescriptorField: DeploymentDescriptor = null;
	private typeField: PullRequestChangeType = 0;
	private typeFieldSpecified: boolean = false;
	set oldDeploymentDescriptor(value: DeploymentDescriptor)
	{
		this.oldDeploymentDescriptorField = value;
	}
	get oldDeploymentDescriptor(): DeploymentDescriptor
	{
		return this.oldDeploymentDescriptorField;
	}
	set newDeploymentDescriptor(value: DeploymentDescriptor)
	{
		this.newDeploymentDescriptorField = value;
	}
	get newDeploymentDescriptor(): DeploymentDescriptor
	{
		return this.newDeploymentDescriptorField;
	}
	set type(value: PullRequestChangeType)
	{
		this.typeField = value;
	}
	get type(): PullRequestChangeType
	{
		return this.typeField;
	}
	set typeSpecified(value: boolean)
	{
		this.typeFieldSpecified = value;
	}
	get typeSpecified(): boolean
	{
		return this.typeFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class DeploymentDescriptor extends AbstractEntity
{
	private deploymentDescriptorViewGroupField: ViewGroup = null;
	private decisionViewField: DecisionView = null;
	private ruleFlowField: RuleFlow = null;
	private descriptorMetadataElementsField: DescriptorMetadataElement[] = null;
	private submissionDateField: DateTime = null;
	private submissionDateFieldSpecified: boolean = false;
	private requestForDeploymentDateField: DateTime = null;
	private requestForDeploymentDateFieldSpecified: boolean = false;
	private deploymentDateField: DateTime = null;
	private deploymentDateFieldSpecified: boolean = false;
	private effectiveDateField: DateTime = null;
	private effectiveDateFieldSpecified: boolean = false;
	private expirationDateField: DateTime = null;
	private expirationDateFieldSpecified: boolean = false;
	private internalSignField: string = null;
	private identifierHashIdField: string = null;
	private committedField: boolean = false;
	private groupIdField: number = 0;
	private groupIdFieldSpecified: boolean = false;
	private rowOperationField: RowOperation = 0;
	private rowOperationFieldSpecified: boolean = false;
	private timestampField: number = 0;
	private timestampFieldSpecified: boolean = false;
	private releaseField: Release = null;
	private bcdTaskField: BcdTask = null;
	private assetVersionField: string = null;
	set deploymentDescriptorViewGroup(value: ViewGroup)
	{
		this.deploymentDescriptorViewGroupField = value;
	}
	get deploymentDescriptorViewGroup(): ViewGroup
	{
		return this.deploymentDescriptorViewGroupField;
	}
	set decisionView(value: DecisionView)
	{
		this.decisionViewField = value;
	}
	get decisionView(): DecisionView
	{
		return this.decisionViewField;
	}
	set ruleFlow(value: RuleFlow)
	{
		this.ruleFlowField = value;
	}
	get ruleFlow(): RuleFlow
	{
		return this.ruleFlowField;
	}
	set descriptorMetadataElements(value: DescriptorMetadataElement[])
	{
		this.descriptorMetadataElementsField = value;
	}
	get descriptorMetadataElements(): DescriptorMetadataElement[]
	{
		return this.descriptorMetadataElementsField;
	}
	set submissionDate(value: DateTime)
	{
		this.submissionDateField = value;
	}
	get submissionDate(): DateTime
	{
		return this.submissionDateField;
	}
	set submissionDateSpecified(value: boolean)
	{
		this.submissionDateFieldSpecified = value;
	}
	get submissionDateSpecified(): boolean
	{
		return this.submissionDateFieldSpecified;
	}
	set requestForDeploymentDate(value: DateTime)
	{
		this.requestForDeploymentDateField = value;
	}
	get requestForDeploymentDate(): DateTime
	{
		return this.requestForDeploymentDateField;
	}
	set requestForDeploymentDateSpecified(value: boolean)
	{
		this.requestForDeploymentDateFieldSpecified = value;
	}
	get requestForDeploymentDateSpecified(): boolean
	{
		return this.requestForDeploymentDateFieldSpecified;
	}
	set deploymentDate(value: DateTime)
	{
		this.deploymentDateField = value;
	}
	get deploymentDate(): DateTime
	{
		return this.deploymentDateField;
	}
	set deploymentDateSpecified(value: boolean)
	{
		this.deploymentDateFieldSpecified = value;
	}
	get deploymentDateSpecified(): boolean
	{
		return this.deploymentDateFieldSpecified;
	}
	set effectiveDate(value: DateTime)
	{
		this.effectiveDateField = value;
	}
	get effectiveDate(): DateTime
	{
		return this.effectiveDateField;
	}
	set effectiveDateSpecified(value: boolean)
	{
		this.effectiveDateFieldSpecified = value;
	}
	get effectiveDateSpecified(): boolean
	{
		return this.effectiveDateFieldSpecified;
	}
	set expirationDate(value: DateTime)
	{
		this.expirationDateField = value;
	}
	get expirationDate(): DateTime
	{
		return this.expirationDateField;
	}
	set expirationDateSpecified(value: boolean)
	{
		this.expirationDateFieldSpecified = value;
	}
	get expirationDateSpecified(): boolean
	{
		return this.expirationDateFieldSpecified;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	set identifierHashId(value: string)
	{
		this.identifierHashIdField = value;
	}
	get identifierHashId(): string
	{
		return this.identifierHashIdField;
	}
	set committed(value: boolean)
	{
		this.committedField = value;
	}
	get committed(): boolean
	{
		return this.committedField;
	}
	set groupId(value: number)
	{
		this.groupIdField = value;
	}
	get groupId(): number
	{
		return this.groupIdField;
	}
	set groupIdSpecified(value: boolean)
	{
		this.groupIdFieldSpecified = value;
	}
	get groupIdSpecified(): boolean
	{
		return this.groupIdFieldSpecified;
	}
	set rowOperation(value: RowOperation)
	{
		this.rowOperationField = value;
	}
	get rowOperation(): RowOperation
	{
		return this.rowOperationField;
	}
	set rowOperationSpecified(value: boolean)
	{
		this.rowOperationFieldSpecified = value;
	}
	get rowOperationSpecified(): boolean
	{
		return this.rowOperationFieldSpecified;
	}
	set timestamp(value: number)
	{
		this.timestampField = value;
	}
	get timestamp(): number
	{
		return this.timestampField;
	}
	set timestampSpecified(value: boolean)
	{
		this.timestampFieldSpecified = value;
	}
	get timestampSpecified(): boolean
	{
		return this.timestampFieldSpecified;
	}
	set release(value: Release)
	{
		this.releaseField = value;
	}
	get release(): Release
	{
		return this.releaseField;
	}
	set bcdTask(value: BcdTask)
	{
		this.bcdTaskField = value;
	}
	get bcdTask(): BcdTask
	{
		return this.bcdTaskField;
	}
	set assetVersion(value: string)
	{
		this.assetVersionField = value;
	}
	get assetVersion(): string
	{
		return this.assetVersionField;
	}
	constructor()
	{
		super();
	}
}
class DescriptorMetadataElement extends AbstractEntity
{
	private templateField: DescriptorMetadataTemplate = null;
	private valueField: string = null;
	set template(value: DescriptorMetadataTemplate)
	{
		this.templateField = value;
	}
	get template(): DescriptorMetadataTemplate
	{
		return this.templateField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class DescriptorMetadataTemplate extends AbstractEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	private domainField: Domain = null;
	private viewGroupField: ViewGroup = null;
	private displayFormatField: Format = null;
	private defaultValueField: string = null;
	private isIdentifierField: boolean = false;
	private sortOrderField: number = 0;
	private sortOrderFieldSpecified: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set domain(value: Domain)
	{
		this.domainField = value;
	}
	get domain(): Domain
	{
		return this.domainField;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set displayFormat(value: Format)
	{
		this.displayFormatField = value;
	}
	get displayFormat(): Format
	{
		return this.displayFormatField;
	}
	set defaultValue(value: string)
	{
		this.defaultValueField = value;
	}
	get defaultValue(): string
	{
		return this.defaultValueField;
	}
	set isIdentifier(value: boolean)
	{
		this.isIdentifierField = value;
	}
	get isIdentifier(): boolean
	{
		return this.isIdentifierField;
	}
	set sortOrder(value: number)
	{
		this.sortOrderField = value;
	}
	get sortOrder(): number
	{
		return this.sortOrderField;
	}
	set sortOrderSpecified(value: boolean)
	{
		this.sortOrderFieldSpecified = value;
	}
	get sortOrderSpecified(): boolean
	{
		return this.sortOrderFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
enum RowOperation
{
	NEW,
	UPDATED,
	DELETED
}
enum PullRequestChangeType
{
	ASSET_ADDED,
	ASSET_REMOVED,
	DEPLOYMENT_DESCRIPTOR_CHANGED,
	DEPLOYMENT_DESCRIPTOR_ADDED,
	DEPLOYMENT_DESCRIPTOR_REMOVED
}
class Bcd extends AbstractEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	private adminField: User = null;
	private originalAssigneeField: User = null;
	private tasksField: BcdTask[] = null;
	private viewGroupField: ViewGroup = null;
	private onHoldField: boolean = false;
	private doneField: boolean = false;
	private analysisIndicatorField: boolean = false;
	private statusField: string = null;
	private creationDateField: DateTime = null;
	private creationDateFieldSpecified: boolean = false;
	private completionDateField: DateTime = null;
	private completionDateFieldSpecified: boolean = false;
	private statusNoteField: string = null;
	private privateBcdField: boolean = false;
	private privateUsersField: PrivateUser = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set admin(value: User)
	{
		this.adminField = value;
	}
	get admin(): User
	{
		return this.adminField;
	}
	set originalAssignee(value: User)
	{
		this.originalAssigneeField = value;
	}
	get originalAssignee(): User
	{
		return this.originalAssigneeField;
	}
	set tasks(value: BcdTask[])
	{
		this.tasksField = value;
	}
	get tasks(): BcdTask[]
	{
		return this.tasksField;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set onHold(value: boolean)
	{
		this.onHoldField = value;
	}
	get onHold(): boolean
	{
		return this.onHoldField;
	}
	set done(value: boolean)
	{
		this.doneField = value;
	}
	get done(): boolean
	{
		return this.doneField;
	}
	set analysisIndicator(value: boolean)
	{
		this.analysisIndicatorField = value;
	}
	get analysisIndicator(): boolean
	{
		return this.analysisIndicatorField;
	}
	set status(value: string)
	{
		this.statusField = value;
	}
	get status(): string
	{
		return this.statusField;
	}
	set creationDate(value: DateTime)
	{
		this.creationDateField = value;
	}
	get creationDate(): DateTime
	{
		return this.creationDateField;
	}
	set creationDateSpecified(value: boolean)
	{
		this.creationDateFieldSpecified = value;
	}
	get creationDateSpecified(): boolean
	{
		return this.creationDateFieldSpecified;
	}
	set completionDate(value: DateTime)
	{
		this.completionDateField = value;
	}
	get completionDate(): DateTime
	{
		return this.completionDateField;
	}
	set completionDateSpecified(value: boolean)
	{
		this.completionDateFieldSpecified = value;
	}
	get completionDateSpecified(): boolean
	{
		return this.completionDateFieldSpecified;
	}
	set statusNote(value: string)
	{
		this.statusNoteField = value;
	}
	get statusNote(): string
	{
		return this.statusNoteField;
	}
	set privateBcd(value: boolean)
	{
		this.privateBcdField = value;
	}
	get privateBcd(): boolean
	{
		return this.privateBcdField;
	}
	set privateUsers(value: PrivateUser)
	{
		this.privateUsersField = value;
	}
	get privateUsers(): PrivateUser
	{
		return this.privateUsersField;
	}
	constructor()
	{
		super();
	}
}
class PrivateUser extends AbstractEntity
{
	private userListField: PrivateUserDetail[] = null;
	set userList(value: PrivateUserDetail[])
	{
		this.userListField = value;
	}
	get userList(): PrivateUserDetail[]
	{
		return this.userListField;
	}
	constructor()
	{
		super();
	}
}
class PrivateUserDetail extends AbstractEntity
{
	private userField: User = null;
	private readOnlyField: boolean = false;
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set readOnly(value: boolean)
	{
		this.readOnlyField = value;
	}
	get readOnly(): boolean
	{
		return this.readOnlyField;
	}
	constructor()
	{
		super();
	}
}
class ModelMapping extends ExtendableEntity
{
	private modelDefinitionField: ModelDefinition = null;
	private modelVersionsField: ModelVersion[] = null;
	private infoField: string = null;
	private mappingCodeField: string = null;
	private ownersFlowStateField: OwnersFlowState = null;
	private changedStatusField: ChangedStatus = 0;
	private changedStatusFieldSpecified: boolean = false;
	private modelMappingStatusField: ModelMappingStatus = 0;
	private modelMappingStatusFieldSpecified: boolean = false;
	private valueMappingsField: ValueMapping[] = null;
	private logicalSignField: string = null;
	set modelDefinition(value: ModelDefinition)
	{
		this.modelDefinitionField = value;
	}
	get modelDefinition(): ModelDefinition
	{
		return this.modelDefinitionField;
	}
	set modelVersions(value: ModelVersion[])
	{
		this.modelVersionsField = value;
	}
	get modelVersions(): ModelVersion[]
	{
		return this.modelVersionsField;
	}
	set info(value: string)
	{
		this.infoField = value;
	}
	get info(): string
	{
		return this.infoField;
	}
	set mappingCode(value: string)
	{
		this.mappingCodeField = value;
	}
	get mappingCode(): string
	{
		return this.mappingCodeField;
	}
	set ownersFlowState(value: OwnersFlowState)
	{
		this.ownersFlowStateField = value;
	}
	get ownersFlowState(): OwnersFlowState
	{
		return this.ownersFlowStateField;
	}
	set changedStatus(value: ChangedStatus)
	{
		this.changedStatusField = value;
	}
	get changedStatus(): ChangedStatus
	{
		return this.changedStatusField;
	}
	set changedStatusSpecified(value: boolean)
	{
		this.changedStatusFieldSpecified = value;
	}
	get changedStatusSpecified(): boolean
	{
		return this.changedStatusFieldSpecified;
	}
	set modelMappingStatus(value: ModelMappingStatus)
	{
		this.modelMappingStatusField = value;
	}
	get modelMappingStatus(): ModelMappingStatus
	{
		return this.modelMappingStatusField;
	}
	set modelMappingStatusSpecified(value: boolean)
	{
		this.modelMappingStatusFieldSpecified = value;
	}
	get modelMappingStatusSpecified(): boolean
	{
		return this.modelMappingStatusFieldSpecified;
	}
	set valueMappings(value: ValueMapping[])
	{
		this.valueMappingsField = value;
	}
	get valueMappings(): ValueMapping[]
	{
		return this.valueMappingsField;
	}
	set logicalSign(value: string)
	{
		this.logicalSignField = value;
	}
	get logicalSign(): string
	{
		return this.logicalSignField;
	}
	constructor()
	{
		super();
	}
}
enum ChangedStatus
{
	UNCHANGED,
	DELETED
}
enum ModelMappingStatus
{
	DRAFT,
	CANDIDATE,
	APPROVED
}
class ValueMapping extends AbstractEntity
{
	private sourceMatchTypeField: ExpressionType = 0;
	private sourceMatchTypeFieldSpecified: boolean = false;
	private targetMatchTypeField: ExpressionType = 0;
	private targetMatchTypeFieldSpecified: boolean = false;
	private sourceField: string = null;
	private targetField: string = null;
	set sourceMatchType(value: ExpressionType)
	{
		this.sourceMatchTypeField = value;
	}
	get sourceMatchType(): ExpressionType
	{
		return this.sourceMatchTypeField;
	}
	set sourceMatchTypeSpecified(value: boolean)
	{
		this.sourceMatchTypeFieldSpecified = value;
	}
	get sourceMatchTypeSpecified(): boolean
	{
		return this.sourceMatchTypeFieldSpecified;
	}
	set targetMatchType(value: ExpressionType)
	{
		this.targetMatchTypeField = value;
	}
	get targetMatchType(): ExpressionType
	{
		return this.targetMatchTypeField;
	}
	set targetMatchTypeSpecified(value: boolean)
	{
		this.targetMatchTypeFieldSpecified = value;
	}
	get targetMatchTypeSpecified(): boolean
	{
		return this.targetMatchTypeFieldSpecified;
	}
	set source(value: string)
	{
		this.sourceField = value;
	}
	get source(): string
	{
		return this.sourceField;
	}
	set target(value: string)
	{
		this.targetField = value;
	}
	get target(): string
	{
		return this.targetField;
	}
	constructor()
	{
		super();
	}
}
enum ExpressionType
{
	SIMPLE,
	COMPLEX
}
class QualifierInstance extends AbstractEntity
{
	private qualifierField: Qualifier = null;
	private qualifierValueField: QualifierValue = null;
	set qualifier(value: Qualifier)
	{
		this.qualifierField = value;
	}
	get qualifier(): Qualifier
	{
		return this.qualifierField;
	}
	set qualifierValue(value: QualifierValue)
	{
		this.qualifierValueField = value;
	}
	get qualifierValue(): QualifierValue
	{
		return this.qualifierValueField;
	}
	constructor()
	{
		super();
	}
}
class CustomMetadataInstance extends AbstractEntity
{
	private customMetadataElementField: CustomMetadataElement = null;
	private metadataField: string = null;
	set customMetadataElement(value: CustomMetadataElement)
	{
		this.customMetadataElementField = value;
	}
	get customMetadataElement(): CustomMetadataElement
	{
		return this.customMetadataElementField;
	}
	set metadata(value: string)
	{
		this.metadataField = value;
	}
	get metadata(): string
	{
		return this.metadataField;
	}
	constructor()
	{
		super();
	}
}
class RowCellValue extends AbstractEntity
{
	private valueField: string = null;
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class ConclusionCell extends AbstractEntity
{
	private cellOperatorField: CellOperator = null;
	private operandFactTypeDefinitionField: FactTypeDefinition = null;
	private formulaField: Formula = null;
	private valueField: string = null;
	private rowCellValuesField: RowCellValue[] = null;
	private notesField: Note[] = null;
	set cellOperator(value: CellOperator)
	{
		this.cellOperatorField = value;
	}
	get cellOperator(): CellOperator
	{
		return this.cellOperatorField;
	}
	set operandFactTypeDefinition(value: FactTypeDefinition)
	{
		this.operandFactTypeDefinitionField = value;
	}
	get operandFactTypeDefinition(): FactTypeDefinition
	{
		return this.operandFactTypeDefinitionField;
	}
	set formula(value: Formula)
	{
		this.formulaField = value;
	}
	get formula(): Formula
	{
		return this.formulaField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	set rowCellValues(value: RowCellValue[])
	{
		this.rowCellValuesField = value;
	}
	get rowCellValues(): RowCellValue[]
	{
		return this.rowCellValuesField;
	}
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	constructor()
	{
		super();
	}
}
class RowMessageCategory extends AbstractEntity
{
	private nameField: string = null;
	private viewGroupsField: ViewGroup[] = null;
	private isReusedField: boolean = false;
	private isInheritedField: boolean = false;
	private internalSignField: string = null;
	private logicalSignField: string = null;
	private externalSignField: string = null;
	private modelMappingsField: ModelMapping[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set viewGroups(value: ViewGroup[])
	{
		this.viewGroupsField = value;
	}
	get viewGroups(): ViewGroup[]
	{
		return this.viewGroupsField;
	}
	set isReused(value: boolean)
	{
		this.isReusedField = value;
	}
	get isReused(): boolean
	{
		return this.isReusedField;
	}
	set isInherited(value: boolean)
	{
		this.isInheritedField = value;
	}
	get isInherited(): boolean
	{
		return this.isInheritedField;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	set logicalSign(value: string)
	{
		this.logicalSignField = value;
	}
	get logicalSign(): string
	{
		return this.logicalSignField;
	}
	set externalSign(value: string)
	{
		this.externalSignField = value;
	}
	get externalSign(): string
	{
		return this.externalSignField;
	}
	set modelMappings(value: ModelMapping[])
	{
		this.modelMappingsField = value;
	}
	get modelMappings(): ModelMapping[]
	{
		return this.modelMappingsField;
	}
	constructor()
	{
		super();
	}
}
class Perspective extends AbstractEntity
{
	private serializedPerspectiveField: string = null;
	private isDefaultField: boolean = false;
	set serializedPerspective(value: string)
	{
		this.serializedPerspectiveField = value;
	}
	get serializedPerspective(): string
	{
		return this.serializedPerspectiveField;
	}
	set isDefault(value: boolean)
	{
		this.isDefaultField = value;
	}
	get isDefault(): boolean
	{
		return this.isDefaultField;
	}
	constructor()
	{
		super();
	}
}
class FlowElement extends AbstractEntity
{
	private primaryElementIdField: number = 0;
	private primaryElementIdFieldSpecified: boolean = false;
	private primaryElementTypeField: EntityType = null;
	private primaryElementContextIdField: number = 0;
	private primaryElementContextIdFieldSpecified: boolean = false;
	private primaryElementNameField: string = null;
	set primaryElementId(value: number)
	{
		this.primaryElementIdField = value;
	}
	get primaryElementId(): number
	{
		return this.primaryElementIdField;
	}
	set primaryElementIdSpecified(value: boolean)
	{
		this.primaryElementIdFieldSpecified = value;
	}
	get primaryElementIdSpecified(): boolean
	{
		return this.primaryElementIdFieldSpecified;
	}
	set primaryElementType(value: EntityType)
	{
		this.primaryElementTypeField = value;
	}
	get primaryElementType(): EntityType
	{
		return this.primaryElementTypeField;
	}
	set primaryElementContextId(value: number)
	{
		this.primaryElementContextIdField = value;
	}
	get primaryElementContextId(): number
	{
		return this.primaryElementContextIdField;
	}
	set primaryElementContextIdSpecified(value: boolean)
	{
		this.primaryElementContextIdFieldSpecified = value;
	}
	get primaryElementContextIdSpecified(): boolean
	{
		return this.primaryElementContextIdFieldSpecified;
	}
	set primaryElementName(value: string)
	{
		this.primaryElementNameField = value;
	}
	get primaryElementName(): string
	{
		return this.primaryElementNameField;
	}
	constructor()
	{
		super();
	}
}
class Flow extends AbstractEntity
{
	private flowElementsField: FlowElement[] = null;
	set flowElements(value: FlowElement[])
	{
		this.flowElementsField = value;
	}
	get flowElements(): FlowElement[]
	{
		return this.flowElementsField;
	}
	constructor()
	{
		super();
	}
}
class EntitySymbol extends AbstractEntity
{
	private figureIdField: string = null;
	private contentField: string = null;
	private fillColorField: string = null;
	private borderColorField: string = null;
	set figureId(value: string)
	{
		this.figureIdField = value;
	}
	get figureId(): string
	{
		return this.figureIdField;
	}
	set content(value: string)
	{
		this.contentField = value;
	}
	get content(): string
	{
		return this.contentField;
	}
	set fillColor(value: string)
	{
		this.fillColorField = value;
	}
	get fillColor(): string
	{
		return this.fillColorField;
	}
	set borderColor(value: string)
	{
		this.borderColorField = value;
	}
	get borderColor(): string
	{
		return this.borderColorField;
	}
	constructor()
	{
		super();
	}
}
class FormatDataType extends AbstractEntity
{
	private dataTypeField: DataType = 0;
	private dataTypeFieldSpecified: boolean = false;
	private isDefaultFormatField: boolean = false;
	private formatField: Format = null;
	set dataType(value: DataType)
	{
		this.dataTypeField = value;
	}
	get dataType(): DataType
	{
		return this.dataTypeField;
	}
	set dataTypeSpecified(value: boolean)
	{
		this.dataTypeFieldSpecified = value;
	}
	get dataTypeSpecified(): boolean
	{
		return this.dataTypeFieldSpecified;
	}
	set isDefaultFormat(value: boolean)
	{
		this.isDefaultFormatField = value;
	}
	get isDefaultFormat(): boolean
	{
		return this.isDefaultFormatField;
	}
	set format(value: Format)
	{
		this.formatField = value;
	}
	get format(): Format
	{
		return this.formatField;
	}
	constructor()
	{
		super();
	}
}
class PropertyConfig extends AbstractEntity
{
	private nameField: string = null;
	private propertyDataTypeField: PropertyDataType = 0;
	private propertyDataTypeFieldSpecified: boolean = false;
	private propertyDiscriminatorField: PropertyDiscriminator = 0;
	private propertyDiscriminatorFieldSpecified: boolean = false;
	private defaultValueField: string = null;
	private descriptionField: string = null;
	private propertyIdentifierField: Property = 0;
	private propertyIdentifierFieldSpecified: boolean = false;
	private isEnabledField: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set propertyDataType(value: PropertyDataType)
	{
		this.propertyDataTypeField = value;
	}
	get propertyDataType(): PropertyDataType
	{
		return this.propertyDataTypeField;
	}
	set propertyDataTypeSpecified(value: boolean)
	{
		this.propertyDataTypeFieldSpecified = value;
	}
	get propertyDataTypeSpecified(): boolean
	{
		return this.propertyDataTypeFieldSpecified;
	}
	set propertyDiscriminator(value: PropertyDiscriminator)
	{
		this.propertyDiscriminatorField = value;
	}
	get propertyDiscriminator(): PropertyDiscriminator
	{
		return this.propertyDiscriminatorField;
	}
	set propertyDiscriminatorSpecified(value: boolean)
	{
		this.propertyDiscriminatorFieldSpecified = value;
	}
	get propertyDiscriminatorSpecified(): boolean
	{
		return this.propertyDiscriminatorFieldSpecified;
	}
	set defaultValue(value: string)
	{
		this.defaultValueField = value;
	}
	get defaultValue(): string
	{
		return this.defaultValueField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set propertyIdentifier(value: Property)
	{
		this.propertyIdentifierField = value;
	}
	get propertyIdentifier(): Property
	{
		return this.propertyIdentifierField;
	}
	set propertyIdentifierSpecified(value: boolean)
	{
		this.propertyIdentifierFieldSpecified = value;
	}
	get propertyIdentifierSpecified(): boolean
	{
		return this.propertyIdentifierFieldSpecified;
	}
	set isEnabled(value: boolean)
	{
		this.isEnabledField = value;
	}
	get isEnabled(): boolean
	{
		return this.isEnabledField;
	}
	constructor()
	{
		super();
	}
}
enum PropertyDataType
{
	STRING,
	BOOLEAN,
	INTEGER
}
enum PropertyDiscriminator
{
	SYSTEM,
	VIEW_GROUP,
	USER
}
enum Property
{
	SYS_SEARCH_RESULT_MAX_SIZE,
	SYS_DECISION_GRAPH_COLUMN_SPACING,
	SYS_DECISION_GRAPH_DIRECTION,
	SYS_DECISION_GRAPH_LAYER_SPACING,
	SYS_DECISION_GRAPH_MAX_SHAPE_WIDTH,
	SYS_DECISION_GRAPH_MIN_SHAPE_WIDTH,
	SYS_DECISION_GRAPH_MIN_DECISION_SHAPE_WIDTH,
	SYS_DECISION_GRAPH_MAX_DECISION_SHAPE_WIDTH,
	SYS_DECISION_GRAPH_TEXT_SPACING,
	SYS_SEND_MAIL_TO_ALL_USERS,
	SYS_MAIL_PORT,
	SYS_MAIL_HOST,
	SYS_MAIL_FROM,
	SYS_DEFAULT_DEPLOYMENT_TYPE,
	VG_IS_GENERATE_FULL_FACT_TYPE_NAME,
	USER_IS_SEND_MAIL_FOR_TASK,
	USER_IS_SEND_MAIL_FOR_NOTIFICATION,
	VG_FAIL_NO_FACET,
	SYS_NUMBER_OF_AUTO_OPENED_RELATED_OBJECTS_IN_CONTEXT_DI,
	SYS_MAX_NUMBER_OF_TESTCASES_DISPLAY,
	SYS_MAX_NUMBER_OF_TESTCASES_GENERATE,
	SYS_RFV_MAX_NUMBER_OF_CELLS_PER_PAGE,
	USER_SHOW_SPACES_IN_INPUT_VALUE,
	SYS_ENVIRONMENT_NAME,
	SYS_REPEATING_GROUP_SUPPORT,
	SYS_CANDIDATE_ASSET_IN_REVISION,
	SYS_AUTOATICALLY_SHOW_ASSET_INFO,
	SYS_DECISION_GRAPH_EXPANSION_ENABLED,
	SYS_DECISION_GRAPH_EXPANSION_THRESHOLD,
	USER_PIN_WHITEBOARD_PANE,
	USER_PIN_ADDITIONAL_INFO_PANE,
	USER_SHORT_DISPLAY_MODE_RFV,
	SYS_QUEUE_POLLING_TIME,
	SYS_IDLE_TIME,
	SYS_FT_NULL_IN_MSG_PLACEHOLDER
}
class RepoQueryObjectTypeMeta extends AbstractEntity
{
	private objectTypeField: EntityType = null;
	private objectClassField: string = null;
	private basicAliasesField: string[] = null;
	private projectionField: string[] = null;
	private attributesField: RepoQueryAttributeMeta[] = null;
	set objectType(value: EntityType)
	{
		this.objectTypeField = value;
	}
	get objectType(): EntityType
	{
		return this.objectTypeField;
	}
	set objectClass(value: string)
	{
		this.objectClassField = value;
	}
	get objectClass(): string
	{
		return this.objectClassField;
	}
	set basicAliases(value: string[])
	{
		this.basicAliasesField = value;
	}
	get basicAliases(): string[]
	{
		return this.basicAliasesField;
	}
	set projection(value: string[])
	{
		this.projectionField = value;
	}
	get projection(): string[]
	{
		return this.projectionField;
	}
	set attributes(value: RepoQueryAttributeMeta[])
	{
		this.attributesField = value;
	}
	get attributes(): RepoQueryAttributeMeta[]
	{
		return this.attributesField;
	}
	constructor()
	{
		super();
	}
}
class RepoQueryAttributeMeta extends AbstractEntity
{
	private textField: string = null;
	private propertyMappingsField: string[] = null;
	private propertyMetaDataMappingsField: string[] = null;
	private joinTableAliasesField: string[] = null;
	private typeField: AttributeType = null;
	private isQualifierOnlyField: boolean = false;
	private isCojunctionPropertyMappingField: boolean = false;
	private isDefaultFilterField: boolean = false;
	private subQueryField: SubQueryAttributeMeta = null;
	private parentAttributesField: RepoQueryAttributeMeta[] = null;
	private joinOnField: string = null;
	set text(value: string)
	{
		this.textField = value;
	}
	get text(): string
	{
		return this.textField;
	}
	set propertyMappings(value: string[])
	{
		this.propertyMappingsField = value;
	}
	get propertyMappings(): string[]
	{
		return this.propertyMappingsField;
	}
	set propertyMetaDataMappings(value: string[])
	{
		this.propertyMetaDataMappingsField = value;
	}
	get propertyMetaDataMappings(): string[]
	{
		return this.propertyMetaDataMappingsField;
	}
	set joinTableAliases(value: string[])
	{
		this.joinTableAliasesField = value;
	}
	get joinTableAliases(): string[]
	{
		return this.joinTableAliasesField;
	}
	set type(value: AttributeType)
	{
		this.typeField = value;
	}
	get type(): AttributeType
	{
		return this.typeField;
	}
	set isQualifierOnly(value: boolean)
	{
		this.isQualifierOnlyField = value;
	}
	get isQualifierOnly(): boolean
	{
		return this.isQualifierOnlyField;
	}
	set isCojunctionPropertyMapping(value: boolean)
	{
		this.isCojunctionPropertyMappingField = value;
	}
	get isCojunctionPropertyMapping(): boolean
	{
		return this.isCojunctionPropertyMappingField;
	}
	set isDefaultFilter(value: boolean)
	{
		this.isDefaultFilterField = value;
	}
	get isDefaultFilter(): boolean
	{
		return this.isDefaultFilterField;
	}
	set subQuery(value: SubQueryAttributeMeta)
	{
		this.subQueryField = value;
	}
	get subQuery(): SubQueryAttributeMeta
	{
		return this.subQueryField;
	}
	set parentAttributes(value: RepoQueryAttributeMeta[])
	{
		this.parentAttributesField = value;
	}
	get parentAttributes(): RepoQueryAttributeMeta[]
	{
		return this.parentAttributesField;
	}
	set joinOn(value: string)
	{
		this.joinOnField = value;
	}
	get joinOn(): string
	{
		return this.joinOnField;
	}
	constructor()
	{
		super();
	}
}
class AttributeType extends AbstractEntity
{
	private nameField: string = null;
	private validOperatorsField: Nullable<Operator>[] = null;
	private allowedValuesField: AttributeAllowedValue[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set validOperators(value: Nullable<Operator>[])
	{
		this.validOperatorsField = value;
	}
	get validOperators(): Nullable<Operator>[]
	{
		return this.validOperatorsField;
	}
	set allowedValues(value: AttributeAllowedValue[])
	{
		this.allowedValuesField = value;
	}
	get allowedValues(): AttributeAllowedValue[]
	{
		return this.allowedValuesField;
	}
	constructor()
	{
		super();
	}
}
enum Operator
{
	EQUALS,
	GT,
	LT,
	GEQ,
	LEQ,
	IN,
	BETWEEN,
	CONTAINS,
	NOTIN,
	NOTEQUALS,
	NOTBETWEEN,
	LIKE,
	IN_VIEWGROUP_HIRARCHY,
	IN_GLOSSARY_HIRARCHY,
	IN_BUSINESS_CONCEPT_HIRARCHY,
	IS_ASSET_STATE,
	IS_NOT_ASSET_STATE,
	IS_UNUSED,
	IN_SPECIFIC_GLOSSARY,
	CMD_IS,
	IS,
	IS_IN_EXTERNAL_SET,
	IS_NOT_IN_EXTERNAL_SET
}
class AttributeAllowedValue extends NObject
{
	private valueField: string = null;
	private displayValueField: string = null;
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	set displayValue(value: string)
	{
		this.displayValueField = value;
	}
	get displayValue(): string
	{
		return this.displayValueField;
	}
	constructor()
	{
		super();
	}
}
class SubQueryAttributeMeta extends AbstractEntity
{
	private propertyMappingField: string = null;
	private propertyProjectionField: string = null;
	private clazzField: string = null;
	private outerQueryOperatorField: Operator = 0;
	private outerQueryOperatorFieldSpecified: boolean = false;
	private joinTableAliasesField: string[] = null;
	private propertyMappingsField: string[] = null;
	set propertyMapping(value: string)
	{
		this.propertyMappingField = value;
	}
	get propertyMapping(): string
	{
		return this.propertyMappingField;
	}
	set propertyProjection(value: string)
	{
		this.propertyProjectionField = value;
	}
	get propertyProjection(): string
	{
		return this.propertyProjectionField;
	}
	set clazz(value: string)
	{
		this.clazzField = value;
	}
	get clazz(): string
	{
		return this.clazzField;
	}
	set outerQueryOperator(value: Operator)
	{
		this.outerQueryOperatorField = value;
	}
	get outerQueryOperator(): Operator
	{
		return this.outerQueryOperatorField;
	}
	set outerQueryOperatorSpecified(value: boolean)
	{
		this.outerQueryOperatorFieldSpecified = value;
	}
	get outerQueryOperatorSpecified(): boolean
	{
		return this.outerQueryOperatorFieldSpecified;
	}
	set joinTableAliases(value: string[])
	{
		this.joinTableAliasesField = value;
	}
	get joinTableAliases(): string[]
	{
		return this.joinTableAliasesField;
	}
	set propertyMappings(value: string[])
	{
		this.propertyMappingsField = value;
	}
	get propertyMappings(): string[]
	{
		return this.propertyMappingsField;
	}
	constructor()
	{
		super();
	}
}
class QueryParameterInstance extends AbstractEntity
{
	private queryParameterDefinitionField: QueryParameterDefinition = null;
	private valueField: string = null;
	set queryParameterDefinition(value: QueryParameterDefinition)
	{
		this.queryParameterDefinitionField = value;
	}
	get queryParameterDefinition(): QueryParameterDefinition
	{
		return this.queryParameterDefinitionField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class QueryParameterDefinition extends AbstractEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	private defaultValueField: string = null;
	private isInUseField: boolean = false;
	private queryParameterDefinitionTypeField: QueryParameterDefinitionType = 0;
	private queryParameterDefinitionTypeFieldSpecified: boolean = false;
	private factTypeField: FactType = null;
	private externalSetInstanceField: ExternalSetInstance = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set defaultValue(value: string)
	{
		this.defaultValueField = value;
	}
	get defaultValue(): string
	{
		return this.defaultValueField;
	}
	set isInUse(value: boolean)
	{
		this.isInUseField = value;
	}
	get isInUse(): boolean
	{
		return this.isInUseField;
	}
	set queryParameterDefinitionType(value: QueryParameterDefinitionType)
	{
		this.queryParameterDefinitionTypeField = value;
	}
	get queryParameterDefinitionType(): QueryParameterDefinitionType
	{
		return this.queryParameterDefinitionTypeField;
	}
	set queryParameterDefinitionTypeSpecified(value: boolean)
	{
		this.queryParameterDefinitionTypeFieldSpecified = value;
	}
	get queryParameterDefinitionTypeSpecified(): boolean
	{
		return this.queryParameterDefinitionTypeFieldSpecified;
	}
	set factType(value: FactType)
	{
		this.factTypeField = value;
	}
	get factType(): FactType
	{
		return this.factTypeField;
	}
	set externalSetInstance(value: ExternalSetInstance)
	{
		this.externalSetInstanceField = value;
	}
	get externalSetInstance(): ExternalSetInstance
	{
		return this.externalSetInstanceField;
	}
	constructor()
	{
		super();
	}
}
enum QueryParameterDefinitionType
{
	NONE,
	FACT_TYPE_PARAM,
	EXTERNAL_SET_PARAM
}
class QueryParameterBag extends AbstractEntity
{
	private queryParameterInstancesField: QueryParameterInstance[] = null;
	private userField: User = null;
	private repoQueryBasketField: RepoQueryBasket = null;
	set queryParameterInstances(value: QueryParameterInstance[])
	{
		this.queryParameterInstancesField = value;
	}
	get queryParameterInstances(): QueryParameterInstance[]
	{
		return this.queryParameterInstancesField;
	}
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set repoQueryBasket(value: RepoQueryBasket)
	{
		this.repoQueryBasketField = value;
	}
	get repoQueryBasket(): RepoQueryBasket
	{
		return this.repoQueryBasketField;
	}
	constructor()
	{
		super();
	}
}
class RepoQueryBasket extends AbstractEntity
{
	private whiteBoardField: Whiteboard = null;
	private viewGroupField: ViewGroup = null;
	private userField: User = null;
	private descriptionField: string = null;
	private nameField: string = null;
	private queryParameterDefinitionsField: QueryParameterDefinition[] = null;
	private createDateField: DateTime = null;
	private createDateFieldSpecified: boolean = false;
	private rootJunctionsField: RepoQueryRootJunction[] = null;
	set whiteBoard(value: Whiteboard)
	{
		this.whiteBoardField = value;
	}
	get whiteBoard(): Whiteboard
	{
		return this.whiteBoardField;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set queryParameterDefinitions(value: QueryParameterDefinition[])
	{
		this.queryParameterDefinitionsField = value;
	}
	get queryParameterDefinitions(): QueryParameterDefinition[]
	{
		return this.queryParameterDefinitionsField;
	}
	set createDate(value: DateTime)
	{
		this.createDateField = value;
	}
	get createDate(): DateTime
	{
		return this.createDateField;
	}
	set createDateSpecified(value: boolean)
	{
		this.createDateFieldSpecified = value;
	}
	get createDateSpecified(): boolean
	{
		return this.createDateFieldSpecified;
	}
	set rootJunctions(value: RepoQueryRootJunction[])
	{
		this.rootJunctionsField = value;
	}
	get rootJunctions(): RepoQueryRootJunction[]
	{
		return this.rootJunctionsField;
	}
	constructor()
	{
		super();
	}
}
class RepoQueryRootJunction extends AbstractEntity
{
	private entityTypeField: EntityType = null;
	private queryJunctionField: RepoQueryJunction = null;
	set entityType(value: EntityType)
	{
		this.entityTypeField = value;
	}
	get entityType(): EntityType
	{
		return this.entityTypeField;
	}
	set queryJunction(value: RepoQueryJunction)
	{
		this.queryJunctionField = value;
	}
	get queryJunction(): RepoQueryJunction
	{
		return this.queryJunctionField;
	}
	constructor()
	{
		super();
	}
}
class RepoQueryJunction extends AbstractEntity
{
	private junctionTypeField: RepoQueryJunctionType = 0;
	private junctionTypeFieldSpecified: boolean = false;
	private queryCriteriaField: RepoQueryCriterion[] = null;
	set junctionType(value: RepoQueryJunctionType)
	{
		this.junctionTypeField = value;
	}
	get junctionType(): RepoQueryJunctionType
	{
		return this.junctionTypeField;
	}
	set junctionTypeSpecified(value: boolean)
	{
		this.junctionTypeFieldSpecified = value;
	}
	get junctionTypeSpecified(): boolean
	{
		return this.junctionTypeFieldSpecified;
	}
	set queryCriteria(value: RepoQueryCriterion[])
	{
		this.queryCriteriaField = value;
	}
	get queryCriteria(): RepoQueryCriterion[]
	{
		return this.queryCriteriaField;
	}
	constructor()
	{
		super();
	}
}
enum RepoQueryJunctionType
{
	CONJUNCTION,
	DISJUNCTION,
	SUBTRACTION
}
class RepoQueryCriterion extends AbstractEntity
{
	private repoQueryJunctionField: RepoQueryJunction = null;
	private repoQueryField: RepoQuery = null;
	set repoQueryJunction(value: RepoQueryJunction)
	{
		this.repoQueryJunctionField = value;
	}
	get repoQueryJunction(): RepoQueryJunction
	{
		return this.repoQueryJunctionField;
	}
	set repoQuery(value: RepoQuery)
	{
		this.repoQueryField = value;
	}
	get repoQuery(): RepoQuery
	{
		return this.repoQueryField;
	}
	constructor()
	{
		super();
	}
}
class RepoQuery extends AbstractEntity
{
	private repoQueryConditionsField: QueryConditions[] = null;
	private isAllRepoQueryConditionsRequiredField: boolean = false;
	private isAllRepoQueryConditionsRequiredFieldSpecified: boolean = false;
	private dqlField: string = null;
	private isLatestVersionOnlyField: boolean = false;
	set repoQueryConditions(value: QueryConditions[])
	{
		this.repoQueryConditionsField = value;
	}
	get repoQueryConditions(): QueryConditions[]
	{
		return this.repoQueryConditionsField;
	}
	set isAllRepoQueryConditionsRequired(value: boolean)
	{
		this.isAllRepoQueryConditionsRequiredField = value;
	}
	get isAllRepoQueryConditionsRequired(): boolean
	{
		return this.isAllRepoQueryConditionsRequiredField;
	}
	set isAllRepoQueryConditionsRequiredSpecified(value: boolean)
	{
		this.isAllRepoQueryConditionsRequiredFieldSpecified = value;
	}
	get isAllRepoQueryConditionsRequiredSpecified(): boolean
	{
		return this.isAllRepoQueryConditionsRequiredFieldSpecified;
	}
	set dql(value: string)
	{
		this.dqlField = value;
	}
	get dql(): string
	{
		return this.dqlField;
	}
	set isLatestVersionOnly(value: boolean)
	{
		this.isLatestVersionOnlyField = value;
	}
	get isLatestVersionOnly(): boolean
	{
		return this.isLatestVersionOnlyField;
	}
	constructor()
	{
		super();
	}
}
class QueryConditions extends AbstractEntity
{
	private attributeField: RepoQueryAttributeMeta = null;
	private operatorField: Operator = 0;
	private operatorFieldSpecified: boolean = false;
	private valueField: string = null;
	private queryParameterDefinitionField: QueryParameterDefinition = null;
	private displayValueField: string = null;
	private repoQueryConditionsField: QueryConditions[] = null;
	private conditionExternalSetField: RepoQueryConditionExternalSet = null;
	set attribute(value: RepoQueryAttributeMeta)
	{
		this.attributeField = value;
	}
	get attribute(): RepoQueryAttributeMeta
	{
		return this.attributeField;
	}
	set operator(value: Operator)
	{
		this.operatorField = value;
	}
	get operator(): Operator
	{
		return this.operatorField;
	}
	set operatorSpecified(value: boolean)
	{
		this.operatorFieldSpecified = value;
	}
	get operatorSpecified(): boolean
	{
		return this.operatorFieldSpecified;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	set queryParameterDefinition(value: QueryParameterDefinition)
	{
		this.queryParameterDefinitionField = value;
	}
	get queryParameterDefinition(): QueryParameterDefinition
	{
		return this.queryParameterDefinitionField;
	}
	set displayValue(value: string)
	{
		this.displayValueField = value;
	}
	get displayValue(): string
	{
		return this.displayValueField;
	}
	set repoQueryConditions(value: QueryConditions[])
	{
		this.repoQueryConditionsField = value;
	}
	get repoQueryConditions(): QueryConditions[]
	{
		return this.repoQueryConditionsField;
	}
	set conditionExternalSet(value: RepoQueryConditionExternalSet)
	{
		this.conditionExternalSetField = value;
	}
	get conditionExternalSet(): RepoQueryConditionExternalSet
	{
		return this.conditionExternalSetField;
	}
	constructor()
	{
		super();
	}
}
class RepoQueryConditionExternalSet extends AbstractEntity
{
	private externalSetInstanceField: ExternalSetInstance = null;
	private findLevelsField: Nullable<ExternalSetFindLevel>[] = null;
	private repoQueryConditionExternalSetArgumentsField: RepoQueryConditionExternalSetArgument[] = null;
	set externalSetInstance(value: ExternalSetInstance)
	{
		this.externalSetInstanceField = value;
	}
	get externalSetInstance(): ExternalSetInstance
	{
		return this.externalSetInstanceField;
	}
	set findLevels(value: Nullable<ExternalSetFindLevel>[])
	{
		this.findLevelsField = value;
	}
	get findLevels(): Nullable<ExternalSetFindLevel>[]
	{
		return this.findLevelsField;
	}
	set repoQueryConditionExternalSetArguments(value: RepoQueryConditionExternalSetArgument[])
	{
		this.repoQueryConditionExternalSetArgumentsField = value;
	}
	get repoQueryConditionExternalSetArguments(): RepoQueryConditionExternalSetArgument[]
	{
		return this.repoQueryConditionExternalSetArgumentsField;
	}
	constructor()
	{
		super();
	}
}
enum ExternalSetFindLevel
{
	NONE,
	IMMEDIATE_CHILDREN,
	ALL_CHILDREN,
	INCLUDE_PARENTS,
	INCLUDE_CURRENT_NODE
}
class RepoQueryConditionExternalSetArgument extends AbstractEntity
{
	private nameField: string = null;
	private valueField: string = null;
	private queryParameterDefinitionField: QueryParameterDefinition = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	set queryParameterDefinition(value: QueryParameterDefinition)
	{
		this.queryParameterDefinitionField = value;
	}
	get queryParameterDefinition(): QueryParameterDefinition
	{
		return this.queryParameterDefinitionField;
	}
	constructor()
	{
		super();
	}
}
class BatchJobDataImport extends AbstractEntity
{
	private jobExecutionIdField: number = 0;
	private jobExecutionIdFieldSpecified: boolean = false;
	private glossaryIdField: number = 0;
	private glossaryIdFieldSpecified: boolean = false;
	private jobNameField: string = null;
	private executingUserField: User = null;
	private importedDateField: DateTime = null;
	private importedDateFieldSpecified: boolean = false;
	private importedFileNameField: string = null;
	private importedFileFormatField: string = null;
	private isDataAnalyzedField: boolean = false;
	private isDataAnalyzedFieldSpecified: boolean = false;
	private isDataImportStartedField: boolean = false;
	private isDataImportStartedFieldSpecified: boolean = false;
	private importedFactTypeIdsField: Nullable<number>[] = null;
	private failureMessagesField: string[] = null;
	set jobExecutionId(value: number)
	{
		this.jobExecutionIdField = value;
	}
	get jobExecutionId(): number
	{
		return this.jobExecutionIdField;
	}
	set jobExecutionIdSpecified(value: boolean)
	{
		this.jobExecutionIdFieldSpecified = value;
	}
	get jobExecutionIdSpecified(): boolean
	{
		return this.jobExecutionIdFieldSpecified;
	}
	set glossaryId(value: number)
	{
		this.glossaryIdField = value;
	}
	get glossaryId(): number
	{
		return this.glossaryIdField;
	}
	set glossaryIdSpecified(value: boolean)
	{
		this.glossaryIdFieldSpecified = value;
	}
	get glossaryIdSpecified(): boolean
	{
		return this.glossaryIdFieldSpecified;
	}
	set jobName(value: string)
	{
		this.jobNameField = value;
	}
	get jobName(): string
	{
		return this.jobNameField;
	}
	set executingUser(value: User)
	{
		this.executingUserField = value;
	}
	get executingUser(): User
	{
		return this.executingUserField;
	}
	set importedDate(value: DateTime)
	{
		this.importedDateField = value;
	}
	get importedDate(): DateTime
	{
		return this.importedDateField;
	}
	set importedDateSpecified(value: boolean)
	{
		this.importedDateFieldSpecified = value;
	}
	get importedDateSpecified(): boolean
	{
		return this.importedDateFieldSpecified;
	}
	set importedFileName(value: string)
	{
		this.importedFileNameField = value;
	}
	get importedFileName(): string
	{
		return this.importedFileNameField;
	}
	set importedFileFormat(value: string)
	{
		this.importedFileFormatField = value;
	}
	get importedFileFormat(): string
	{
		return this.importedFileFormatField;
	}
	set isDataAnalyzed(value: boolean)
	{
		this.isDataAnalyzedField = value;
	}
	get isDataAnalyzed(): boolean
	{
		return this.isDataAnalyzedField;
	}
	set isDataAnalyzedSpecified(value: boolean)
	{
		this.isDataAnalyzedFieldSpecified = value;
	}
	get isDataAnalyzedSpecified(): boolean
	{
		return this.isDataAnalyzedFieldSpecified;
	}
	set isDataImportStarted(value: boolean)
	{
		this.isDataImportStartedField = value;
	}
	get isDataImportStarted(): boolean
	{
		return this.isDataImportStartedField;
	}
	set isDataImportStartedSpecified(value: boolean)
	{
		this.isDataImportStartedFieldSpecified = value;
	}
	get isDataImportStartedSpecified(): boolean
	{
		return this.isDataImportStartedFieldSpecified;
	}
	set importedFactTypeIds(value: Nullable<number>[])
	{
		this.importedFactTypeIdsField = value;
	}
	get importedFactTypeIds(): Nullable<number>[]
	{
		return this.importedFactTypeIdsField;
	}
	set failureMessages(value: string[])
	{
		this.failureMessagesField = value;
	}
	get failureMessages(): string[]
	{
		return this.failureMessagesField;
	}
	constructor()
	{
		super();
	}
}
class ValidationViolationRuleFlow extends AbstractEntity
{
	private ruleFlowIdField: number = 0;
	private ruleFlowIdFieldSpecified: boolean = false;
	private processElementIdField: string = null;
	private sequenceFlowIdField: string = null;
	private processIdField: string = null;
	private violationMessageField: string = null;
	private validationTypeField: ValidationType = 0;
	private validationTypeFieldSpecified: boolean = false;
	set ruleFlowId(value: number)
	{
		this.ruleFlowIdField = value;
	}
	get ruleFlowId(): number
	{
		return this.ruleFlowIdField;
	}
	set ruleFlowIdSpecified(value: boolean)
	{
		this.ruleFlowIdFieldSpecified = value;
	}
	get ruleFlowIdSpecified(): boolean
	{
		return this.ruleFlowIdFieldSpecified;
	}
	set processElementId(value: string)
	{
		this.processElementIdField = value;
	}
	get processElementId(): string
	{
		return this.processElementIdField;
	}
	set sequenceFlowId(value: string)
	{
		this.sequenceFlowIdField = value;
	}
	get sequenceFlowId(): string
	{
		return this.sequenceFlowIdField;
	}
	set processId(value: string)
	{
		this.processIdField = value;
	}
	get processId(): string
	{
		return this.processIdField;
	}
	set violationMessage(value: string)
	{
		this.violationMessageField = value;
	}
	get violationMessage(): string
	{
		return this.violationMessageField;
	}
	set validationType(value: ValidationType)
	{
		this.validationTypeField = value;
	}
	get validationType(): ValidationType
	{
		return this.validationTypeField;
	}
	set validationTypeSpecified(value: boolean)
	{
		this.validationTypeFieldSpecified = value;
	}
	get validationTypeSpecified(): boolean
	{
		return this.validationTypeFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
enum ValidationType
{
	WARNING,
	ERROR
}
class ImportExportFileType extends AbstractEntity
{
	private fileTypeField: string = null;
	set fileType(value: string)
	{
		this.fileTypeField = value;
	}
	get fileType(): string
	{
		return this.fileTypeField;
	}
	constructor()
	{
		super();
	}
}
class FailedElementAudit extends AbstractEntity
{
	private fileField: string = null;
	private errorDescriptionField: string = null;
	private exceptionField: string = null;
	private idTypeEntityField: IdTypeEntity = null;
	set file(value: string)
	{
		this.fileField = value;
	}
	get file(): string
	{
		return this.fileField;
	}
	set errorDescription(value: string)
	{
		this.errorDescriptionField = value;
	}
	get errorDescription(): string
	{
		return this.errorDescriptionField;
	}
	set exception(value: string)
	{
		this.exceptionField = value;
	}
	get exception(): string
	{
		return this.exceptionField;
	}
	set idTypeEntity(value: IdTypeEntity)
	{
		this.idTypeEntityField = value;
	}
	get idTypeEntity(): IdTypeEntity
	{
		return this.idTypeEntityField;
	}
	constructor()
	{
		super();
	}
}
class IdTypeEntity extends NObject
{
	private entityIdField: number = 0;
	private entityIdFieldSpecified: boolean = false;
	private entityTypeField: EntityType = null;
	private nameField: string = null;
	set entityId(value: number)
	{
		this.entityIdField = value;
	}
	get entityId(): number
	{
		return this.entityIdField;
	}
	set entityIdSpecified(value: boolean)
	{
		this.entityIdFieldSpecified = value;
	}
	get entityIdSpecified(): boolean
	{
		return this.entityIdFieldSpecified;
	}
	set entityType(value: EntityType)
	{
		this.entityTypeField = value;
	}
	get entityType(): EntityType
	{
		return this.entityTypeField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
class ImportExportAudit extends AbstractEntity
{
	private userField: User = null;
	private dateField: DateTime = null;
	private dateFieldSpecified: boolean = false;
	private auditTypeField: AuditType = 0;
	private auditTypeFieldSpecified: boolean = false;
	private impExpAuditStateField: ImpExpAuditState = 0;
	private impExpAuditStateFieldSpecified: boolean = false;
	private successfulField: IdTypeEntity[] = null;
	private failedElementAuditsField: FailedElementAudit[] = null;
	private expectedNotImportedField: string[] = null;
	private importedNotExpectedField: IdTypeEntity[] = null;
	private importExportFileTypeField: ImportExportFileType = null;
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set date(value: DateTime)
	{
		this.dateField = value;
	}
	get date(): DateTime
	{
		return this.dateField;
	}
	set dateSpecified(value: boolean)
	{
		this.dateFieldSpecified = value;
	}
	get dateSpecified(): boolean
	{
		return this.dateFieldSpecified;
	}
	set auditType(value: AuditType)
	{
		this.auditTypeField = value;
	}
	get auditType(): AuditType
	{
		return this.auditTypeField;
	}
	set auditTypeSpecified(value: boolean)
	{
		this.auditTypeFieldSpecified = value;
	}
	get auditTypeSpecified(): boolean
	{
		return this.auditTypeFieldSpecified;
	}
	set impExpAuditState(value: ImpExpAuditState)
	{
		this.impExpAuditStateField = value;
	}
	get impExpAuditState(): ImpExpAuditState
	{
		return this.impExpAuditStateField;
	}
	set impExpAuditStateSpecified(value: boolean)
	{
		this.impExpAuditStateFieldSpecified = value;
	}
	get impExpAuditStateSpecified(): boolean
	{
		return this.impExpAuditStateFieldSpecified;
	}
	set successful(value: IdTypeEntity[])
	{
		this.successfulField = value;
	}
	get successful(): IdTypeEntity[]
	{
		return this.successfulField;
	}
	set failedElementAudits(value: FailedElementAudit[])
	{
		this.failedElementAuditsField = value;
	}
	get failedElementAudits(): FailedElementAudit[]
	{
		return this.failedElementAuditsField;
	}
	set expectedNotImported(value: string[])
	{
		this.expectedNotImportedField = value;
	}
	get expectedNotImported(): string[]
	{
		return this.expectedNotImportedField;
	}
	set importedNotExpected(value: IdTypeEntity[])
	{
		this.importedNotExpectedField = value;
	}
	get importedNotExpected(): IdTypeEntity[]
	{
		return this.importedNotExpectedField;
	}
	set importExportFileType(value: ImportExportFileType)
	{
		this.importExportFileTypeField = value;
	}
	get importExportFileType(): ImportExportFileType
	{
		return this.importExportFileTypeField;
	}
	constructor()
	{
		super();
	}
}
enum AuditType
{
	IMPORT,
	EXPORT
}
enum ImpExpAuditState
{
	PASSED,
	FAILED
}
class ExportedFile extends AbstractEntity
{
	private contentField: number[] = null;
	set content(value: number[])
	{
		this.contentField = value;
	}
	get content(): number[]
	{
		return this.contentField;
	}
	constructor()
	{
		super();
	}
}
class RevisionExportHistoryInfoDto extends AbstractEntity
{
	private exportDateField: DateTime = null;
	private exportDateFieldSpecified: boolean = false;
	private exportStatusField: ExportStatus = 0;
	private exportStatusFieldSpecified: boolean = false;
	private exportStatusDateField: DateTime = null;
	private exportStatusDateFieldSpecified: boolean = false;
	private revisionIdField: number = 0;
	private revisionIdFieldSpecified: boolean = false;
	private revisionTagNameField: string = null;
	private incrementedFromRevisionTagNameField: string = null;
	private exportNameField: string = null;
	private environmentIdField: number = 0;
	private environmentIdFieldSpecified: boolean = false;
	private environmentNameField: string = null;
	private environmentTypeField: EnvironmentType = null;
	private formatDefinitionField: ExportFormatDefinition = null;
	private exportModelNameField: string = null;
	private missingExportModelNameReasonField: string = null;
	private exportModelVersionField: string = null;
	private missingExportModelVersionReasonField: string = null;
	private repositoryDefinitionField: ExportRepositoryDefinition = null;
	private exporterNameField: string = null;
	private projectNameField: string = null;
	private fullExportFileField: ExportedFile = null;
	private incrementalExportFileField: ExportedFile = null;
	private isIncrementalField: boolean = false;
	private uNKNOWN_MSGField: string = null;
	private uNKNOWN_REASON_MSGField: string = null;
	set exportDate(value: DateTime)
	{
		this.exportDateField = value;
	}
	get exportDate(): DateTime
	{
		return this.exportDateField;
	}
	set exportDateSpecified(value: boolean)
	{
		this.exportDateFieldSpecified = value;
	}
	get exportDateSpecified(): boolean
	{
		return this.exportDateFieldSpecified;
	}
	set exportStatus(value: ExportStatus)
	{
		this.exportStatusField = value;
	}
	get exportStatus(): ExportStatus
	{
		return this.exportStatusField;
	}
	set exportStatusSpecified(value: boolean)
	{
		this.exportStatusFieldSpecified = value;
	}
	get exportStatusSpecified(): boolean
	{
		return this.exportStatusFieldSpecified;
	}
	set exportStatusDate(value: DateTime)
	{
		this.exportStatusDateField = value;
	}
	get exportStatusDate(): DateTime
	{
		return this.exportStatusDateField;
	}
	set exportStatusDateSpecified(value: boolean)
	{
		this.exportStatusDateFieldSpecified = value;
	}
	get exportStatusDateSpecified(): boolean
	{
		return this.exportStatusDateFieldSpecified;
	}
	set revisionId(value: number)
	{
		this.revisionIdField = value;
	}
	get revisionId(): number
	{
		return this.revisionIdField;
	}
	set revisionIdSpecified(value: boolean)
	{
		this.revisionIdFieldSpecified = value;
	}
	get revisionIdSpecified(): boolean
	{
		return this.revisionIdFieldSpecified;
	}
	set revisionTagName(value: string)
	{
		this.revisionTagNameField = value;
	}
	get revisionTagName(): string
	{
		return this.revisionTagNameField;
	}
	set incrementedFromRevisionTagName(value: string)
	{
		this.incrementedFromRevisionTagNameField = value;
	}
	get incrementedFromRevisionTagName(): string
	{
		return this.incrementedFromRevisionTagNameField;
	}
	set exportName(value: string)
	{
		this.exportNameField = value;
	}
	get exportName(): string
	{
		return this.exportNameField;
	}
	set environmentId(value: number)
	{
		this.environmentIdField = value;
	}
	get environmentId(): number
	{
		return this.environmentIdField;
	}
	set environmentIdSpecified(value: boolean)
	{
		this.environmentIdFieldSpecified = value;
	}
	get environmentIdSpecified(): boolean
	{
		return this.environmentIdFieldSpecified;
	}
	set environmentName(value: string)
	{
		this.environmentNameField = value;
	}
	get environmentName(): string
	{
		return this.environmentNameField;
	}
	set environmentType(value: EnvironmentType)
	{
		this.environmentTypeField = value;
	}
	get environmentType(): EnvironmentType
	{
		return this.environmentTypeField;
	}
	set formatDefinition(value: ExportFormatDefinition)
	{
		this.formatDefinitionField = value;
	}
	get formatDefinition(): ExportFormatDefinition
	{
		return this.formatDefinitionField;
	}
	set exportModelName(value: string)
	{
		this.exportModelNameField = value;
	}
	get exportModelName(): string
	{
		return this.exportModelNameField;
	}
	set missingExportModelNameReason(value: string)
	{
		this.missingExportModelNameReasonField = value;
	}
	get missingExportModelNameReason(): string
	{
		return this.missingExportModelNameReasonField;
	}
	set exportModelVersion(value: string)
	{
		this.exportModelVersionField = value;
	}
	get exportModelVersion(): string
	{
		return this.exportModelVersionField;
	}
	set missingExportModelVersionReason(value: string)
	{
		this.missingExportModelVersionReasonField = value;
	}
	get missingExportModelVersionReason(): string
	{
		return this.missingExportModelVersionReasonField;
	}
	set repositoryDefinition(value: ExportRepositoryDefinition)
	{
		this.repositoryDefinitionField = value;
	}
	get repositoryDefinition(): ExportRepositoryDefinition
	{
		return this.repositoryDefinitionField;
	}
	set exporterName(value: string)
	{
		this.exporterNameField = value;
	}
	get exporterName(): string
	{
		return this.exporterNameField;
	}
	set projectName(value: string)
	{
		this.projectNameField = value;
	}
	get projectName(): string
	{
		return this.projectNameField;
	}
	set fullExportFile(value: ExportedFile)
	{
		this.fullExportFileField = value;
	}
	get fullExportFile(): ExportedFile
	{
		return this.fullExportFileField;
	}
	set incrementalExportFile(value: ExportedFile)
	{
		this.incrementalExportFileField = value;
	}
	get incrementalExportFile(): ExportedFile
	{
		return this.incrementalExportFileField;
	}
	set isIncremental(value: boolean)
	{
		this.isIncrementalField = value;
	}
	get isIncremental(): boolean
	{
		return this.isIncrementalField;
	}
	set UNKNOWN_MSG(value: string)
	{
		this.uNKNOWN_MSGField = value;
	}
	get UNKNOWN_MSG(): string
	{
		return this.uNKNOWN_MSGField;
	}
	set UNKNOWN_REASON_MSG(value: string)
	{
		this.uNKNOWN_REASON_MSGField = value;
	}
	get UNKNOWN_REASON_MSG(): string
	{
		return this.uNKNOWN_REASON_MSGField;
	}
	constructor()
	{
		super();
	}
}
enum ExportStatus
{
	EXPORTED,
	DEPLOYED,
	UNDEPLOYED,
	REQUESTED,
	REJECTED,
	FAILED
}
class ReleaseHistoryRecord extends AbstractEntity
{
	private releaseField: Release = null;
	private decisionViewField: DecisionView = null;
	private ruleFlowField: RuleFlow = null;
	private deploymentDescriptorField: DeploymentDescriptor = null;
	private viewGroupField: ViewGroup = null;
	private typeField: RecordType = 0;
	private typeFieldSpecified: boolean = false;
	private changeDateField: DateTime = null;
	private changeDateFieldSpecified: boolean = false;
	private originTaskField: BcdTask = null;
	private userField: User = null;
	private deletedRecordField: deletedReleaseHistoryRecord = null;
	set release(value: Release)
	{
		this.releaseField = value;
	}
	get release(): Release
	{
		return this.releaseField;
	}
	set decisionView(value: DecisionView)
	{
		this.decisionViewField = value;
	}
	get decisionView(): DecisionView
	{
		return this.decisionViewField;
	}
	set ruleFlow(value: RuleFlow)
	{
		this.ruleFlowField = value;
	}
	get ruleFlow(): RuleFlow
	{
		return this.ruleFlowField;
	}
	set deploymentDescriptor(value: DeploymentDescriptor)
	{
		this.deploymentDescriptorField = value;
	}
	get deploymentDescriptor(): DeploymentDescriptor
	{
		return this.deploymentDescriptorField;
	}
	set viewGroup(value: ViewGroup)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): ViewGroup
	{
		return this.viewGroupField;
	}
	set type(value: RecordType)
	{
		this.typeField = value;
	}
	get type(): RecordType
	{
		return this.typeField;
	}
	set typeSpecified(value: boolean)
	{
		this.typeFieldSpecified = value;
	}
	get typeSpecified(): boolean
	{
		return this.typeFieldSpecified;
	}
	set changeDate(value: DateTime)
	{
		this.changeDateField = value;
	}
	get changeDate(): DateTime
	{
		return this.changeDateField;
	}
	set changeDateSpecified(value: boolean)
	{
		this.changeDateFieldSpecified = value;
	}
	get changeDateSpecified(): boolean
	{
		return this.changeDateFieldSpecified;
	}
	set originTask(value: BcdTask)
	{
		this.originTaskField = value;
	}
	get originTask(): BcdTask
	{
		return this.originTaskField;
	}
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set deletedRecord(value: deletedReleaseHistoryRecord)
	{
		this.deletedRecordField = value;
	}
	get deletedRecord(): deletedReleaseHistoryRecord
	{
		return this.deletedRecordField;
	}
	constructor()
	{
		super();
	}
}
enum RecordType
{
	DV_ADDED,
	DV_REMOVED,
	CREATED,
	RETIRED,
	MOVED_VG,
	FROZEN,
	UNFROZEN,
	RESTORED,
	FLOW_ADDED,
	FLOW_REMOVED,
	DEMOTE_TAG_TO_SNAPSHOT,
	PROMOTE_SNAPSHOT_TO_TAG,
	SYNC_TAG_WITH_RELEASE,
	DD_CREATED,
	DD_REMOVED,
	DD_MODIFIED
}
class deletedReleaseHistoryRecord extends NObject
{
	private assetIdField: number = 0;
	private assetIdFieldSpecified: boolean = false;
	private assetNameField: string = null;
	private assetVersionField: string = null;
	private entityTypeField: string = null;
	set assetId(value: number)
	{
		this.assetIdField = value;
	}
	get assetId(): number
	{
		return this.assetIdField;
	}
	set assetIdSpecified(value: boolean)
	{
		this.assetIdFieldSpecified = value;
	}
	get assetIdSpecified(): boolean
	{
		return this.assetIdFieldSpecified;
	}
	set assetName(value: string)
	{
		this.assetNameField = value;
	}
	get assetName(): string
	{
		return this.assetNameField;
	}
	set assetVersion(value: string)
	{
		this.assetVersionField = value;
	}
	get assetVersion(): string
	{
		return this.assetVersionField;
	}
	set entityType(value: string)
	{
		this.entityTypeField = value;
	}
	get entityType(): string
	{
		return this.entityTypeField;
	}
	constructor()
	{
		super();
	}
}
class ImportedFactType extends AbstractEntity
{
	private jobExecutionIdField: number = 0;
	private jobExecutionIdFieldSpecified: boolean = false;
	private businessFriendlyNameField: string = null;
	private commonDataHashField: string = null;
	private versionedDataHashField: string = null;
	private factTypeStatusField: ImportFactTypeStatus = 0;
	private factTypeStatusFieldSpecified: boolean = false;
	private importFactTypeDtoField: string = null;
	set jobExecutionId(value: number)
	{
		this.jobExecutionIdField = value;
	}
	get jobExecutionId(): number
	{
		return this.jobExecutionIdField;
	}
	set jobExecutionIdSpecified(value: boolean)
	{
		this.jobExecutionIdFieldSpecified = value;
	}
	get jobExecutionIdSpecified(): boolean
	{
		return this.jobExecutionIdFieldSpecified;
	}
	set businessFriendlyName(value: string)
	{
		this.businessFriendlyNameField = value;
	}
	get businessFriendlyName(): string
	{
		return this.businessFriendlyNameField;
	}
	set commonDataHash(value: string)
	{
		this.commonDataHashField = value;
	}
	get commonDataHash(): string
	{
		return this.commonDataHashField;
	}
	set versionedDataHash(value: string)
	{
		this.versionedDataHashField = value;
	}
	get versionedDataHash(): string
	{
		return this.versionedDataHashField;
	}
	set factTypeStatus(value: ImportFactTypeStatus)
	{
		this.factTypeStatusField = value;
	}
	get factTypeStatus(): ImportFactTypeStatus
	{
		return this.factTypeStatusField;
	}
	set factTypeStatusSpecified(value: boolean)
	{
		this.factTypeStatusFieldSpecified = value;
	}
	get factTypeStatusSpecified(): boolean
	{
		return this.factTypeStatusFieldSpecified;
	}
	set importFactTypeDto(value: string)
	{
		this.importFactTypeDtoField = value;
	}
	get importFactTypeDto(): string
	{
		return this.importFactTypeDtoField;
	}
	constructor()
	{
		super();
	}
}
enum ImportFactTypeStatus
{
	UNCHANGED,
	NEW_VERSION,
	NEW_FACT_TYPE,
	UPDATED_FACT_TYPE,
	ERROR
}
class ExecutionEnvironmentProperty extends AbstractEntity
{
	private executionEnginePropertyField: ExecutionEngineProperty = null;
	private valueField: string = null;
	set executionEngineProperty(value: ExecutionEngineProperty)
	{
		this.executionEnginePropertyField = value;
	}
	get executionEngineProperty(): ExecutionEngineProperty
	{
		return this.executionEnginePropertyField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class ExecutionEngineProperty extends AbstractEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	constructor()
	{
		super();
	}
}
class ExecutionEngine extends AbstractEntity
{
	private engineTypeField: string = null;
	private nameField: string = null;
	private exEnginePropertiesField: ExecutionEngineProperty[] = null;
	set engineType(value: string)
	{
		this.engineTypeField = value;
	}
	get engineType(): string
	{
		return this.engineTypeField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set exEngineProperties(value: ExecutionEngineProperty[])
	{
		this.exEnginePropertiesField = value;
	}
	get exEngineProperties(): ExecutionEngineProperty[]
	{
		return this.exEnginePropertiesField;
	}
	constructor()
	{
		super();
	}
}
class ExecutionEnvironment extends AbstractEntity
{
	private nameField: string = null;
	private descriptionField: string = null;
	private executionEngineField: ExecutionEngine = null;
	private exEnvironmentPropertiesField: ExecutionEnvironmentProperty[] = null;
	private isEnabledField: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set executionEngine(value: ExecutionEngine)
	{
		this.executionEngineField = value;
	}
	get executionEngine(): ExecutionEngine
	{
		return this.executionEngineField;
	}
	set exEnvironmentProperties(value: ExecutionEnvironmentProperty[])
	{
		this.exEnvironmentPropertiesField = value;
	}
	get exEnvironmentProperties(): ExecutionEnvironmentProperty[]
	{
		return this.exEnvironmentPropertiesField;
	}
	set isEnabled(value: boolean)
	{
		this.isEnabledField = value;
	}
	get isEnabled(): boolean
	{
		return this.isEnabledField;
	}
	constructor()
	{
		super();
	}
}
class ValidationDefinition extends AbstractEntity
{
	private validationMessageCodeField: string = null;
	private validationTypeField: ValidationType = 0;
	private validationTypeFieldSpecified: boolean = false;
	private validationLevelField: ValidationLevel = 0;
	private validationLevelFieldSpecified: boolean = false;
	private validationPrincipleCodeField: ValidationPrincipleCode = 0;
	private validationPrincipleCodeFieldSpecified: boolean = false;
	private principleDescriptionField: string = null;
	private validationMessageField: string = null;
	set validationMessageCode(value: string)
	{
		this.validationMessageCodeField = value;
	}
	get validationMessageCode(): string
	{
		return this.validationMessageCodeField;
	}
	set validationType(value: ValidationType)
	{
		this.validationTypeField = value;
	}
	get validationType(): ValidationType
	{
		return this.validationTypeField;
	}
	set validationTypeSpecified(value: boolean)
	{
		this.validationTypeFieldSpecified = value;
	}
	get validationTypeSpecified(): boolean
	{
		return this.validationTypeFieldSpecified;
	}
	set validationLevel(value: ValidationLevel)
	{
		this.validationLevelField = value;
	}
	get validationLevel(): ValidationLevel
	{
		return this.validationLevelField;
	}
	set validationLevelSpecified(value: boolean)
	{
		this.validationLevelFieldSpecified = value;
	}
	get validationLevelSpecified(): boolean
	{
		return this.validationLevelFieldSpecified;
	}
	set validationPrincipleCode(value: ValidationPrincipleCode)
	{
		this.validationPrincipleCodeField = value;
	}
	get validationPrincipleCode(): ValidationPrincipleCode
	{
		return this.validationPrincipleCodeField;
	}
	set validationPrincipleCodeSpecified(value: boolean)
	{
		this.validationPrincipleCodeFieldSpecified = value;
	}
	get validationPrincipleCodeSpecified(): boolean
	{
		return this.validationPrincipleCodeFieldSpecified;
	}
	set principleDescription(value: string)
	{
		this.principleDescriptionField = value;
	}
	get principleDescription(): string
	{
		return this.principleDescriptionField;
	}
	set validationMessage(value: string)
	{
		this.validationMessageField = value;
	}
	get validationMessage(): string
	{
		return this.validationMessageField;
	}
	constructor()
	{
		super();
	}
}
enum ValidationLevel
{
	DECISION_VIEW,
	RULE_FAMILY_VIEW,
	RULE_ROW
}
enum ValidationPrincipleCode
{
	P,
	P1,
	P2,
	P3,
	P4,
	P5,
	P6,
	P7,
	P8,
	P9,
	P10,
	P11,
	P12,
	P13,
	P14
}
class ValidationInstance extends AbstractEntity
{
	private entityTypeField: EntityType = null;
	private validationDefinitionField: ValidationDefinition = null;
	private violationMessageField: string = null;
	private isSuppressedField: boolean = false;
	private rowIdsField: Nullable<number>[] = null;
	private conditionIdsField: Nullable<number>[] = null;
	private decisionViewIdField: number = 0;
	private ruleFamilyViewIdField: number = 0;
	private conditionCellIdField: number = 0;
	private conclusionCellIdField: number = 0;
	private categoryIdField: number = 0;
	private categoryIdFieldSpecified: boolean = false;
	private entityIdField: number = 0;
	private entityIdFieldSpecified: boolean = false;
	set entityType(value: EntityType)
	{
		this.entityTypeField = value;
	}
	get entityType(): EntityType
	{
		return this.entityTypeField;
	}
	set validationDefinition(value: ValidationDefinition)
	{
		this.validationDefinitionField = value;
	}
	get validationDefinition(): ValidationDefinition
	{
		return this.validationDefinitionField;
	}
	set violationMessage(value: string)
	{
		this.violationMessageField = value;
	}
	get violationMessage(): string
	{
		return this.violationMessageField;
	}
	set isSuppressed(value: boolean)
	{
		this.isSuppressedField = value;
	}
	get isSuppressed(): boolean
	{
		return this.isSuppressedField;
	}
	set rowIds(value: Nullable<number>[])
	{
		this.rowIdsField = value;
	}
	get rowIds(): Nullable<number>[]
	{
		return this.rowIdsField;
	}
	set conditionIds(value: Nullable<number>[])
	{
		this.conditionIdsField = value;
	}
	get conditionIds(): Nullable<number>[]
	{
		return this.conditionIdsField;
	}
	set decisionViewId(value: number)
	{
		this.decisionViewIdField = value;
	}
	get decisionViewId(): number
	{
		return this.decisionViewIdField;
	}
	set ruleFamilyViewId(value: number)
	{
		this.ruleFamilyViewIdField = value;
	}
	get ruleFamilyViewId(): number
	{
		return this.ruleFamilyViewIdField;
	}
	set conditionCellId(value: number)
	{
		this.conditionCellIdField = value;
	}
	get conditionCellId(): number
	{
		return this.conditionCellIdField;
	}
	set conclusionCellId(value: number)
	{
		this.conclusionCellIdField = value;
	}
	get conclusionCellId(): number
	{
		return this.conclusionCellIdField;
	}
	set categoryId(value: number)
	{
		this.categoryIdField = value;
	}
	get categoryId(): number
	{
		return this.categoryIdField;
	}
	set categoryIdSpecified(value: boolean)
	{
		this.categoryIdFieldSpecified = value;
	}
	get categoryIdSpecified(): boolean
	{
		return this.categoryIdFieldSpecified;
	}
	set entityId(value: number)
	{
		this.entityIdField = value;
	}
	get entityId(): number
	{
		return this.entityIdField;
	}
	set entityIdSpecified(value: boolean)
	{
		this.entityIdFieldSpecified = value;
	}
	get entityIdSpecified(): boolean
	{
		return this.entityIdFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class NotificationUser extends AbstractEntity
{
	private transitionField: Transition = null;
	private usersField: User[] = null;
	set transition(value: Transition)
	{
		this.transitionField = value;
	}
	get transition(): Transition
	{
		return this.transitionField;
	}
	set users(value: User[])
	{
		this.usersField = value;
	}
	get users(): User[]
	{
		return this.usersField;
	}
	constructor()
	{
		super();
	}
}
class Transition extends AbstractEntity
{
	private stateField: State = null;
	private nextStateField: State = null;
	private actionNameField: string = null;
	private resultAssetStateField: AssetState = 0;
	private resultAssetStateFieldSpecified: boolean = false;
	private nextTaskDefaultTitleField: string = null;
	private nextTaskDefaultFreeTextField: string = null;
	set state(value: State)
	{
		this.stateField = value;
	}
	get state(): State
	{
		return this.stateField;
	}
	set nextState(value: State)
	{
		this.nextStateField = value;
	}
	get nextState(): State
	{
		return this.nextStateField;
	}
	set actionName(value: string)
	{
		this.actionNameField = value;
	}
	get actionName(): string
	{
		return this.actionNameField;
	}
	set resultAssetState(value: AssetState)
	{
		this.resultAssetStateField = value;
	}
	get resultAssetState(): AssetState
	{
		return this.resultAssetStateField;
	}
	set resultAssetStateSpecified(value: boolean)
	{
		this.resultAssetStateFieldSpecified = value;
	}
	get resultAssetStateSpecified(): boolean
	{
		return this.resultAssetStateFieldSpecified;
	}
	set nextTaskDefaultTitle(value: string)
	{
		this.nextTaskDefaultTitleField = value;
	}
	get nextTaskDefaultTitle(): string
	{
		return this.nextTaskDefaultTitleField;
	}
	set nextTaskDefaultFreeText(value: string)
	{
		this.nextTaskDefaultFreeTextField = value;
	}
	get nextTaskDefaultFreeText(): string
	{
		return this.nextTaskDefaultFreeTextField;
	}
	constructor()
	{
		super();
	}
}
class StateUser extends AbstractEntity
{
	private stateRoleField: StateRole = null;
	private userField: User = null;
	private assignedToGroupField: boolean = false;
	set stateRole(value: StateRole)
	{
		this.stateRoleField = value;
	}
	get stateRole(): StateRole
	{
		return this.stateRoleField;
	}
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set assignedToGroup(value: boolean)
	{
		this.assignedToGroupField = value;
	}
	get assignedToGroup(): boolean
	{
		return this.assignedToGroupField;
	}
	constructor()
	{
		super();
	}
}
class StateRole extends AbstractEntity
{
	private stateField: State = null;
	private roleField: Role = null;
	set state(value: State)
	{
		this.stateField = value;
	}
	get state(): State
	{
		return this.stateField;
	}
	set role(value: Role)
	{
		this.roleField = value;
	}
	get role(): Role
	{
		return this.roleField;
	}
	constructor()
	{
		super();
	}
}
class IdName extends NObject
{
	private idField: number = 0;
	private idFieldSpecified: boolean = false;
	private nameField: string = null;
	set id(value: number)
	{
		this.idField = value;
	}
	get id(): number
	{
		return this.idField;
	}
	set idSpecified(value: boolean)
	{
		this.idFieldSpecified = value;
	}
	get idSpecified(): boolean
	{
		return this.idFieldSpecified;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
class Waypoint extends NObject
{
	private xField: number = 0;
	private yField: number = 0;
	set x(value: number)
	{
		this.xField = value;
	}
	get x(): number
	{
		return this.xField;
	}
	set y(value: number)
	{
		this.yField = value;
	}
	get y(): number
	{
		return this.yField;
	}
	constructor()
	{
		super();
	}
}
class BPMNEdge extends NObject
{
	private waypointField: Waypoint[] = null;
	private idField: string = null;
	private bpmnElementField: string = null;
	private fromPortField: string = null;
	private toPortField: string = null;
	private xConditionOffsetField: number = 0;
	private xConditionOffsetFieldSpecified: boolean = false;
	private yConditionOffsetField: number = 0;
	private yConditionOffsetFieldSpecified: boolean = false;
	set waypoint(value: Waypoint[])
	{
		this.waypointField = value;
	}
	get waypoint(): Waypoint[]
	{
		return this.waypointField;
	}
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set bpmnElement(value: string)
	{
		this.bpmnElementField = value;
	}
	get bpmnElement(): string
	{
		return this.bpmnElementField;
	}
	set fromPort(value: string)
	{
		this.fromPortField = value;
	}
	get fromPort(): string
	{
		return this.fromPortField;
	}
	set toPort(value: string)
	{
		this.toPortField = value;
	}
	get toPort(): string
	{
		return this.toPortField;
	}
	set xConditionOffset(value: number)
	{
		this.xConditionOffsetField = value;
	}
	get xConditionOffset(): number
	{
		return this.xConditionOffsetField;
	}
	set xConditionOffsetSpecified(value: boolean)
	{
		this.xConditionOffsetFieldSpecified = value;
	}
	get xConditionOffsetSpecified(): boolean
	{
		return this.xConditionOffsetFieldSpecified;
	}
	set yConditionOffset(value: number)
	{
		this.yConditionOffsetField = value;
	}
	get yConditionOffset(): number
	{
		return this.yConditionOffsetField;
	}
	set yConditionOffsetSpecified(value: boolean)
	{
		this.yConditionOffsetFieldSpecified = value;
	}
	get yConditionOffsetSpecified(): boolean
	{
		return this.yConditionOffsetFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class Bounds extends NObject
{
	private heightField: number = 0;
	private heightFieldSpecified: boolean = false;
	private widthField: number = 0;
	private widthFieldSpecified: boolean = false;
	private xField: number = 0;
	private xFieldSpecified: boolean = false;
	private yField: number = 0;
	private yFieldSpecified: boolean = false;
	set height(value: number)
	{
		this.heightField = value;
	}
	get height(): number
	{
		return this.heightField;
	}
	set heightSpecified(value: boolean)
	{
		this.heightFieldSpecified = value;
	}
	get heightSpecified(): boolean
	{
		return this.heightFieldSpecified;
	}
	set width(value: number)
	{
		this.widthField = value;
	}
	get width(): number
	{
		return this.widthField;
	}
	set widthSpecified(value: boolean)
	{
		this.widthFieldSpecified = value;
	}
	get widthSpecified(): boolean
	{
		return this.widthFieldSpecified;
	}
	set x(value: number)
	{
		this.xField = value;
	}
	get x(): number
	{
		return this.xField;
	}
	set xSpecified(value: boolean)
	{
		this.xFieldSpecified = value;
	}
	get xSpecified(): boolean
	{
		return this.xFieldSpecified;
	}
	set y(value: number)
	{
		this.yField = value;
	}
	get y(): number
	{
		return this.yField;
	}
	set ySpecified(value: boolean)
	{
		this.yFieldSpecified = value;
	}
	get ySpecified(): boolean
	{
		return this.yFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class BPMNShape extends NObject
{
	private boundsField: Bounds = null;
	private idField: string = null;
	private bpmnElementField: string = null;
	set Bounds(value: Bounds)
	{
		this.boundsField = value;
	}
	get Bounds(): Bounds
	{
		return this.boundsField;
	}
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set bpmnElement(value: string)
	{
		this.bpmnElementField = value;
	}
	get bpmnElement(): string
	{
		return this.bpmnElementField;
	}
	constructor()
	{
		super();
	}
}
class BPMNPlane extends NObject
{
	private bPMNShapeField: BPMNShape[] = null;
	private bPMNEdgeField: BPMNEdge[] = null;
	private idField: string = null;
	private bpmnElementField: string = null;
	set BPMNShape(value: BPMNShape[])
	{
		this.bPMNShapeField = value;
	}
	get BPMNShape(): BPMNShape[]
	{
		return this.bPMNShapeField;
	}
	set BPMNEdge(value: BPMNEdge[])
	{
		this.bPMNEdgeField = value;
	}
	get BPMNEdge(): BPMNEdge[]
	{
		return this.bPMNEdgeField;
	}
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set bpmnElement(value: string)
	{
		this.bpmnElementField = value;
	}
	get bpmnElement(): string
	{
		return this.bpmnElementField;
	}
	constructor()
	{
		super();
	}
}
class BPMNDiagram extends NObject
{
	private bPMNPlaneField: BPMNPlane = null;
	private idField: string = null;
	set BPMNPlane(value: BPMNPlane)
	{
		this.bPMNPlaneField = value;
	}
	get BPMNPlane(): BPMNPlane
	{
		return this.bPMNPlaneField;
	}
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	constructor()
	{
		super();
	}
}
class SequenceFlow extends NObject
{
	private conditionExpressionField: string = null;
	private idField: string = null;
	private nameField: string = null;
	private sourceRefField: string = null;
	private targetRefField: string = null;
	private cellOperatorIdField: number = 0;
	private cellOperatorIdFieldSpecified: boolean = false;
	private cellOperatorKeyField: string = null;
	private rightExpressionField: string = null;
	set conditionExpression(value: string)
	{
		this.conditionExpressionField = value;
	}
	get conditionExpression(): string
	{
		return this.conditionExpressionField;
	}
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set sourceRef(value: string)
	{
		this.sourceRefField = value;
	}
	get sourceRef(): string
	{
		return this.sourceRefField;
	}
	set targetRef(value: string)
	{
		this.targetRefField = value;
	}
	get targetRef(): string
	{
		return this.targetRefField;
	}
	set cellOperatorId(value: number)
	{
		this.cellOperatorIdField = value;
	}
	get cellOperatorId(): number
	{
		return this.cellOperatorIdField;
	}
	set cellOperatorIdSpecified(value: boolean)
	{
		this.cellOperatorIdFieldSpecified = value;
	}
	get cellOperatorIdSpecified(): boolean
	{
		return this.cellOperatorIdFieldSpecified;
	}
	set cellOperatorKey(value: string)
	{
		this.cellOperatorKeyField = value;
	}
	get cellOperatorKey(): string
	{
		return this.cellOperatorKeyField;
	}
	set rightExpression(value: string)
	{
		this.rightExpressionField = value;
	}
	get rightExpression(): string
	{
		return this.rightExpressionField;
	}
	constructor()
	{
		super();
	}
}
class ExclusiveGateway extends NObject
{
	private idField: string = null;
	private nameField: string = null;
	private factTypeDefinitionIdField: number = 0;
	private factTypeDefinitionIdFieldSpecified: boolean = false;
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set factTypeDefinitionId(value: number)
	{
		this.factTypeDefinitionIdField = value;
	}
	get factTypeDefinitionId(): number
	{
		return this.factTypeDefinitionIdField;
	}
	set factTypeDefinitionIdSpecified(value: boolean)
	{
		this.factTypeDefinitionIdFieldSpecified = value;
	}
	get factTypeDefinitionIdSpecified(): boolean
	{
		return this.factTypeDefinitionIdFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class ExtentionField extends NObject
{
	private stringField: string = null;
	private nameField: string = null;
	set string(value: string)
	{
		this.stringField = value;
	}
	get string(): string
	{
		return this.stringField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
class CustomProperty extends NObject
{
	private templateIdField: number = 0;
	private nameField: string = null;
	private valueField: string = null;
	set templateId(value: number)
	{
		this.templateIdField = value;
	}
	get templateId(): number
	{
		return this.templateIdField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class extentionElements extends NObject
{
	private customPropertyField: CustomProperty[] = null;
	private fieldField: ExtentionField[] = null;
	set customProperty(value: CustomProperty[])
	{
		this.customPropertyField = value;
	}
	get customProperty(): CustomProperty[]
	{
		return this.customPropertyField;
	}
	set field(value: ExtentionField[])
	{
		this.fieldField = value;
	}
	get field(): ExtentionField[]
	{
		return this.fieldField;
	}
	constructor()
	{
		super();
	}
}
class ServiceTask extends NObject
{
	private extensionElementsField: extentionElements = null;
	private idField: string = null;
	private nameField: string = null;
	private decisionViewIdField: number = 0;
	private decisionViewIdFieldSpecified: boolean = false;
	private classField: string = null;
	set extensionElements(value: extentionElements)
	{
		this.extensionElementsField = value;
	}
	get extensionElements(): extentionElements
	{
		return this.extensionElementsField;
	}
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set decisionViewId(value: number)
	{
		this.decisionViewIdField = value;
	}
	get decisionViewId(): number
	{
		return this.decisionViewIdField;
	}
	set decisionViewIdSpecified(value: boolean)
	{
		this.decisionViewIdFieldSpecified = value;
	}
	get decisionViewIdSpecified(): boolean
	{
		return this.decisionViewIdFieldSpecified;
	}
	set class(value: string)
	{
		this.classField = value;
	}
	get class(): string
	{
		return this.classField;
	}
	constructor()
	{
		super();
	}
}
class EndEvent extends NObject
{
	private idField: string = null;
	private nameField: string = null;
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
class StartEvent extends NObject
{
	private idField: string = null;
	private nameField: string = null;
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	constructor()
	{
		super();
	}
}
class Process extends NObject
{
	private startEventField: StartEvent = null;
	private endEventField: EndEvent[] = null;
	private serviceTaskField: ServiceTask[] = null;
	private exclusiveGatewayField: ExclusiveGateway[] = null;
	private sequenceFlowField: SequenceFlow[] = null;
	private subProcessField: Process[] = null;
	private extensionElementsField: extentionElements = null;
	private idField: string = null;
	private nameField: string = null;
	private executableField: boolean = false;
	private executableFieldSpecified: boolean = false;
	set startEvent(value: StartEvent)
	{
		this.startEventField = value;
	}
	get startEvent(): StartEvent
	{
		return this.startEventField;
	}
	set endEvent(value: EndEvent[])
	{
		this.endEventField = value;
	}
	get endEvent(): EndEvent[]
	{
		return this.endEventField;
	}
	set serviceTask(value: ServiceTask[])
	{
		this.serviceTaskField = value;
	}
	get serviceTask(): ServiceTask[]
	{
		return this.serviceTaskField;
	}
	set exclusiveGateway(value: ExclusiveGateway[])
	{
		this.exclusiveGatewayField = value;
	}
	get exclusiveGateway(): ExclusiveGateway[]
	{
		return this.exclusiveGatewayField;
	}
	set sequenceFlow(value: SequenceFlow[])
	{
		this.sequenceFlowField = value;
	}
	get sequenceFlow(): SequenceFlow[]
	{
		return this.sequenceFlowField;
	}
	set subProcess(value: Process[])
	{
		this.subProcessField = value;
	}
	get subProcess(): Process[]
	{
		return this.subProcessField;
	}
	set extensionElements(value: extentionElements)
	{
		this.extensionElementsField = value;
	}
	get extensionElements(): extentionElements
	{
		return this.extensionElementsField;
	}
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set executable(value: boolean)
	{
		this.executableField = value;
	}
	get executable(): boolean
	{
		return this.executableField;
	}
	set executableSpecified(value: boolean)
	{
		this.executableFieldSpecified = value;
	}
	get executableSpecified(): boolean
	{
		return this.executableFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class BPMNDefinitions extends NObject
{
	private processField: Process = null;
	private bPMNDiagramField: BPMNDiagram = null;
	private typeLanguageField: string = null;
	private expressionLanguageField: string = null;
	private targetNamespaceField: string = null;
	set process(value: Process)
	{
		this.processField = value;
	}
	get process(): Process
	{
		return this.processField;
	}
	set BPMNDiagram(value: BPMNDiagram)
	{
		this.bPMNDiagramField = value;
	}
	get BPMNDiagram(): BPMNDiagram
	{
		return this.bPMNDiagramField;
	}
	set typeLanguage(value: string)
	{
		this.typeLanguageField = value;
	}
	get typeLanguage(): string
	{
		return this.typeLanguageField;
	}
	set expressionLanguage(value: string)
	{
		this.expressionLanguageField = value;
	}
	get expressionLanguage(): string
	{
		return this.expressionLanguageField;
	}
	set targetNamespace(value: string)
	{
		this.targetNamespaceField = value;
	}
	get targetNamespace(): string
	{
		return this.targetNamespaceField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowDto extends NObject
{
	private idField: number = 0;
	private idFieldSpecified: boolean = false;
	private bpmnDefinitionsField: BPMNDefinitions = null;
	private decisionViewsField: DecisionViewInfoDto[] = null;
	private factTypesField: FactType[] = null;
	private stateField: AssetState = 0;
	private stateFieldSpecified: boolean = false;
	private versionField: Version = null;
	private viewGroupIdField: number = 0;
	private editableField: boolean = false;
	private editableFieldSpecified: boolean = false;
	private isValidField: boolean = false;
	private isValidFieldSpecified: boolean = false;
	private hasWarningsField: boolean = false;
	private hasWarningsFieldSpecified: boolean = false;
	private internalSignField: string = null;
	set id(value: number)
	{
		this.idField = value;
	}
	get id(): number
	{
		return this.idField;
	}
	set idSpecified(value: boolean)
	{
		this.idFieldSpecified = value;
	}
	get idSpecified(): boolean
	{
		return this.idFieldSpecified;
	}
	set bpmnDefinitions(value: BPMNDefinitions)
	{
		this.bpmnDefinitionsField = value;
	}
	get bpmnDefinitions(): BPMNDefinitions
	{
		return this.bpmnDefinitionsField;
	}
	set decisionViews(value: DecisionViewInfoDto[])
	{
		this.decisionViewsField = value;
	}
	get decisionViews(): DecisionViewInfoDto[]
	{
		return this.decisionViewsField;
	}
	set factTypes(value: FactType[])
	{
		this.factTypesField = value;
	}
	get factTypes(): FactType[]
	{
		return this.factTypesField;
	}
	set state(value: AssetState)
	{
		this.stateField = value;
	}
	get state(): AssetState
	{
		return this.stateField;
	}
	set stateSpecified(value: boolean)
	{
		this.stateFieldSpecified = value;
	}
	get stateSpecified(): boolean
	{
		return this.stateFieldSpecified;
	}
	set version(value: Version)
	{
		this.versionField = value;
	}
	get version(): Version
	{
		return this.versionField;
	}
	set viewGroupId(value: number)
	{
		this.viewGroupIdField = value;
	}
	get viewGroupId(): number
	{
		return this.viewGroupIdField;
	}
	set editable(value: boolean)
	{
		this.editableField = value;
	}
	get editable(): boolean
	{
		return this.editableField;
	}
	set editableSpecified(value: boolean)
	{
		this.editableFieldSpecified = value;
	}
	get editableSpecified(): boolean
	{
		return this.editableFieldSpecified;
	}
	set isValid(value: boolean)
	{
		this.isValidField = value;
	}
	get isValid(): boolean
	{
		return this.isValidField;
	}
	set isValidSpecified(value: boolean)
	{
		this.isValidFieldSpecified = value;
	}
	get isValidSpecified(): boolean
	{
		return this.isValidFieldSpecified;
	}
	set hasWarnings(value: boolean)
	{
		this.hasWarningsField = value;
	}
	get hasWarnings(): boolean
	{
		return this.hasWarningsField;
	}
	set hasWarningsSpecified(value: boolean)
	{
		this.hasWarningsFieldSpecified = value;
	}
	get hasWarningsSpecified(): boolean
	{
		return this.hasWarningsFieldSpecified;
	}
	set internalSign(value: string)
	{
		this.internalSignField = value;
	}
	get internalSign(): string
	{
		return this.internalSignField;
	}
	constructor()
	{
		super();
	}
}
class ReportParamDto extends NObject
{
	private paramIdField: string = null;
	private nameField: string = null;
	private descriptionField: string = null;
	private optionalField: boolean = false;
	private hasValidValuesField: boolean = false;
	private dataTypeField: string = null;
	private orderField: number = 0;
	private defaultValueField: string = null;
	private dependsOnField: string[] = null;
	set paramId(value: string)
	{
		this.paramIdField = value;
	}
	get paramId(): string
	{
		return this.paramIdField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set optional(value: boolean)
	{
		this.optionalField = value;
	}
	get optional(): boolean
	{
		return this.optionalField;
	}
	set hasValidValues(value: boolean)
	{
		this.hasValidValuesField = value;
	}
	get hasValidValues(): boolean
	{
		return this.hasValidValuesField;
	}
	set dataType(value: string)
	{
		this.dataTypeField = value;
	}
	get dataType(): string
	{
		return this.dataTypeField;
	}
	set order(value: number)
	{
		this.orderField = value;
	}
	get order(): number
	{
		return this.orderField;
	}
	set defaultValue(value: string)
	{
		this.defaultValueField = value;
	}
	get defaultValue(): string
	{
		return this.defaultValueField;
	}
	set dependsOn(value: string[])
	{
		this.dependsOnField = value;
	}
	get dependsOn(): string[]
	{
		return this.dependsOnField;
	}
	constructor()
	{
		super();
	}
}
class ReportDto extends NObject
{
	private idField: string = null;
	private nameField: string = null;
	private descriptionField: string = null;
	private parametersField: ReportParamDto[] = null;
	private hasTemplateField: boolean = false;
	set id(value: string)
	{
		this.idField = value;
	}
	get id(): string
	{
		return this.idField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set parameters(value: ReportParamDto[])
	{
		this.parametersField = value;
	}
	get parameters(): ReportParamDto[]
	{
		return this.parametersField;
	}
	set hasTemplate(value: boolean)
	{
		this.hasTemplateField = value;
	}
	get hasTemplate(): boolean
	{
		return this.hasTemplateField;
	}
	constructor()
	{
		super();
	}
}
class timeZone extends NObject
{
	private idField: string = null;
	private rawOffsetField: number = 0;
	set ID(value: string)
	{
		this.idField = value;
	}
	get ID(): string
	{
		return this.idField;
	}
	set rawOffset(value: number)
	{
		this.rawOffsetField = value;
	}
	get rawOffset(): number
	{
		return this.rawOffsetField;
	}
	constructor()
	{
		super();
	}
}
class JobExecutionInfo extends NObject
{
	private idField: number = 0;
	private idFieldSpecified: boolean = false;
	private stepExecutionCountField: number = 0;
	private jobIdField: number = 0;
	private jobIdFieldSpecified: boolean = false;
	private jobNameField: string = null;
	private startDateField: string = null;
	private startTimeField: string = null;
	private durationField: string = null;
	private jobParametersField: string = null;
	private restartableField: boolean = false;
	private abandonableField: boolean = false;
	private stoppableField: boolean = false;
	private timeZoneField: timeZone = null;
	set id(value: number)
	{
		this.idField = value;
	}
	get id(): number
	{
		return this.idField;
	}
	set idSpecified(value: boolean)
	{
		this.idFieldSpecified = value;
	}
	get idSpecified(): boolean
	{
		return this.idFieldSpecified;
	}
	set stepExecutionCount(value: number)
	{
		this.stepExecutionCountField = value;
	}
	get stepExecutionCount(): number
	{
		return this.stepExecutionCountField;
	}
	set jobId(value: number)
	{
		this.jobIdField = value;
	}
	get jobId(): number
	{
		return this.jobIdField;
	}
	set jobIdSpecified(value: boolean)
	{
		this.jobIdFieldSpecified = value;
	}
	get jobIdSpecified(): boolean
	{
		return this.jobIdFieldSpecified;
	}
	set jobName(value: string)
	{
		this.jobNameField = value;
	}
	get jobName(): string
	{
		return this.jobNameField;
	}
	set startDate(value: string)
	{
		this.startDateField = value;
	}
	get startDate(): string
	{
		return this.startDateField;
	}
	set startTime(value: string)
	{
		this.startTimeField = value;
	}
	get startTime(): string
	{
		return this.startTimeField;
	}
	set duration(value: string)
	{
		this.durationField = value;
	}
	get duration(): string
	{
		return this.durationField;
	}
	set jobParameters(value: string)
	{
		this.jobParametersField = value;
	}
	get jobParameters(): string
	{
		return this.jobParametersField;
	}
	set restartable(value: boolean)
	{
		this.restartableField = value;
	}
	get restartable(): boolean
	{
		return this.restartableField;
	}
	set abandonable(value: boolean)
	{
		this.abandonableField = value;
	}
	get abandonable(): boolean
	{
		return this.abandonableField;
	}
	set stoppable(value: boolean)
	{
		this.stoppableField = value;
	}
	get stoppable(): boolean
	{
		return this.stoppableField;
	}
	set timeZone(value: timeZone)
	{
		this.timeZoneField = value;
	}
	get timeZone(): timeZone
	{
		return this.timeZoneField;
	}
	constructor()
	{
		super();
	}
}
class PropertyDataDto extends NObject
{
	private propertyNameField: string = null;
	private valueField: string = null;
	private optionalField: boolean = false;
	set propertyName(value: string)
	{
		this.propertyNameField = value;
	}
	get propertyName(): string
	{
		return this.propertyNameField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	set optional(value: boolean)
	{
		this.optionalField = value;
	}
	get optional(): boolean
	{
		return this.optionalField;
	}
	constructor()
	{
		super();
	}
}
class ExternalSetInstanceDto extends NObject
{
	private idField: number = 0;
	private nameField: string = null;
	private descriptionField: string = null;
	private providerPropertiesField: PropertyDataDto[] = null;
	private providerIdentifierField: string = null;
	private providerExistField: boolean = false;
	private viewGroupIdField: number = 0;
	private lastModifiedField: DateTime = null;
	private lastModifiedFieldSpecified: boolean = false;
	private isActiveField: boolean = false;
	private dataTypeField: DataType = 0;
	private dataTypeFieldSpecified: boolean = false;
	private structureTypeField: ExternalSetStructureType = 0;
	private structureTypeFieldSpecified: boolean = false;
	set id(value: number)
	{
		this.idField = value;
	}
	get id(): number
	{
		return this.idField;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set providerProperties(value: PropertyDataDto[])
	{
		this.providerPropertiesField = value;
	}
	get providerProperties(): PropertyDataDto[]
	{
		return this.providerPropertiesField;
	}
	set providerIdentifier(value: string)
	{
		this.providerIdentifierField = value;
	}
	get providerIdentifier(): string
	{
		return this.providerIdentifierField;
	}
	set providerExist(value: boolean)
	{
		this.providerExistField = value;
	}
	get providerExist(): boolean
	{
		return this.providerExistField;
	}
	set viewGroupId(value: number)
	{
		this.viewGroupIdField = value;
	}
	get viewGroupId(): number
	{
		return this.viewGroupIdField;
	}
	set lastModified(value: DateTime)
	{
		this.lastModifiedField = value;
	}
	get lastModified(): DateTime
	{
		return this.lastModifiedField;
	}
	set lastModifiedSpecified(value: boolean)
	{
		this.lastModifiedFieldSpecified = value;
	}
	get lastModifiedSpecified(): boolean
	{
		return this.lastModifiedFieldSpecified;
	}
	set isActive(value: boolean)
	{
		this.isActiveField = value;
	}
	get isActive(): boolean
	{
		return this.isActiveField;
	}
	set dataType(value: DataType)
	{
		this.dataTypeField = value;
	}
	get dataType(): DataType
	{
		return this.dataTypeField;
	}
	set dataTypeSpecified(value: boolean)
	{
		this.dataTypeFieldSpecified = value;
	}
	get dataTypeSpecified(): boolean
	{
		return this.dataTypeFieldSpecified;
	}
	set structureType(value: ExternalSetStructureType)
	{
		this.structureTypeField = value;
	}
	get structureType(): ExternalSetStructureType
	{
		return this.structureTypeField;
	}
	set structureTypeSpecified(value: boolean)
	{
		this.structureTypeFieldSpecified = value;
	}
	get structureTypeSpecified(): boolean
	{
		return this.structureTypeFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class AdditionalInfoPropertiesDto extends NObject
{
	private createdByField: IdName = null;
	private approvedByField: IdName = null;
	private createdOnField: DateTime = null;
	private createdOnFieldSpecified: boolean = false;
	private approvedOnField: DateTime = null;
	private approvedOnFieldSpecified: boolean = false;
	private versionLabelField: string = null;
	private assetStateField: AssetState = 0;
	private assetStateFieldSpecified: boolean = false;
	set createdBy(value: IdName)
	{
		this.createdByField = value;
	}
	get createdBy(): IdName
	{
		return this.createdByField;
	}
	set approvedBy(value: IdName)
	{
		this.approvedByField = value;
	}
	get approvedBy(): IdName
	{
		return this.approvedByField;
	}
	set createdOn(value: DateTime)
	{
		this.createdOnField = value;
	}
	get createdOn(): DateTime
	{
		return this.createdOnField;
	}
	set createdOnSpecified(value: boolean)
	{
		this.createdOnFieldSpecified = value;
	}
	get createdOnSpecified(): boolean
	{
		return this.createdOnFieldSpecified;
	}
	set approvedOn(value: DateTime)
	{
		this.approvedOnField = value;
	}
	get approvedOn(): DateTime
	{
		return this.approvedOnField;
	}
	set approvedOnSpecified(value: boolean)
	{
		this.approvedOnFieldSpecified = value;
	}
	get approvedOnSpecified(): boolean
	{
		return this.approvedOnFieldSpecified;
	}
	set versionLabel(value: string)
	{
		this.versionLabelField = value;
	}
	get versionLabel(): string
	{
		return this.versionLabelField;
	}
	set assetState(value: AssetState)
	{
		this.assetStateField = value;
	}
	get assetState(): AssetState
	{
		return this.assetStateField;
	}
	set assetStateSpecified(value: boolean)
	{
		this.assetStateFieldSpecified = value;
	}
	get assetStateSpecified(): boolean
	{
		return this.assetStateFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class AssetAdditionalInfo extends NObject
{
	private propertiesField: AdditionalInfoPropertiesDto = null;
	private bcdIdField: number = 0;
	private bcdNameField: string = null;
	private versionCountField: number = 0;
	private whiteboardCountField: number = 0;
	set properties(value: AdditionalInfoPropertiesDto)
	{
		this.propertiesField = value;
	}
	get properties(): AdditionalInfoPropertiesDto
	{
		return this.propertiesField;
	}
	set bcdId(value: number)
	{
		this.bcdIdField = value;
	}
	get bcdId(): number
	{
		return this.bcdIdField;
	}
	set bcdName(value: string)
	{
		this.bcdNameField = value;
	}
	get bcdName(): string
	{
		return this.bcdNameField;
	}
	set versionCount(value: number)
	{
		this.versionCountField = value;
	}
	get versionCount(): number
	{
		return this.versionCountField;
	}
	set whiteboardCount(value: number)
	{
		this.whiteboardCountField = value;
	}
	get whiteboardCount(): number
	{
		return this.whiteboardCountField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowAddInfoDto extends AssetAdditionalInfo
{
	private factTypesCountField: number = 0;
	private decisionViewCountField: number = 0;
	private viewGroupsCountField: number = 0;
	private releasesCountField: number = 0;
	private branchesCountField: number = 0;
	set factTypesCount(value: number)
	{
		this.factTypesCountField = value;
	}
	get factTypesCount(): number
	{
		return this.factTypesCountField;
	}
	set decisionViewCount(value: number)
	{
		this.decisionViewCountField = value;
	}
	get decisionViewCount(): number
	{
		return this.decisionViewCountField;
	}
	set viewGroupsCount(value: number)
	{
		this.viewGroupsCountField = value;
	}
	get viewGroupsCount(): number
	{
		return this.viewGroupsCountField;
	}
	set releasesCount(value: number)
	{
		this.releasesCountField = value;
	}
	get releasesCount(): number
	{
		return this.releasesCountField;
	}
	set branchesCount(value: number)
	{
		this.branchesCountField = value;
	}
	get branchesCount(): number
	{
		return this.branchesCountField;
	}
	constructor()
	{
		super();
	}
}
class FactTypeAddInfoDto extends AssetAdditionalInfo
{
	private ruleFamilyViewsCountField: number = 0;
	private decisionViewsCountField: number = 0;
	private rfvConclusionCountField: number = 0;
	private dvConclusionCountField: number = 0;
	private ruleFlowsCountField: number = 0;
	private rfvMessagesCountField: number = 0;
	set ruleFamilyViewsCount(value: number)
	{
		this.ruleFamilyViewsCountField = value;
	}
	get ruleFamilyViewsCount(): number
	{
		return this.ruleFamilyViewsCountField;
	}
	set decisionViewsCount(value: number)
	{
		this.decisionViewsCountField = value;
	}
	get decisionViewsCount(): number
	{
		return this.decisionViewsCountField;
	}
	set rfvConclusionCount(value: number)
	{
		this.rfvConclusionCountField = value;
	}
	get rfvConclusionCount(): number
	{
		return this.rfvConclusionCountField;
	}
	set dvConclusionCount(value: number)
	{
		this.dvConclusionCountField = value;
	}
	get dvConclusionCount(): number
	{
		return this.dvConclusionCountField;
	}
	set ruleFlowsCount(value: number)
	{
		this.ruleFlowsCountField = value;
	}
	get ruleFlowsCount(): number
	{
		return this.ruleFlowsCountField;
	}
	set rfvMessagesCount(value: number)
	{
		this.rfvMessagesCountField = value;
	}
	get rfvMessagesCount(): number
	{
		return this.rfvMessagesCountField;
	}
	constructor()
	{
		super();
	}
}
class DecisionViewAddInfoDto extends AssetAdditionalInfo
{
	private factTypesCountField: number = 0;
	private ruleFamilyViewCountField: number = 0;
	private viewGroupsCountField: number = 0;
	private decisionViewsWithSameConclusionCountField: number = 0;
	private releasesCountField: number = 0;
	private branchesCountField: number = 0;
	private ruleFlowsCountField: number = 0;
	set factTypesCount(value: number)
	{
		this.factTypesCountField = value;
	}
	get factTypesCount(): number
	{
		return this.factTypesCountField;
	}
	set ruleFamilyViewCount(value: number)
	{
		this.ruleFamilyViewCountField = value;
	}
	get ruleFamilyViewCount(): number
	{
		return this.ruleFamilyViewCountField;
	}
	set viewGroupsCount(value: number)
	{
		this.viewGroupsCountField = value;
	}
	get viewGroupsCount(): number
	{
		return this.viewGroupsCountField;
	}
	set decisionViewsWithSameConclusionCount(value: number)
	{
		this.decisionViewsWithSameConclusionCountField = value;
	}
	get decisionViewsWithSameConclusionCount(): number
	{
		return this.decisionViewsWithSameConclusionCountField;
	}
	set releasesCount(value: number)
	{
		this.releasesCountField = value;
	}
	get releasesCount(): number
	{
		return this.releasesCountField;
	}
	set branchesCount(value: number)
	{
		this.branchesCountField = value;
	}
	get branchesCount(): number
	{
		return this.branchesCountField;
	}
	set ruleFlowsCount(value: number)
	{
		this.ruleFlowsCountField = value;
	}
	get ruleFlowsCount(): number
	{
		return this.ruleFlowsCountField;
	}
	constructor()
	{
		super();
	}
}
class RuleFamilyViewAddInfoDto extends AssetAdditionalInfo
{
	private factTypesCountField: number = 0;
	private rfvsWithSameConclusionCountField: number = 0;
	private conditionFactTypesCountField: number = 0;
	private conditionCellFactTypesCountField: number = 0;
	private conclusionCellFactTypesCountField: number = 0;
	private messageFactTypesCountField: number = 0;
	private decisionViewsCountField: number = 0;
	set factTypesCount(value: number)
	{
		this.factTypesCountField = value;
	}
	get factTypesCount(): number
	{
		return this.factTypesCountField;
	}
	set rfvsWithSameConclusionCount(value: number)
	{
		this.rfvsWithSameConclusionCountField = value;
	}
	get rfvsWithSameConclusionCount(): number
	{
		return this.rfvsWithSameConclusionCountField;
	}
	set conditionFactTypesCount(value: number)
	{
		this.conditionFactTypesCountField = value;
	}
	get conditionFactTypesCount(): number
	{
		return this.conditionFactTypesCountField;
	}
	set conditionCellFactTypesCount(value: number)
	{
		this.conditionCellFactTypesCountField = value;
	}
	get conditionCellFactTypesCount(): number
	{
		return this.conditionCellFactTypesCountField;
	}
	set conclusionCellFactTypesCount(value: number)
	{
		this.conclusionCellFactTypesCountField = value;
	}
	get conclusionCellFactTypesCount(): number
	{
		return this.conclusionCellFactTypesCountField;
	}
	set messageFactTypesCount(value: number)
	{
		this.messageFactTypesCountField = value;
	}
	get messageFactTypesCount(): number
	{
		return this.messageFactTypesCountField;
	}
	set decisionViewsCount(value: number)
	{
		this.decisionViewsCountField = value;
	}
	get decisionViewsCount(): number
	{
		return this.decisionViewsCountField;
	}
	constructor()
	{
		super();
	}
}
class FactTypeRepoNaviDto extends NObject
{
	private glossaryNameField: string = null;
	private businessConceptNameField: string = null;
	private glossaryArtifactTypeField: GlossaryArtifactType = 0;
	private glossaryArtifactTypeFieldSpecified: boolean = false;
	private isFormulaField: boolean = false;
	private isFormulaFieldSpecified: boolean = false;
	private isListField: boolean = false;
	private isListFieldSpecified: boolean = false;
	private aliasField: string = null;
	set glossaryName(value: string)
	{
		this.glossaryNameField = value;
	}
	get glossaryName(): string
	{
		return this.glossaryNameField;
	}
	set businessConceptName(value: string)
	{
		this.businessConceptNameField = value;
	}
	get businessConceptName(): string
	{
		return this.businessConceptNameField;
	}
	set glossaryArtifactType(value: GlossaryArtifactType)
	{
		this.glossaryArtifactTypeField = value;
	}
	get glossaryArtifactType(): GlossaryArtifactType
	{
		return this.glossaryArtifactTypeField;
	}
	set glossaryArtifactTypeSpecified(value: boolean)
	{
		this.glossaryArtifactTypeFieldSpecified = value;
	}
	get glossaryArtifactTypeSpecified(): boolean
	{
		return this.glossaryArtifactTypeFieldSpecified;
	}
	set isFormula(value: boolean)
	{
		this.isFormulaField = value;
	}
	get isFormula(): boolean
	{
		return this.isFormulaField;
	}
	set isFormulaSpecified(value: boolean)
	{
		this.isFormulaFieldSpecified = value;
	}
	get isFormulaSpecified(): boolean
	{
		return this.isFormulaFieldSpecified;
	}
	set isList(value: boolean)
	{
		this.isListField = value;
	}
	get isList(): boolean
	{
		return this.isListField;
	}
	set isListSpecified(value: boolean)
	{
		this.isListFieldSpecified = value;
	}
	get isListSpecified(): boolean
	{
		return this.isListFieldSpecified;
	}
	set alias(value: string)
	{
		this.aliasField = value;
	}
	get alias(): string
	{
		return this.aliasField;
	}
	constructor()
	{
		super();
	}
}
class RepositoryNevigatorDto extends NObject
{
	private idField: number = 0;
	private idFieldSpecified: boolean = false;
	private nameField: string = null;
	private entityTypeField: EntityType = null;
	private assetStateField: AssetState = 0;
	private assetStateFieldSpecified: boolean = false;
	private bcdNameField: string = null;
	private ruleRowFullDescriptionField: string = null;
	private createdByField: string = null;
	private approvedByField: string = null;
	private versionIncField: VersionInc = 0;
	private versionIncFieldSpecified: boolean = false;
	private versionLabelField: string = null;
	private editNumberField: number = 0;
	private isVgGlossaryField: boolean = false;
	private isVgHasChildrenField: boolean = false;
	private singleParentViewGroupField: IdName = null;
	private viewGroupIdField: number = 0;
	private viewGroupIdFieldSpecified: boolean = false;
	private hasSingleOrNoContextField: boolean = false;
	private isLatesVersionInQueryContextField: boolean = false;
	private assignedDateField: DateTime = null;
	private assignedDateFieldSpecified: boolean = false;
	private creationDateField: DateTime = null;
	private creationDateFieldSpecified: boolean = false;
	private contextIdField: number = 0;
	private contextIdFieldSpecified: boolean = false;
	private contextNameField: string = null;
	private parentIdField: number = 0;
	private parentIdFieldSpecified: boolean = false;
	private parentNameField: string = null;
	private assetDefinitionIdField: number = 0;
	private assetDefinitionIdFieldSpecified: boolean = false;
	private factTypeRepoNaviDtoField: FactTypeRepoNaviDto = null;
	set id(value: number)
	{
		this.idField = value;
	}
	get id(): number
	{
		return this.idField;
	}
	set idSpecified(value: boolean)
	{
		this.idFieldSpecified = value;
	}
	get idSpecified(): boolean
	{
		return this.idFieldSpecified;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set entityType(value: EntityType)
	{
		this.entityTypeField = value;
	}
	get entityType(): EntityType
	{
		return this.entityTypeField;
	}
	set assetState(value: AssetState)
	{
		this.assetStateField = value;
	}
	get assetState(): AssetState
	{
		return this.assetStateField;
	}
	set assetStateSpecified(value: boolean)
	{
		this.assetStateFieldSpecified = value;
	}
	get assetStateSpecified(): boolean
	{
		return this.assetStateFieldSpecified;
	}
	set bcdName(value: string)
	{
		this.bcdNameField = value;
	}
	get bcdName(): string
	{
		return this.bcdNameField;
	}
	set ruleRowFullDescription(value: string)
	{
		this.ruleRowFullDescriptionField = value;
	}
	get ruleRowFullDescription(): string
	{
		return this.ruleRowFullDescriptionField;
	}
	set createdBy(value: string)
	{
		this.createdByField = value;
	}
	get createdBy(): string
	{
		return this.createdByField;
	}
	set approvedBy(value: string)
	{
		this.approvedByField = value;
	}
	get approvedBy(): string
	{
		return this.approvedByField;
	}
	set versionInc(value: VersionInc)
	{
		this.versionIncField = value;
	}
	get versionInc(): VersionInc
	{
		return this.versionIncField;
	}
	set versionIncSpecified(value: boolean)
	{
		this.versionIncFieldSpecified = value;
	}
	get versionIncSpecified(): boolean
	{
		return this.versionIncFieldSpecified;
	}
	set versionLabel(value: string)
	{
		this.versionLabelField = value;
	}
	get versionLabel(): string
	{
		return this.versionLabelField;
	}
	set editNumber(value: number)
	{
		this.editNumberField = value;
	}
	get editNumber(): number
	{
		return this.editNumberField;
	}
	set isVgGlossary(value: boolean)
	{
		this.isVgGlossaryField = value;
	}
	get isVgGlossary(): boolean
	{
		return this.isVgGlossaryField;
	}
	set isVgHasChildren(value: boolean)
	{
		this.isVgHasChildrenField = value;
	}
	get isVgHasChildren(): boolean
	{
		return this.isVgHasChildrenField;
	}
	set singleParentViewGroup(value: IdName)
	{
		this.singleParentViewGroupField = value;
	}
	get singleParentViewGroup(): IdName
	{
		return this.singleParentViewGroupField;
	}
	set viewGroupId(value: number)
	{
		this.viewGroupIdField = value;
	}
	get viewGroupId(): number
	{
		return this.viewGroupIdField;
	}
	set viewGroupIdSpecified(value: boolean)
	{
		this.viewGroupIdFieldSpecified = value;
	}
	get viewGroupIdSpecified(): boolean
	{
		return this.viewGroupIdFieldSpecified;
	}
	set hasSingleOrNoContext(value: boolean)
	{
		this.hasSingleOrNoContextField = value;
	}
	get hasSingleOrNoContext(): boolean
	{
		return this.hasSingleOrNoContextField;
	}
	set isLatesVersionInQueryContext(value: boolean)
	{
		this.isLatesVersionInQueryContextField = value;
	}
	get isLatesVersionInQueryContext(): boolean
	{
		return this.isLatesVersionInQueryContextField;
	}
	set assignedDate(value: DateTime)
	{
		this.assignedDateField = value;
	}
	get assignedDate(): DateTime
	{
		return this.assignedDateField;
	}
	set assignedDateSpecified(value: boolean)
	{
		this.assignedDateFieldSpecified = value;
	}
	get assignedDateSpecified(): boolean
	{
		return this.assignedDateFieldSpecified;
	}
	set creationDate(value: DateTime)
	{
		this.creationDateField = value;
	}
	get creationDate(): DateTime
	{
		return this.creationDateField;
	}
	set creationDateSpecified(value: boolean)
	{
		this.creationDateFieldSpecified = value;
	}
	get creationDateSpecified(): boolean
	{
		return this.creationDateFieldSpecified;
	}
	set contextId(value: number)
	{
		this.contextIdField = value;
	}
	get contextId(): number
	{
		return this.contextIdField;
	}
	set contextIdSpecified(value: boolean)
	{
		this.contextIdFieldSpecified = value;
	}
	get contextIdSpecified(): boolean
	{
		return this.contextIdFieldSpecified;
	}
	set contextName(value: string)
	{
		this.contextNameField = value;
	}
	get contextName(): string
	{
		return this.contextNameField;
	}
	set parentId(value: number)
	{
		this.parentIdField = value;
	}
	get parentId(): number
	{
		return this.parentIdField;
	}
	set parentIdSpecified(value: boolean)
	{
		this.parentIdFieldSpecified = value;
	}
	get parentIdSpecified(): boolean
	{
		return this.parentIdFieldSpecified;
	}
	set parentName(value: string)
	{
		this.parentNameField = value;
	}
	get parentName(): string
	{
		return this.parentNameField;
	}
	set assetDefinitionId(value: number)
	{
		this.assetDefinitionIdField = value;
	}
	get assetDefinitionId(): number
	{
		return this.assetDefinitionIdField;
	}
	set assetDefinitionIdSpecified(value: boolean)
	{
		this.assetDefinitionIdFieldSpecified = value;
	}
	get assetDefinitionIdSpecified(): boolean
	{
		return this.assetDefinitionIdFieldSpecified;
	}
	set factTypeRepoNaviDto(value: FactTypeRepoNaviDto)
	{
		this.factTypeRepoNaviDtoField = value;
	}
	get factTypeRepoNaviDto(): FactTypeRepoNaviDto
	{
		return this.factTypeRepoNaviDtoField;
	}
	constructor()
	{
		super();
	}
}
class RepoNavigatorSetWithCommonEntityTypeDto extends NObject
{
	private entityTypeField: EntityType = null;
	private repoNavigatorDtosField: RepositoryNevigatorDto[] = null;
	private resultsNotIncludedField: number = 0;
	set entityType(value: EntityType)
	{
		this.entityTypeField = value;
	}
	get entityType(): EntityType
	{
		return this.entityTypeField;
	}
	set repoNavigatorDtos(value: RepositoryNevigatorDto[])
	{
		this.repoNavigatorDtosField = value;
	}
	get repoNavigatorDtos(): RepositoryNevigatorDto[]
	{
		return this.repoNavigatorDtosField;
	}
	set resultsNotIncluded(value: number)
	{
		this.resultsNotIncludedField = value;
	}
	get resultsNotIncluded(): number
	{
		return this.resultsNotIncludedField;
	}
	constructor()
	{
		super();
	}
}
class AssetAdditionalInfoRefsDto extends NObject
{
	private otherVersionsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private whiteboardsUsedInField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	set otherVersions(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.otherVersionsField = value;
	}
	get otherVersions(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.otherVersionsField;
	}
	set whiteboardsUsedIn(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.whiteboardsUsedInField = value;
	}
	get whiteboardsUsedIn(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.whiteboardsUsedInField;
	}
	constructor()
	{
		super();
	}
}
class FactTypeAddInfoResultsRefsDto extends AssetAdditionalInfoRefsDto
{
	private ruleFamilyViewsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private decisionViewsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private conclusionOfRuleFamilyViewsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private conclusionOfDecisionViewsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private rfvMessagesRuleFamilyViewsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	set ruleFamilyViews(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.ruleFamilyViewsField = value;
	}
	get ruleFamilyViews(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.ruleFamilyViewsField;
	}
	set decisionViews(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.decisionViewsField = value;
	}
	get decisionViews(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.decisionViewsField;
	}
	set conclusionOfRuleFamilyViews(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.conclusionOfRuleFamilyViewsField = value;
	}
	get conclusionOfRuleFamilyViews(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.conclusionOfRuleFamilyViewsField;
	}
	set conclusionOfDecisionViews(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.conclusionOfDecisionViewsField = value;
	}
	get conclusionOfDecisionViews(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.conclusionOfDecisionViewsField;
	}
	set rfvMessagesRuleFamilyViews(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.rfvMessagesRuleFamilyViewsField = value;
	}
	get rfvMessagesRuleFamilyViews(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.rfvMessagesRuleFamilyViewsField;
	}
	constructor()
	{
		super();
	}
}
class DecisionViewAddInfoDtoRefs extends AssetAdditionalInfoRefsDto
{
	private factTypesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private ruleFamilyViewsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private viewGroupsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private decisionViewsWithSameConcField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private releasesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private branchesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private ruleFlowsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	set factTypes(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.factTypesField = value;
	}
	get factTypes(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.factTypesField;
	}
	set ruleFamilyViews(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.ruleFamilyViewsField = value;
	}
	get ruleFamilyViews(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.ruleFamilyViewsField;
	}
	set viewGroups(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.viewGroupsField = value;
	}
	get viewGroups(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.viewGroupsField;
	}
	set decisionViewsWithSameConc(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.decisionViewsWithSameConcField = value;
	}
	get decisionViewsWithSameConc(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.decisionViewsWithSameConcField;
	}
	set releases(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.releasesField = value;
	}
	get releases(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.releasesField;
	}
	set branches(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.branchesField = value;
	}
	get branches(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.branchesField;
	}
	set ruleFlows(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.ruleFlowsField = value;
	}
	get ruleFlows(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.ruleFlowsField;
	}
	constructor()
	{
		super();
	}
}
class RuleFlowAddInfoRefsDto extends AssetAdditionalInfoRefsDto
{
	private factTypesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private viewGroupsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private decisionViewCountField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private releasesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private branchesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	set factTypes(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.factTypesField = value;
	}
	get factTypes(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.factTypesField;
	}
	set viewGroups(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.viewGroupsField = value;
	}
	get viewGroups(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.viewGroupsField;
	}
	set decisionViewCount(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.decisionViewCountField = value;
	}
	get decisionViewCount(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.decisionViewCountField;
	}
	set releases(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.releasesField = value;
	}
	get releases(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.releasesField;
	}
	set branches(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.branchesField = value;
	}
	get branches(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.branchesField;
	}
	constructor()
	{
		super();
	}
}
class RuleFamilyViewAddInfoRefsDto extends AssetAdditionalInfoRefsDto
{
	private factTypesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private rfvsWithSameConclusionField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private conditionFactTypesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private conditionCellFactTypesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private conclusionCellFactTypesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private messageFactTypesField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	private decisionViewsField: RepoNavigatorSetWithCommonEntityTypeDto = null;
	set factTypes(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.factTypesField = value;
	}
	get factTypes(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.factTypesField;
	}
	set rfvsWithSameConclusion(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.rfvsWithSameConclusionField = value;
	}
	get rfvsWithSameConclusion(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.rfvsWithSameConclusionField;
	}
	set conditionFactTypes(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.conditionFactTypesField = value;
	}
	get conditionFactTypes(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.conditionFactTypesField;
	}
	set conditionCellFactTypes(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.conditionCellFactTypesField = value;
	}
	get conditionCellFactTypes(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.conditionCellFactTypesField;
	}
	set conclusionCellFactTypes(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.conclusionCellFactTypesField = value;
	}
	get conclusionCellFactTypes(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.conclusionCellFactTypesField;
	}
	set messageFactTypes(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.messageFactTypesField = value;
	}
	get messageFactTypes(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.messageFactTypesField;
	}
	set decisionViews(value: RepoNavigatorSetWithCommonEntityTypeDto)
	{
		this.decisionViewsField = value;
	}
	get decisionViews(): RepoNavigatorSetWithCommonEntityTypeDto
	{
		return this.decisionViewsField;
	}
	constructor()
	{
		super();
	}
}
class ReleaseElementDto extends NObject
{
	private entityIdField: number = 0;
	private entityIdFieldSpecified: boolean = false;
	private nameField: string = null;
	private versionField: string = null;
	private assetStateField: AssetState = 0;
	private assetStateFieldSpecified: boolean = false;
	private approvedByField: string = null;
	private approvedDateField: DateTime = null;
	private approvedDateFieldSpecified: boolean = false;
	private entityTypeField: string = null;
	private isLatestVersionField: boolean = false;
	set entityId(value: number)
	{
		this.entityIdField = value;
	}
	get entityId(): number
	{
		return this.entityIdField;
	}
	set entityIdSpecified(value: boolean)
	{
		this.entityIdFieldSpecified = value;
	}
	get entityIdSpecified(): boolean
	{
		return this.entityIdFieldSpecified;
	}
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set version(value: string)
	{
		this.versionField = value;
	}
	get version(): string
	{
		return this.versionField;
	}
	set assetState(value: AssetState)
	{
		this.assetStateField = value;
	}
	get assetState(): AssetState
	{
		return this.assetStateField;
	}
	set assetStateSpecified(value: boolean)
	{
		this.assetStateFieldSpecified = value;
	}
	get assetStateSpecified(): boolean
	{
		return this.assetStateFieldSpecified;
	}
	set approvedBy(value: string)
	{
		this.approvedByField = value;
	}
	get approvedBy(): string
	{
		return this.approvedByField;
	}
	set approvedDate(value: DateTime)
	{
		this.approvedDateField = value;
	}
	get approvedDate(): DateTime
	{
		return this.approvedDateField;
	}
	set approvedDateSpecified(value: boolean)
	{
		this.approvedDateFieldSpecified = value;
	}
	get approvedDateSpecified(): boolean
	{
		return this.approvedDateFieldSpecified;
	}
	set entityType(value: string)
	{
		this.entityTypeField = value;
	}
	get entityType(): string
	{
		return this.entityTypeField;
	}
	set isLatestVersion(value: boolean)
	{
		this.isLatestVersionField = value;
	}
	get isLatestVersion(): boolean
	{
		return this.isLatestVersionField;
	}
	constructor()
	{
		super();
	}
}
class ReleaseElementExtendedDto extends ReleaseElementDto
{
	private bcdNameField: string = null;
	private bcdTaskNameField: string = null;
	private viewGroupNameField: string = null;
	set bcdName(value: string)
	{
		this.bcdNameField = value;
	}
	get bcdName(): string
	{
		return this.bcdNameField;
	}
	set bcdTaskName(value: string)
	{
		this.bcdTaskNameField = value;
	}
	get bcdTaskName(): string
	{
		return this.bcdTaskNameField;
	}
	set viewGroupName(value: string)
	{
		this.viewGroupNameField = value;
	}
	get viewGroupName(): string
	{
		return this.viewGroupNameField;
	}
	constructor()
	{
		super();
	}
}
class PropertyDto extends NObject
{
	private propertyField: PropertyConfig = null;
	private valueField: string = null;
	set property(value: PropertyConfig)
	{
		this.propertyField = value;
	}
	get property(): PropertyConfig
	{
		return this.propertyField;
	}
	set value(value: string)
	{
		this.valueField = value;
	}
	get value(): string
	{
		return this.valueField;
	}
	constructor()
	{
		super();
	}
}
class assetValidationStatusInfo extends NObject
{
	private assetIdField: number = 0;
	private assetIdFieldSpecified: boolean = false;
	private hasSuppressedWarningsField: boolean = false;
	private hasWarningsField: boolean = false;
	set assetId(value: number)
	{
		this.assetIdField = value;
	}
	get assetId(): number
	{
		return this.assetIdField;
	}
	set assetIdSpecified(value: boolean)
	{
		this.assetIdFieldSpecified = value;
	}
	get assetIdSpecified(): boolean
	{
		return this.assetIdFieldSpecified;
	}
	set hasSuppressedWarnings(value: boolean)
	{
		this.hasSuppressedWarningsField = value;
	}
	get hasSuppressedWarnings(): boolean
	{
		return this.hasSuppressedWarningsField;
	}
	set hasWarnings(value: boolean)
	{
		this.hasWarningsField = value;
	}
	get hasWarnings(): boolean
	{
		return this.hasWarningsField;
	}
	constructor()
	{
		super();
	}
}
class GlossaryArtifactInfoDto extends NObject
{
	private factTypeDefinitionIdField: number = 0;
	private factTypeDefinitionIdFieldSpecified: boolean = false;
	private viewGroupField: KeyValueDto = null;
	private glossaryField: KeyValueDto = null;
	private glossaryArtifactTypeField: GlossaryArtifactType = 0;
	private glossaryArtifactTypeFieldSpecified: boolean = false;
	private businessFriendlyNameField: string = null;
	set factTypeDefinitionId(value: number)
	{
		this.factTypeDefinitionIdField = value;
	}
	get factTypeDefinitionId(): number
	{
		return this.factTypeDefinitionIdField;
	}
	set factTypeDefinitionIdSpecified(value: boolean)
	{
		this.factTypeDefinitionIdFieldSpecified = value;
	}
	get factTypeDefinitionIdSpecified(): boolean
	{
		return this.factTypeDefinitionIdFieldSpecified;
	}
	set viewGroup(value: KeyValueDto)
	{
		this.viewGroupField = value;
	}
	get viewGroup(): KeyValueDto
	{
		return this.viewGroupField;
	}
	set glossary(value: KeyValueDto)
	{
		this.glossaryField = value;
	}
	get glossary(): KeyValueDto
	{
		return this.glossaryField;
	}
	set glossaryArtifactType(value: GlossaryArtifactType)
	{
		this.glossaryArtifactTypeField = value;
	}
	get glossaryArtifactType(): GlossaryArtifactType
	{
		return this.glossaryArtifactTypeField;
	}
	set glossaryArtifactTypeSpecified(value: boolean)
	{
		this.glossaryArtifactTypeFieldSpecified = value;
	}
	get glossaryArtifactTypeSpecified(): boolean
	{
		return this.glossaryArtifactTypeFieldSpecified;
	}
	set businessFriendlyName(value: string)
	{
		this.businessFriendlyNameField = value;
	}
	get businessFriendlyName(): string
	{
		return this.businessFriendlyNameField;
	}
	constructor()
	{
		super();
	}
}
class FactTypeInGlossariesHirarchyInfoDto extends NObject
{
	private factTypeField: FactType = null;
	private currentGlossaryArtifactInfoDtoField: GlossaryArtifactInfoDto = null;
	private allFactTypeGlossaryArtifactsInfoDtoField: GlossaryArtifactInfoDto[] = null;
	private editableField: boolean = false;
	private hasMoreVersionsField: boolean = false;
	private movableField: boolean = false;
	private domainTemplateOutOfSyncField: boolean = false;
	set factType(value: FactType)
	{
		this.factTypeField = value;
	}
	get factType(): FactType
	{
		return this.factTypeField;
	}
	set currentGlossaryArtifactInfoDto(value: GlossaryArtifactInfoDto)
	{
		this.currentGlossaryArtifactInfoDtoField = value;
	}
	get currentGlossaryArtifactInfoDto(): GlossaryArtifactInfoDto
	{
		return this.currentGlossaryArtifactInfoDtoField;
	}
	set allFactTypeGlossaryArtifactsInfoDto(value: GlossaryArtifactInfoDto[])
	{
		this.allFactTypeGlossaryArtifactsInfoDtoField = value;
	}
	get allFactTypeGlossaryArtifactsInfoDto(): GlossaryArtifactInfoDto[]
	{
		return this.allFactTypeGlossaryArtifactsInfoDtoField;
	}
	set editable(value: boolean)
	{
		this.editableField = value;
	}
	get editable(): boolean
	{
		return this.editableField;
	}
	set hasMoreVersions(value: boolean)
	{
		this.hasMoreVersionsField = value;
	}
	get hasMoreVersions(): boolean
	{
		return this.hasMoreVersionsField;
	}
	set movable(value: boolean)
	{
		this.movableField = value;
	}
	get movable(): boolean
	{
		return this.movableField;
	}
	set domainTemplateOutOfSync(value: boolean)
	{
		this.domainTemplateOutOfSyncField = value;
	}
	get domainTemplateOutOfSync(): boolean
	{
		return this.domainTemplateOutOfSyncField;
	}
	constructor()
	{
		super();
	}
}
class AuditDetailsDto extends NObject
{
	private revisionTypeField: revisionType = 0;
	private revisionTypeFieldSpecified: boolean = false;
	private isStateLessField: boolean = false;
	private stateField: AssetState = 0;
	private stateFieldSpecified: boolean = false;
	private entityIdField: number = 0;
	private entityIdFieldSpecified: boolean = false;
	private revisionNumberField: number = 0;
	private revisionTimestampField: DateTime = null;
	private revisionTimestampFieldSpecified: boolean = false;
	private roleNameField: string = null;
	private userIdField: number = 0;
	private userIdFieldSpecified: boolean = false;
	private userNameField: string = null;
	set revisionType(value: revisionType)
	{
		this.revisionTypeField = value;
	}
	get revisionType(): revisionType
	{
		return this.revisionTypeField;
	}
	set revisionTypeSpecified(value: boolean)
	{
		this.revisionTypeFieldSpecified = value;
	}
	get revisionTypeSpecified(): boolean
	{
		return this.revisionTypeFieldSpecified;
	}
	set isStateLess(value: boolean)
	{
		this.isStateLessField = value;
	}
	get isStateLess(): boolean
	{
		return this.isStateLessField;
	}
	set state(value: AssetState)
	{
		this.stateField = value;
	}
	get state(): AssetState
	{
		return this.stateField;
	}
	set stateSpecified(value: boolean)
	{
		this.stateFieldSpecified = value;
	}
	get stateSpecified(): boolean
	{
		return this.stateFieldSpecified;
	}
	set entityId(value: number)
	{
		this.entityIdField = value;
	}
	get entityId(): number
	{
		return this.entityIdField;
	}
	set entityIdSpecified(value: boolean)
	{
		this.entityIdFieldSpecified = value;
	}
	get entityIdSpecified(): boolean
	{
		return this.entityIdFieldSpecified;
	}
	set revisionNumber(value: number)
	{
		this.revisionNumberField = value;
	}
	get revisionNumber(): number
	{
		return this.revisionNumberField;
	}
	set revisionTimestamp(value: DateTime)
	{
		this.revisionTimestampField = value;
	}
	get revisionTimestamp(): DateTime
	{
		return this.revisionTimestampField;
	}
	set revisionTimestampSpecified(value: boolean)
	{
		this.revisionTimestampFieldSpecified = value;
	}
	get revisionTimestampSpecified(): boolean
	{
		return this.revisionTimestampFieldSpecified;
	}
	set roleName(value: string)
	{
		this.roleNameField = value;
	}
	get roleName(): string
	{
		return this.roleNameField;
	}
	set userId(value: number)
	{
		this.userIdField = value;
	}
	get userId(): number
	{
		return this.userIdField;
	}
	set userIdSpecified(value: boolean)
	{
		this.userIdFieldSpecified = value;
	}
	get userIdSpecified(): boolean
	{
		return this.userIdFieldSpecified;
	}
	set userName(value: string)
	{
		this.userNameField = value;
	}
	get userName(): string
	{
		return this.userNameField;
	}
	constructor()
	{
		super();
	}
}
enum revisionType
{
	ADD,
	MOD,
	DEL
}
class BcdDto extends NObject
{
	private nameField: string = null;
	private bcdIdField: number = 0;
	private descriptionField: string = null;
	private bcdTasksField: BcdTask[] = null;
	private ownerField: User = null;
	private doneField: boolean = false;
	private viewGroupIdField: number = 0;
	private onHoldField: boolean = false;
	private statusField: string = null;
	private viewGroupNameField: string = null;
	private analysisField: boolean = false;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set bcdId(value: number)
	{
		this.bcdIdField = value;
	}
	get bcdId(): number
	{
		return this.bcdIdField;
	}
	set description(value: string)
	{
		this.descriptionField = value;
	}
	get description(): string
	{
		return this.descriptionField;
	}
	set bcdTasks(value: BcdTask[])
	{
		this.bcdTasksField = value;
	}
	get bcdTasks(): BcdTask[]
	{
		return this.bcdTasksField;
	}
	set owner(value: User)
	{
		this.ownerField = value;
	}
	get owner(): User
	{
		return this.ownerField;
	}
	set done(value: boolean)
	{
		this.doneField = value;
	}
	get done(): boolean
	{
		return this.doneField;
	}
	set viewGroupId(value: number)
	{
		this.viewGroupIdField = value;
	}
	get viewGroupId(): number
	{
		return this.viewGroupIdField;
	}
	set onHold(value: boolean)
	{
		this.onHoldField = value;
	}
	get onHold(): boolean
	{
		return this.onHoldField;
	}
	set status(value: string)
	{
		this.statusField = value;
	}
	get status(): string
	{
		return this.statusField;
	}
	set viewGroupName(value: string)
	{
		this.viewGroupNameField = value;
	}
	get viewGroupName(): string
	{
		return this.viewGroupNameField;
	}
	set analysis(value: boolean)
	{
		this.analysisField = value;
	}
	get analysis(): boolean
	{
		return this.analysisField;
	}
	constructor()
	{
		super();
	}
}
class JobInstanceInfo extends NObject
{
	private idField: number = 0;
	private idFieldSpecified: boolean = false;
	set id(value: number)
	{
		this.idField = value;
	}
	get id(): number
	{
		return this.idField;
	}
	set idSpecified(value: boolean)
	{
		this.idFieldSpecified = value;
	}
	get idSpecified(): boolean
	{
		return this.idFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class JobInfo extends NObject
{
	private nameField: string = null;
	private executionCountField: number = 0;
	private launchableField: boolean = false;
	private incrementableField: boolean = false;
	private jobInstanceIdField: number = 0;
	private jobInstanceIdFieldSpecified: boolean = false;
	private instancesField: JobInstanceInfo[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set executionCount(value: number)
	{
		this.executionCountField = value;
	}
	get executionCount(): number
	{
		return this.executionCountField;
	}
	set launchable(value: boolean)
	{
		this.launchableField = value;
	}
	get launchable(): boolean
	{
		return this.launchableField;
	}
	set incrementable(value: boolean)
	{
		this.incrementableField = value;
	}
	get incrementable(): boolean
	{
		return this.incrementableField;
	}
	set jobInstanceId(value: number)
	{
		this.jobInstanceIdField = value;
	}
	get jobInstanceId(): number
	{
		return this.jobInstanceIdField;
	}
	set jobInstanceIdSpecified(value: boolean)
	{
		this.jobInstanceIdFieldSpecified = value;
	}
	get jobInstanceIdSpecified(): boolean
	{
		return this.jobInstanceIdFieldSpecified;
	}
	set instances(value: JobInstanceInfo[])
	{
		this.instancesField = value;
	}
	get instances(): JobInstanceInfo[]
	{
		return this.instancesField;
	}
	constructor()
	{
		super();
	}
}
class AssetPathDto extends NObject
{
	private assetIdField: number = 0;
	private assetIdFieldSpecified: boolean = false;
	private assetEntityField: EntityType = null;
	private contextIdField: number = 0;
	private contextIdFieldSpecified: boolean = false;
	private contextTypeField: EntityType = null;
	set assetId(value: number)
	{
		this.assetIdField = value;
	}
	get assetId(): number
	{
		return this.assetIdField;
	}
	set assetIdSpecified(value: boolean)
	{
		this.assetIdFieldSpecified = value;
	}
	get assetIdSpecified(): boolean
	{
		return this.assetIdFieldSpecified;
	}
	set assetEntity(value: EntityType)
	{
		this.assetEntityField = value;
	}
	get assetEntity(): EntityType
	{
		return this.assetEntityField;
	}
	set contextId(value: number)
	{
		this.contextIdField = value;
	}
	get contextId(): number
	{
		return this.contextIdField;
	}
	set contextIdSpecified(value: boolean)
	{
		this.contextIdFieldSpecified = value;
	}
	get contextIdSpecified(): boolean
	{
		return this.contextIdFieldSpecified;
	}
	set contextType(value: EntityType)
	{
		this.contextTypeField = value;
	}
	get contextType(): EntityType
	{
		return this.contextTypeField;
	}
	constructor()
	{
		super();
	}
}
class NotesDto extends NObject
{
	private notesField: Note[] = null;
	private notesEditibleField: boolean = false;
	private notesEditibleFieldSpecified: boolean = false;
	set notes(value: Note[])
	{
		this.notesField = value;
	}
	get notes(): Note[]
	{
		return this.notesField;
	}
	set notesEditible(value: boolean)
	{
		this.notesEditibleField = value;
	}
	get notesEditible(): boolean
	{
		return this.notesEditibleField;
	}
	set notesEditibleSpecified(value: boolean)
	{
		this.notesEditibleFieldSpecified = value;
	}
	get notesEditibleSpecified(): boolean
	{
		return this.notesEditibleFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class DataTypeFormatsDto extends NObject
{
	private dataTypeField: DataType = 0;
	private dataTypeFieldSpecified: boolean = false;
	private dataTypeFormatsField: FormatDataType[] = null;
	set dataType(value: DataType)
	{
		this.dataTypeField = value;
	}
	get dataType(): DataType
	{
		return this.dataTypeField;
	}
	set dataTypeSpecified(value: boolean)
	{
		this.dataTypeFieldSpecified = value;
	}
	get dataTypeSpecified(): boolean
	{
		return this.dataTypeFieldSpecified;
	}
	set dataTypeFormats(value: FormatDataType[])
	{
		this.dataTypeFormatsField = value;
	}
	get dataTypeFormats(): FormatDataType[]
	{
		return this.dataTypeFormatsField;
	}
	constructor()
	{
		super();
	}
}
class PreviousExportedRevisionAndActiveExportToEnvDto extends NObject
{
	private revisionNameField: string = null;
	private areActiveExportsForEnvOnProjectField: boolean = false;
	private isTaggedField: boolean = false;
	set revisionName(value: string)
	{
		this.revisionNameField = value;
	}
	get revisionName(): string
	{
		return this.revisionNameField;
	}
	set areActiveExportsForEnvOnProject(value: boolean)
	{
		this.areActiveExportsForEnvOnProjectField = value;
	}
	get areActiveExportsForEnvOnProject(): boolean
	{
		return this.areActiveExportsForEnvOnProjectField;
	}
	set isTagged(value: boolean)
	{
		this.isTaggedField = value;
	}
	get isTagged(): boolean
	{
		return this.isTaggedField;
	}
	constructor()
	{
		super();
	}
}
class ViolationMessage extends NObject
{
	private validationTypeField: ValidationType = 0;
	private validationTypeFieldSpecified: boolean = false;
	private violationMessageField: string = null;
	private templateField: string = null;
	private propertyField: string = null;
	private beanField: string = null;
	set validationType(value: ValidationType)
	{
		this.validationTypeField = value;
	}
	get validationType(): ValidationType
	{
		return this.validationTypeField;
	}
	set validationTypeSpecified(value: boolean)
	{
		this.validationTypeFieldSpecified = value;
	}
	get validationTypeSpecified(): boolean
	{
		return this.validationTypeFieldSpecified;
	}
	set violationMessage(value: string)
	{
		this.violationMessageField = value;
	}
	get violationMessage(): string
	{
		return this.violationMessageField;
	}
	set template(value: string)
	{
		this.templateField = value;
	}
	get template(): string
	{
		return this.templateField;
	}
	set property(value: string)
	{
		this.propertyField = value;
	}
	get property(): string
	{
		return this.propertyField;
	}
	set bean(value: string)
	{
		this.beanField = value;
	}
	get bean(): string
	{
		return this.beanField;
	}
	constructor()
	{
		super();
	}
}
class EnvironmentAndValidationsDto extends NObject
{
	private environmentField: Environment = null;
	private violationMessageListField: ViolationMessage[] = null;
	private userAuthorizedToExportEnvironemtYnField: boolean = false;
	private validField: boolean = false;
	set environment(value: Environment)
	{
		this.environmentField = value;
	}
	get environment(): Environment
	{
		return this.environmentField;
	}
	set violationMessageList(value: ViolationMessage[])
	{
		this.violationMessageListField = value;
	}
	get violationMessageList(): ViolationMessage[]
	{
		return this.violationMessageListField;
	}
	set userAuthorizedToExportEnvironemtYn(value: boolean)
	{
		this.userAuthorizedToExportEnvironemtYnField = value;
	}
	get userAuthorizedToExportEnvironemtYn(): boolean
	{
		return this.userAuthorizedToExportEnvironemtYnField;
	}
	set valid(value: boolean)
	{
		this.validField = value;
	}
	get valid(): boolean
	{
		return this.validField;
	}
	constructor()
	{
		super();
	}
}
class FactTypeLinksDto extends NObject
{
	private factTypeNameField: string = null;
	private modelMappingStatusField: string = null;
	private factTypeMappedNameField: string = null;
	private glossaryNameField: string = null;
	private entityLinkParametersField: KeyValueDto[] = null;
	set factTypeName(value: string)
	{
		this.factTypeNameField = value;
	}
	get factTypeName(): string
	{
		return this.factTypeNameField;
	}
	set modelMappingStatus(value: string)
	{
		this.modelMappingStatusField = value;
	}
	get modelMappingStatus(): string
	{
		return this.modelMappingStatusField;
	}
	set factTypeMappedName(value: string)
	{
		this.factTypeMappedNameField = value;
	}
	get factTypeMappedName(): string
	{
		return this.factTypeMappedNameField;
	}
	set glossaryName(value: string)
	{
		this.glossaryNameField = value;
	}
	get glossaryName(): string
	{
		return this.glossaryNameField;
	}
	set entityLinkParameters(value: KeyValueDto[])
	{
		this.entityLinkParametersField = value;
	}
	get entityLinkParameters(): KeyValueDto[]
	{
		return this.entityLinkParametersField;
	}
	constructor()
	{
		super();
	}
}
class factTypeLinksWithStrategyOwnersDto extends NObject
{
	private approvalStrategyTypeField: ApprovalStrategyType = 0;
	private approvalStrategyTypeFieldSpecified: boolean = false;
	private factTypeLinksField: FactTypeLinksDto[] = null;
	private ownersNamesField: string[] = null;
	set approvalStrategyType(value: ApprovalStrategyType)
	{
		this.approvalStrategyTypeField = value;
	}
	get approvalStrategyType(): ApprovalStrategyType
	{
		return this.approvalStrategyTypeField;
	}
	set approvalStrategyTypeSpecified(value: boolean)
	{
		this.approvalStrategyTypeFieldSpecified = value;
	}
	get approvalStrategyTypeSpecified(): boolean
	{
		return this.approvalStrategyTypeFieldSpecified;
	}
	set factTypeLinks(value: FactTypeLinksDto[])
	{
		this.factTypeLinksField = value;
	}
	get factTypeLinks(): FactTypeLinksDto[]
	{
		return this.factTypeLinksField;
	}
	set ownersNames(value: string[])
	{
		this.ownersNamesField = value;
	}
	get ownersNames(): string[]
	{
		return this.ownersNamesField;
	}
	constructor()
	{
		super();
	}
}
class InheritedRoleDto extends NObject
{
	private roleField: Role = null;
	private originViewGroupField: ViewGroup = null;
	set role(value: Role)
	{
		this.roleField = value;
	}
	get role(): Role
	{
		return this.roleField;
	}
	set originViewGroup(value: ViewGroup)
	{
		this.originViewGroupField = value;
	}
	get originViewGroup(): ViewGroup
	{
		return this.originViewGroupField;
	}
	constructor()
	{
		super();
	}
}
class ViewGroupUserRolesDto extends NObject
{
	private userField: User = null;
	private directRolesField: Role[] = null;
	private inheritedRolesField: InheritedRoleDto[] = null;
	set user(value: User)
	{
		this.userField = value;
	}
	get user(): User
	{
		return this.userField;
	}
	set directRoles(value: Role[])
	{
		this.directRolesField = value;
	}
	get directRoles(): Role[]
	{
		return this.directRolesField;
	}
	set inheritedRoles(value: InheritedRoleDto[])
	{
		this.inheritedRolesField = value;
	}
	get inheritedRoles(): InheritedRoleDto[]
	{
		return this.inheritedRolesField;
	}
	constructor()
	{
		super();
	}
}
class ExportDto extends NObject
{
	private fileContentField: number[] = null;
	private extensionField: string = null;
	set fileContent(value: number[])
	{
		this.fileContentField = value;
	}
	get fileContent(): number[]
	{
		return this.fileContentField;
	}
	set extension(value: string)
	{
		this.extensionField = value;
	}
	get extension(): string
	{
		return this.extensionField;
	}
	constructor()
	{
		super();
	}
}
class CountCellDto extends NObject
{
	private resultField: number = 0;
	private resultFieldSpecified: boolean = false;
	private countTypeField: CountType = 0;
	private countTypeFieldSpecified: boolean = false;
	private aggregatorNameField: string = null;
	set result(value: number)
	{
		this.resultField = value;
	}
	get result(): number
	{
		return this.resultField;
	}
	set resultSpecified(value: boolean)
	{
		this.resultFieldSpecified = value;
	}
	get resultSpecified(): boolean
	{
		return this.resultFieldSpecified;
	}
	set countType(value: CountType)
	{
		this.countTypeField = value;
	}
	get countType(): CountType
	{
		return this.countTypeField;
	}
	set countTypeSpecified(value: boolean)
	{
		this.countTypeFieldSpecified = value;
	}
	get countTypeSpecified(): boolean
	{
		return this.countTypeFieldSpecified;
	}
	set aggregatorName(value: string)
	{
		this.aggregatorNameField = value;
	}
	get aggregatorName(): string
	{
		return this.aggregatorNameField;
	}
	constructor()
	{
		super();
	}
}
enum CountType
{
	MAX,
	AVG,
	ALL
}
class CountRowDto extends NObject
{
	private nameField: string = null;
	private resultsField: CountCellDto[] = null;
	set name(value: string)
	{
		this.nameField = value;
	}
	get name(): string
	{
		return this.nameField;
	}
	set results(value: CountCellDto[])
	{
		this.resultsField = value;
	}
	get results(): CountCellDto[]
	{
		return this.resultsField;
	}
	constructor()
	{
		super();
	}
}
class CreatePullRequestDto extends NObject
{
	private targetBranchIdField: number = 0;
	private bcdTaskIdField: number = 0;
	private effectiveDateField: DateTime = null;
	private effectiveDateFieldSpecified: boolean = false;
	set targetBranchId(value: number)
	{
		this.targetBranchIdField = value;
	}
	get targetBranchId(): number
	{
		return this.targetBranchIdField;
	}
	set bcdTaskId(value: number)
	{
		this.bcdTaskIdField = value;
	}
	get bcdTaskId(): number
	{
		return this.bcdTaskIdField;
	}
	set effectiveDate(value: DateTime)
	{
		this.effectiveDateField = value;
	}
	get effectiveDate(): DateTime
	{
		return this.effectiveDateField;
	}
	set effectiveDateSpecified(value: boolean)
	{
		this.effectiveDateFieldSpecified = value;
	}
	get effectiveDateSpecified(): boolean
	{
		return this.effectiveDateFieldSpecified;
	}
	constructor()
	{
		super();
	}
}
class findResourceBundle extends NObject
{
	language: string = null;
	country: string = null;
	constructor();
	constructor(language: string, country: string);
	constructor(language?: string, country?: string)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(language, country);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(language: string, country: string): void
	{
		this.language = language;
		this.country = country;
	}
}
class findResourceBundleResponse extends NObject
{
	$return: KeyValueDto[] = null;
	constructor();
	constructor($return: KeyValueDto[]);
	constructor($return?: KeyValueDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: KeyValueDto[]): void
	{
		this.$return = $return;
	}
}
class findValue extends NObject
{
	key: string = null;
	language: string = null;
	country: string = null;
	constructor();
	constructor(key: string, language: string, country: string);
	constructor(key?: string, language?: string, country?: string)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(key, language, country);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(key: string, language: string, country: string): void
	{
		this.key = key;
		this.language = language;
		this.country = country;
	}
}
class findValueResponse extends NObject
{
	$return: string = null;
	constructor();
	constructor($return: string);
	constructor($return?: string)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: string): void
	{
		this.$return = $return;
	}
}


class findLogHistoryByEntityId extends NObject
{
	id: number = 0;
	entityType: EntityType = null;
	firstResult: number = 0;
	maxResults: number = 0;
	constructor();
	constructor(id: number, entityType: EntityType, firstResult: number, maxResults: number);
	constructor(id?: number, entityType?: EntityType, firstResult?: number, maxResults?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(id, entityType, firstResult, maxResults);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(id: number, entityType: EntityType, firstResult: number, maxResults: number): void
	{
		this.id = id;
		this.entityType = entityType;
		this.firstResult = firstResult;
		this.maxResults = maxResults;
	}
}
class findLogHistoryByEntityIdResponse extends NObject
{
	$return: KeyValueDto[][] = null;
	constructor();
	constructor($return: KeyValueDto[][]);
	constructor($return?: KeyValueDto[][])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: KeyValueDto[][]): void
	{
		this.$return = $return;
	}
}
class findBcdWithOpenTasksRevision extends NObject
{
	bcdId: number = 0;
	revisionNumber: number = 0;
	constructor();
	constructor(bcdId: number, revisionNumber: number);
	constructor(bcdId?: number, revisionNumber?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(bcdId, revisionNumber);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(bcdId: number, revisionNumber: number): void
	{
		this.bcdId = bcdId;
		this.revisionNumber = revisionNumber;
	}
}
class findBcdWithOpenTasksRevisionResponse extends NObject
{
	$return: BcdDto = null;
	constructor();
	constructor($return: BcdDto);
	constructor($return?: BcdDto)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: BcdDto): void
	{
		this.$return = $return;
	}
}
class findDecisionViewRevision extends NObject
{
	decisionViewId: number = 0;
	revisionNumber: number = 0;
	constructor();
	constructor(decisionViewId: number, revisionNumber: number);
	constructor(decisionViewId?: number, revisionNumber?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(decisionViewId, revisionNumber);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(decisionViewId: number, revisionNumber: number): void
	{
		this.decisionViewId = decisionViewId;
		this.revisionNumber = revisionNumber;
	}
}
class findDecisionViewRevisionResponse extends NObject
{
	$return: DecisionView = null;
	constructor();
	constructor($return: DecisionView);
	constructor($return?: DecisionView)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: DecisionView): void
	{
		this.$return = $return;
	}
}
class findAllByType extends NObject
{
	type: AuditType = 0;
	constructor();
	constructor(type: AuditType);
	constructor(type?: AuditType)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(type);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(type: AuditType): void
	{
		this.type = type;
	}
}
class findAllByTypeResponse extends NObject
{
	$return: ImportExportAudit[] = null;
	constructor();
	constructor($return: ImportExportAudit[]);
	constructor($return?: ImportExportAudit[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: ImportExportAudit[]): void
	{
		this.$return = $return;
	}
}
class findAudit extends NObject
{
	id: number = 0;
	entityType: EntityType = null;
	firstResult: number = 0;
	maxResults: number = 0;
	constructor();
	constructor(id: number, entityType: EntityType, firstResult: number, maxResults: number);
	constructor(id?: number, entityType?: EntityType, firstResult?: number, maxResults?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(id, entityType, firstResult, maxResults);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(id: number, entityType: EntityType, firstResult: number, maxResults: number): void
	{
		this.id = id;
		this.entityType = entityType;
		this.firstResult = firstResult;
		this.maxResults = maxResults;
	}
}
class findAuditResponse extends NObject
{
	$return: AuditDetailsDto[] = null;
	constructor();
	constructor($return: AuditDetailsDto[]);
	constructor($return?: AuditDetailsDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: AuditDetailsDto[]): void
	{
		this.$return = $return;
	}
}
class findFactTypeRevision extends NObject
{
	factTypeId: number = 0;
	viewGroupId: number = 0;
	revisionNumber: number = 0;
	constructor();
	constructor(factTypeId: number, viewGroupId: number, revisionNumber: number);
	constructor(factTypeId?: number, viewGroupId?: number, revisionNumber?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(factTypeId, viewGroupId, revisionNumber);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(factTypeId: number, viewGroupId: number, revisionNumber: number): void
	{
		this.factTypeId = factTypeId;
		this.viewGroupId = viewGroupId;
		this.revisionNumber = revisionNumber;
	}
}
class findFactTypeRevisionResponse extends NObject
{
	$return: FactTypeInGlossariesHirarchyInfoDto = null;
	constructor();
	constructor($return: FactTypeInGlossariesHirarchyInfoDto);
	constructor($return?: FactTypeInGlossariesHirarchyInfoDto)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: FactTypeInGlossariesHirarchyInfoDto): void
	{
		this.$return = $return;
	}
}


class findDisplayFormulaString extends NObject
{
	Body: findDisplayFormulaStringBody = null;
	constructor();
	constructor(Body: findDisplayFormulaStringBody);
	constructor(Body?: findDisplayFormulaStringBody)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(Body);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(Body: findDisplayFormulaStringBody): void
	{
		this.Body = Body;
	}
}
class findDisplayFormulaStringBody extends NObject
{
	formulaId: number = 0;
	constructor();
	constructor(formulaId: number);
	constructor(formulaId?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(formulaId);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(formulaId: number): void
	{
		this.formulaId = formulaId;
	}
}
class findDisplayFormulaStringResponse extends NObject
{
	Body: findDisplayFormulaStringResponseBody = null;
	constructor();
	constructor(Body: findDisplayFormulaStringResponseBody);
	constructor(Body?: findDisplayFormulaStringResponseBody)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(Body);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(Body: findDisplayFormulaStringResponseBody): void
	{
		this.Body = Body;
	}
}
class findDisplayFormulaStringResponseBody extends NObject
{
	$return: string = null;
	constructor();
	constructor($return: string);
	constructor($return?: string)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: string): void
	{
		this.$return = $return;
	}
}

class findFactTypesWithDomainByWhiteboardId extends NObject
{
	arg0: number = 0;
	constructor();
	constructor(arg0: number);
	constructor(arg0?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: number): void
	{
		this.arg0 = arg0;
	}
}
class findFactTypesWithDomainByWhiteboardIdResponse extends NObject
{
	$return: FactType[] = null;
	constructor();
	constructor($return: FactType[]);
	constructor($return?: FactType[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: FactType[]): void
	{
		this.$return = $return;
	}
}


class insertSystemProperty extends NObject
{
	arg0: PropertyDto = null;
	constructor();
	constructor(arg0: PropertyDto);
	constructor(arg0?: PropertyDto)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: PropertyDto): void
	{
		this.arg0 = arg0;
	}
}
class insertSystemPropertyResponse extends NObject
{
	$return: number = 0;
	constructor();
	constructor($return: number);
	constructor($return?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: number): void
	{
		this.$return = $return;
	}
}
class findUserProperty extends NObject
{
	arg0: Property = 0;
	arg1: number = 0;
	constructor();
	constructor(arg0: Property, arg1: number);
	constructor(arg0?: Property, arg1?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0, arg1);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: Property, arg1: number): void
	{
		this.arg0 = arg0;
		this.arg1 = arg1;
	}
}
class findUserPropertyResponse extends NObject
{
	$return: PropertyDto = null;
	constructor();
	constructor($return: PropertyDto);
	constructor($return?: PropertyDto)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: PropertyDto): void
	{
		this.$return = $return;
	}
}
class insertUserProperty extends NObject
{
	arg0: PropertyDto = null;
	arg1: number = 0;
	constructor();
	constructor(arg0: PropertyDto, arg1: number);
	constructor(arg0?: PropertyDto, arg1?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0, arg1);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: PropertyDto, arg1: number): void
	{
		this.arg0 = arg0;
		this.arg1 = arg1;
	}
}
class insertUserPropertyResponse extends NObject
{
	$return: number = 0;
	constructor();
	constructor($return: number);
	constructor($return?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: number): void
	{
		this.$return = $return;
	}
}
class insertSystemProperties extends NObject
{
	arg0: PropertyDto[] = null;
	constructor();
	constructor(arg0: PropertyDto[]);
	constructor(arg0?: PropertyDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: PropertyDto[]): void
	{
		this.arg0 = arg0;
	}
}
class insertSystemPropertiesResponse extends NObject
{
	constructor()
	{
		super();
	}
}
class insertViewGroupProperties extends NObject
{
	arg0: PropertyDto[] = null;
	arg1: number = 0;
	constructor();
	constructor(arg0: PropertyDto[], arg1: number);
	constructor(arg0?: PropertyDto[], arg1?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0, arg1);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: PropertyDto[], arg1: number): void
	{
		this.arg0 = arg0;
		this.arg1 = arg1;
	}
}
class insertViewGroupPropertiesResponse extends NObject
{
	constructor()
	{
		super();
	}
}
class insertViewGroupProperty extends NObject
{
	arg0: PropertyDto = null;
	arg1: number = 0;
	constructor();
	constructor(arg0: PropertyDto, arg1: number);
	constructor(arg0?: PropertyDto, arg1?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0, arg1);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: PropertyDto, arg1: number): void
	{
		this.arg0 = arg0;
		this.arg1 = arg1;
	}
}
class insertViewGroupPropertyResponse extends NObject
{
	$return: number = 0;
	constructor();
	constructor($return: number);
	constructor($return?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: number): void
	{
		this.$return = $return;
	}
}
class getPropertiesTemplate extends NObject
{
	arg0: PropertyDiscriminator = 0;
	constructor();
	constructor(arg0: PropertyDiscriminator);
	constructor(arg0?: PropertyDiscriminator)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: PropertyDiscriminator): void
	{
		this.arg0 = arg0;
	}
}
class getPropertiesTemplateResponse extends NObject
{
	$return: PropertyConfig[] = null;
	constructor();
	constructor($return: PropertyConfig[]);
	constructor($return?: PropertyConfig[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: PropertyConfig[]): void
	{
		this.$return = $return;
	}
}
class findSystemProperties extends NObject
{
	constructor()
	{
		super();
	}
}
class findSystemPropertiesResponse extends NObject
{
	$return: PropertyDto[] = null;
	constructor();
	constructor($return: PropertyDto[]);
	constructor($return?: PropertyDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: PropertyDto[]): void
	{
		this.$return = $return;
	}
}
class findSystemProperty extends NObject
{
	arg0: Property = 0;
	constructor();
	constructor(arg0: Property);
	constructor(arg0?: Property)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: Property): void
	{
		this.arg0 = arg0;
	}
}
class findSystemPropertyResponse extends NObject
{
	$return: PropertyDto = null;
	constructor();
	constructor($return: PropertyDto);
	constructor($return?: PropertyDto)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: PropertyDto): void
	{
		this.$return = $return;
	}
}
class insertUserProperties extends NObject
{
	arg0: PropertyDto[] = null;
	arg1: number = 0;
	constructor();
	constructor(arg0: PropertyDto[], arg1: number);
	constructor(arg0?: PropertyDto[], arg1?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0, arg1);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: PropertyDto[], arg1: number): void
	{
		this.arg0 = arg0;
		this.arg1 = arg1;
	}
}
class insertUserPropertiesResponse extends NObject
{
	constructor()
	{
		super();
	}
}
class createPropertyConfig extends NObject
{
	arg0: PropertyConfig = null;
	constructor();
	constructor(arg0: PropertyConfig);
	constructor(arg0?: PropertyConfig)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: PropertyConfig): void
	{
		this.arg0 = arg0;
	}
}
class createPropertyConfigResponse extends NObject
{
	$return: number = 0;
	constructor();
	constructor($return: number);
	constructor($return?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: number): void
	{
		this.$return = $return;
	}
}
class findUserProperties extends NObject
{
	arg0: number = 0;
	constructor();
	constructor(arg0: number);
	constructor(arg0?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: number): void
	{
		this.arg0 = arg0;
	}
}
class findUserPropertiesResponse extends NObject
{
	$return: PropertyDto[] = null;
	constructor();
	constructor($return: PropertyDto[]);
	constructor($return?: PropertyDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: PropertyDto[]): void
	{
		this.$return = $return;
	}
}
class findViewGroupProperties extends NObject
{
	arg0: number = 0;
	constructor();
	constructor(arg0: number);
	constructor(arg0?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: number): void
	{
		this.arg0 = arg0;
	}
}
class findViewGroupPropertiesResponse extends NObject
{
	$return: PropertyDto[] = null;
	constructor();
	constructor($return: PropertyDto[]);
	constructor($return?: PropertyDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: PropertyDto[]): void
	{
		this.$return = $return;
	}
}
class findViewGroupProperty extends NObject
{
	arg0: Property = 0;
	arg1: number = 0;
	constructor();
	constructor(arg0: Property, arg1: number);
	constructor(arg0?: Property, arg1?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0, arg1);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: Property, arg1: number): void
	{
		this.arg0 = arg0;
		this.arg1 = arg1;
	}
}
class findViewGroupPropertyResponse extends NObject
{
	$return: PropertyDto = null;
	constructor();
	constructor($return: PropertyDto);
	constructor($return?: PropertyDto)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: PropertyDto): void
	{
		this.$return = $return;
	}
}
class findConfigPropertyByPropertyIdentifier extends NObject
{
	arg0: Property = 0;
	constructor();
	constructor(arg0: Property);
	constructor(arg0?: Property)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: Property): void
	{
		this.arg0 = arg0;
	}
}
class findConfigPropertyByPropertyIdentifierResponse extends NObject
{
	$return: PropertyConfig = null;
	constructor();
	constructor($return: PropertyConfig);
	constructor($return?: PropertyConfig)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: PropertyConfig): void
	{
		this.$return = $return;
	}
}

class list extends NObject
{
	constructor()
	{
		super();
	}
}
class listResponse extends NObject
{
	$return: JobExecutionInfo[] = null;
	constructor();
	constructor($return: JobExecutionInfo[]);
	constructor($return?: JobExecutionInfo[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: JobExecutionInfo[]): void
	{
		this.$return = $return;
	}
}

class findAllDataTypesFormats extends NObject
{
	constructor()
	{
		super();
	}
}
class findAllDataTypesFormatsResponse extends NObject
{
	$return: DataTypeFormatsDto[] = null;
	constructor();
	constructor($return: DataTypeFormatsDto[]);
	constructor($return?: DataTypeFormatsDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: DataTypeFormatsDto[]): void
	{
		this.$return = $return;
	}
}
class setFormatAsDefaultForDataType extends NObject
{
	arg0: number = 0;
	arg1: DataType = 0;
	constructor();
	constructor(arg0: number, arg1: DataType);
	constructor(arg0?: number, arg1?: DataType)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(arg0, arg1);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(arg0: number, arg1: DataType): void
	{
		this.arg0 = arg0;
		this.arg1 = arg1;
	}
}
class setFormatAsDefaultForDataTypeResponse extends NObject
{
	constructor()
	{
		super();
	}
}


class count extends NObject
{
	entityType: EntityType = null;
	entityId: number = 0;
	isLatestVersionOnly: boolean = false;
	constructor();
	constructor(entityType: EntityType, entityId: number, isLatestVersionOnly: boolean);
	constructor(entityType?: EntityType, entityId?: number, isLatestVersionOnly?: boolean)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(entityType, entityId, isLatestVersionOnly);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(entityType: EntityType, entityId: number, isLatestVersionOnly: boolean): void
	{
		this.entityType = entityType;
		this.entityId = entityId;
		this.isLatestVersionOnly = isLatestVersionOnly;
	}
}
class countResponse extends NObject
{
	$return: CountRowDto[] = null;
	constructor();
	constructor($return: CountRowDto[]);
	constructor($return?: CountRowDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: CountRowDto[]): void
	{
		this.$return = $return;
	}
}
class findAllCountableEntityTypes extends NObject
{
	constructor()
	{
		super();
	}
}
class findAllCountableEntityTypesResponse extends NObject
{
	$return: EntityType[] = null;
	constructor();
	constructor($return: EntityType[]);
	constructor($return?: EntityType[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: EntityType[]): void
	{
		this.$return = $return;
	}
}


enum SankaResponse
{
	YEAH_MAN,
	DB_IS_MIA
}
class sankaYouDead extends NObject
{
	constructor()
	{
		super();
	}
}
class sankaYouDeadResponse extends NObject
{
	$return: SankaResponse = 0;
	constructor();
	constructor($return: SankaResponse);
	constructor($return?: SankaResponse)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: SankaResponse): void
	{
		this.$return = $return;
	}
}
class getServerTimeZoneOffsetFromUTC extends NObject
{
	constructor()
	{
		super();
	}
}
class getServerTimeZoneOffsetFromUTCResponse extends NObject
{
	$return: number = 0;
	constructor();
	constructor($return: number);
	constructor($return?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: number): void
	{
		this.$return = $return;
	}
}
class logError extends NObject
{
	message: string = null;
	constructor();
	constructor(message: string);
	constructor(message?: string)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(message);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(message: string): void
	{
		this.message = message;
	}
}
class logErrorResponse extends NObject
{
	constructor()
	{
		super();
	}
}
enum LogLevel
{
	TRACE,
	DEBUG,
	INFO,
	WARN,
	ERROR,
	FATAL
}
class log extends NObject
{
	level: LogLevel = 0;
	message: string = null;
	constructor();
	constructor(level: LogLevel, message: string);
	constructor(level?: LogLevel, message?: string)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(level, message);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(level: LogLevel, message: string): void
	{
		this.level = level;
		this.message = message;
	}
}
class logResponse extends NObject
{
	constructor()
	{
		super();
	}
}
class getServerJavaSystemProperties extends NObject
{
	constructor()
	{
		super();
	}
}
class getServerJavaSystemPropertiesResponse extends NObject
{
	$return: KeyValueDto[] = null;
	constructor();
	constructor($return: KeyValueDto[]);
	constructor($return?: KeyValueDto[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: KeyValueDto[]): void
	{
		this.$return = $return;
	}
}


class findByName extends NObject
{
	entityTypeName: string = null;
	constructor();
	constructor(entityTypeName: string);
	constructor(entityTypeName?: string)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(entityTypeName);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(entityTypeName: string): void
	{
		this.entityTypeName = entityTypeName;
	}
}
class findByNameResponse extends NObject
{
	$return: EntityType = null;
	constructor();
	constructor($return: EntityType);
	constructor($return?: EntityType)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: EntityType): void
	{
		this.$return = $return;
	}
}
class findEntityTypeById extends NObject
{
	entityTypeId: number = 0;
	constructor();
	constructor(entityTypeId: number);
	constructor(entityTypeId?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(entityTypeId);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(entityTypeId: number): void
	{
		this.entityTypeId = entityTypeId;
	}
}
class findEntityTypeByIdResponse extends NObject
{
	$return: EntityType = null;
	constructor();
	constructor($return: EntityType);
	constructor($return?: EntityType)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: EntityType): void
	{
		this.$return = $return;
	}
}
class createEntityType extends NObject
{
	entityTypeId: EntityType = null;
	constructor();
	constructor(entityTypeId: EntityType);
	constructor(entityTypeId?: EntityType)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(entityTypeId);
	}
	private constructor_0(): void
	{
	}
	private constructor_1(entityTypeId: EntityType): void
	{
		this.entityTypeId = entityTypeId;
	}
}
class createEntityTypeResponse extends NObject
{
	$return: number = 0;
	constructor();
	constructor($return: number);
	constructor($return?: number)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: number): void
	{
		this.$return = $return;
	}
}
class findAllEntityTypes extends NObject
{
	constructor()
	{
		super();
	}
}
class findAllEntityTypesResponse extends NObject
{
	$return: EntityType[] = null;
	constructor();
	constructor($return: EntityType[]);
	constructor($return?: EntityType[])
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1($return);
	}
	private constructor_0(): void
	{
	}
	private constructor_1($return: EntityType[]): void
	{
		this.$return = $return;
	}
}

