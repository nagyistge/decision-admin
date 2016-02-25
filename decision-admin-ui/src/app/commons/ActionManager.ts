export class ActionManager
{

    commands = [];
    stackPosition = -1;
    savePosition = -1;

   public execute(command)
   {
        this.clearRedo();
        command.execute();
        this.commands.push(command);
        this.stackPosition++;
        this.changed();
    }

    public undo() {
        this.commands[this.stackPosition].undo();
        this.stackPosition--;
        this.changed();
    }
    public canUndo() {
        return this.stackPosition >= 0;
    }
    public redo() {
        this.stackPosition++;
        this.commands[this.stackPosition].redo();
        this.changed();
    }

    public canRedo() {
        return this.stackPosition < this.commands.length - 1;
    }

    public save() {
        this.savePosition = this.stackPosition;
        this.changed();
    }

    public dirty() {
        return this.stackPosition != this.savePosition;
    }

    private clearRedo() {
        this.commands = this.commands.slice(0, this.stackPosition + 1);
    }

    public changed() {}

}


export interface IUndoable{
    execute();
    undo();
    redo();
}
